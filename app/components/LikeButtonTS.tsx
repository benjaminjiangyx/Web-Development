'use client';
import { useState } from "react";

export default function CounterTS() {
  const [count, setCount] = useState<number>(0);
  return (
    <button
        onClick={() => setCount(count + 1)} //function using arrow notation
        className="px-4 py-2 bg-blue-500 text-white rounded"
    >
        👍 Likes: {count}
    </button>
  );
}