'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Vector = { x: number; y: number };

type Pipe = {
  x: number;
  gapY: number;
  passed: boolean;
};

const GRAVITY = 1400; // px/s^2
const FLAP_VELOCITY = -420; // px/s upward
const PIPE_SPEED = 180; // px/s to the left
const PIPE_INTERVAL = 1400; // ms
const PIPE_GAP = 170; // px opening
const GROUND_HEIGHT = 72; // px
const BIRD_RADIUS = 16; // px

const CANVAS_BASE = { width: 480, height: 720 };

export default function FlappyGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const spawnRef = useRef<number>(0);

  const [score, setScore] = useState(0);
  const [best, setBest] = useState<number>(() => {
    if (typeof window === 'undefined') return 0;
    const v = Number(localStorage.getItem('flappy-best') || '0');
    return Number.isFinite(v) ? v : 0;
  });
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const birdPosRef = useRef<Vector>({ x: 140, y: CANVAS_BASE.height / 2 });
  const birdVelRef = useRef<Vector>({ x: 0, y: 0 });
  const pipesRef = useRef<Pipe[]>([]);

  const dpr = useMemo(() => (typeof window !== 'undefined' ? Math.max(1, Math.min(2, window.devicePixelRatio || 1)) : 1), []);

  const reset = useCallback(() => {
    setScore(0);
    setGameOver(false);
    birdPosRef.current = { x: 140, y: CANVAS_BASE.height / 2 };
    birdVelRef.current = { x: 0, y: 0 };
    pipesRef.current = [];
    lastTsRef.current = null;
    spawnRef.current = 0;
  }, []);

  const start = useCallback(() => {
    reset();
    setRunning(true);
  }, [reset]);

  const endGame = useCallback(() => {
    setRunning(false);
    setGameOver(true);
    setBest((prev) => {
      const next = Math.max(prev, score);
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('flappy-best', String(next));
        } catch {
          // ignore
        }
      }
      return next;
    });
  }, [score]);

  const flap = useCallback(() => {
    if (!running) {
      start();
      return;
    }
    birdVelRef.current.y = FLAP_VELOCITY;
  }, [running, start]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (gameOver) {
          start();
        } else {
          flap();
        }
      } else if (e.code === 'Enter' && gameOver) {
        e.preventDefault();
        start();
      }
    };
    const onPointer = () => {
      if (gameOver) start();
      else flap();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onPointer);
    window.addEventListener('touchstart', onPointer, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onPointer);
      window.removeEventListener('touchstart', onPointer);
    };
  }, [flap, gameOver, start]);

  const spawnPipe = useCallback(() => {
    const minY = 140;
    const maxY = CANVAS_BASE.height - GROUND_HEIGHT - 140;
    const gapY = Math.random() * (maxY - minY) + minY;
    pipesRef.current.push({ x: CANVAS_BASE.width + 40, gapY, passed: false });
  }, []);

  const step = useCallback(
    (ts: number) => {
      if (!canvasRef.current) return;
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = Math.min(32, ts - lastTsRef.current) / 1000; // clamp to avoid spikes
      lastTsRef.current = ts;

      // physics
      birdVelRef.current.y += GRAVITY * dt;
      birdPosRef.current.y += birdVelRef.current.y * dt;

      spawnRef.current += dt * 1000;
      if (spawnRef.current >= PIPE_INTERVAL) {
        spawnRef.current = 0;
        spawnPipe();
      }

      // move pipes and handle score
      for (let i = 0; i < pipesRef.current.length; i++) {
        pipesRef.current[i].x -= PIPE_SPEED * dt;
      }
      // remove off-screen
      pipesRef.current = pipesRef.current.filter((p) => p.x > -80);

      // scoring and collisions
      const birdX = birdPosRef.current.x;
      const birdY = birdPosRef.current.y;

      for (const p of pipesRef.current) {
        // score when center passes pipe
        if (!p.passed && p.x + 40 < birdX - BIRD_RADIUS) {
          p.passed = true;
          setScore((s) => s + 1);
        }

        // collision with pipe rectangles
        const pipeW = 64;
        const topH = p.gapY - PIPE_GAP / 2;
        const bottomY = p.gapY + PIPE_GAP / 2;

        const inX = birdX + BIRD_RADIUS > p.x && birdX - BIRD_RADIUS < p.x + pipeW;
        if (inX) {
          const hitsTop = birdY - BIRD_RADIUS < topH;
          const hitsBottom = birdY + BIRD_RADIUS > bottomY;
          if (hitsTop || hitsBottom) {
            endGame();
          }
        }
      }

      // ground / ceiling
      if (birdY + BIRD_RADIUS >= CANVAS_BASE.height - GROUND_HEIGHT || birdY - BIRD_RADIUS <= 0) {
        endGame();
      }

      // draw
      const w = CANVAS_BASE.width * dpr;
      const h = CANVAS_BASE.height * dpr;
      ctx.resetTransform();
      ctx.clearRect(0, 0, w, h);
      ctx.scale(dpr, dpr);

      // sky
      const grad = ctx.createLinearGradient(0, 0, 0, CANVAS_BASE.height);
      grad.addColorStop(0, '#87ceeb');
      grad.addColorStop(1, '#b3e5fc');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, CANVAS_BASE.width, CANVAS_BASE.height);

      // pipes
      ctx.fillStyle = '#2e7d32';
      for (const p of pipesRef.current) {
        const pipeW = 64;
        const topH = p.gapY - PIPE_GAP / 2;
        const bottomY = p.gapY + PIPE_GAP / 2;
        // top
        ctx.fillRect(p.x, 0, pipeW, topH);
        // bottom
        ctx.fillRect(p.x, bottomY, pipeW, CANVAS_BASE.height - GROUND_HEIGHT - bottomY);
      }

      // ground
      ctx.fillStyle = '#8d6e63';
      ctx.fillRect(0, CANVAS_BASE.height - GROUND_HEIGHT, CANVAS_BASE.width, GROUND_HEIGHT);
      ctx.fillStyle = '#a1887f';
      for (let x = 0; x < CANVAS_BASE.width; x += 16) {
        ctx.fillRect(x, CANVAS_BASE.height - GROUND_HEIGHT + 8, 12, 8);
      }

      // bird
      ctx.save();
      ctx.translate(birdX, birdY);
      const tilt = Math.max(-0.6, Math.min(0.6, birdVelRef.current.y / 600));
      ctx.rotate(tilt);
      ctx.fillStyle = '#ffca28';
      ctx.beginPath();
      ctx.arc(0, 0, BIRD_RADIUS, 0, Math.PI * 2);
      ctx.fill();
      // eye
      ctx.fillStyle = '#212121';
      ctx.beginPath();
      ctx.arc(6, -4, 3, 0, Math.PI * 2);
      ctx.fill();
      // beak
      ctx.fillStyle = '#ff7043';
      ctx.beginPath();
      ctx.moveTo(BIRD_RADIUS - 2, 0);
      ctx.lineTo(BIRD_RADIUS + 10, -4);
      ctx.lineTo(BIRD_RADIUS + 10, 4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // score
      ctx.fillStyle = '#0d0d0d';
      ctx.font = 'bold 28px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto';
      ctx.textAlign = 'left';
      ctx.fillText(`Score: ${score}`, 16, 40);
      ctx.textAlign = 'right';
      ctx.fillText(`Best: ${best}`, CANVAS_BASE.width - 16, 40);

      if (running) {
        animationRef.current = requestAnimationFrame(step);
      }
    },
    [best, dpr, endGame, running, score, spawnPipe]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // handle HiDPI rendering
    const cssW = CANVAS_BASE.width;
    const cssH = CANVAS_BASE.height;
    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    canvas.style.width = cssW + 'px';
    canvas.style.height = cssH + 'px';
  }, [dpr]);

  useEffect(() => {
    if (running) {
      animationRef.current = requestAnimationFrame(step);
    }
    return () => {
      if (animationRef.current != null) cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    };
  }, [running, step]);

  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <canvas
        ref={canvasRef}
        style={{
          borderRadius: 10,
          boxShadow: '0 2px 0 #000, 0 6px 20px rgba(0,0,0,0.35)',
          outline: '1px solid #303030',
          background: '#b3e5fc',
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={() => (gameOver || !running ? start() : flap())}
          style={{
            padding: '10px 14px',
            borderRadius: 18,
            background: '#272727',
            color: '#f1f1f1',
            border: '1px solid #3f3f3f',
            cursor: 'pointer',
          }}
        >
          {gameOver ? 'Restart' : running ? 'Flap (Space)' : 'Start'}
        </button>
        <div style={{ color: '#aaaaaa' }}>
          <span>Tap/Click/Space to flap. Avoid pipes. Reach a new best!</span>
        </div>
      </div>
    </div>
  );
}


