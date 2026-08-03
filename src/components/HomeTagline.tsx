import { useState, useCallback, useRef } from 'react';

interface HomeTaglineProps {
  lines: string[];
}

export default function HomeTagline({ lines }: HomeTaglineProps) {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * lines.length));
  const [tick, setTick] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = useCallback(() => {
    // 排除当前句，从其余中随机选一句
    setIdx((prev) => {
      if (lines.length <= 1) return prev;
      let n = prev;
      while (n === prev) {
        n = Math.floor(Math.random() * lines.length);
      }
      return n;
    });
    setTick((t) => t + 1);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (timerRef.current) clearTimeout(timerRef.current);
    }, 3000);
  }, [lines.length]);

  if (lines.length === 0) return null;

  return (
    <button
      onClick={next}
      title="点击换一句"
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        margin: '0 auto',
        font: 'inherit',
        color: 'inherit',
        display: 'block',
        width: 'fit-content',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <p
        key={`${idx}-${tick}`}
        class="home-tagline"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: '1.125rem',
          fontWeight: 500,
          color: 'var(--text2)',
          letterSpacing: '0.06em',
          margin: '2rem auto 0',
          textAlign: 'center',
          animation: 'tagline-in 0.4s ease-out',
        }}
      >
        {lines[idx]}
      </p>
    </button>
  );
}
