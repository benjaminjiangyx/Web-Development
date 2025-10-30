export const metadata = {
  title: 'Flappy Bird',
  description: 'Custom Flappy Bird game implemented in JavaScript',
};

import FlappyGame from '@/app/flappy/FlappyGame';

export default function Page() {
  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '100dvh',
        padding: '0 16px 24px',
        background: '#0f0f0f',
        color: '#f1f1f1',
        fontFamily: 'Roboto, Arial, sans-serif',
      }}
    >
      <div style={{ width: '100%', maxWidth: 980 }}>
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            height: 56,
            padding: '0 12px',
            borderBottom: '1px solid #303030',
            background: '#0f0f0f',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              aria-hidden
              style={{
                width: 24,
                height: 24,
                background: '#ff0000',
                clipPath: 'polygon(20% 15%, 20% 85%, 85% 50%)',
                borderRadius: 4,
              }}
            />
            <strong style={{ fontSize: 18, letterSpacing: 0.2 }}>YouTube</strong>
          </div>
          <div style={{ marginLeft: 'auto', opacity: 0.7, fontSize: 14 }}>Flappy Bird</div>
        </header>
        <section style={{ display: 'grid', gap: 16, paddingTop: 16 }}>
          <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr', placeItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: 480 }}>
              <h1 style={{ textAlign: 'left', margin: '8px 0 12px', fontSize: 20, fontWeight: 700 }}>Flappy Bird</h1>
              <FlappyGame />
              <FlappyGame />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


