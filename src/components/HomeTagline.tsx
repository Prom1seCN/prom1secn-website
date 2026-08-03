import { useState, useCallback, useEffect, useRef } from 'react';

interface HomeTaglineProps {
  lines: string[];
  autoInterval?: number; // ms，默认 3000
}

export default function HomeTagline({ lines, autoInterval = 3000 }: HomeTaglineProps) {
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
  }, [lines.length]);

  // 每 3s 自动切换
  useEffect(() => {
    if (lines.length <= 1) return;
    const iv = setInterval(next, autoInterval);
    return () => clearInterval(iv);
  }, [next, autoInterval, lines.length]);

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
          margin: '2.75rem auto 0.25rem',
          textAlign: 'center',
          animation: 'tagline-in 0.4s ease-out',
        }}
      >
        {lines[idx]}
      </p>
      <span
        style={{
          display: 'block',
          marginTop: '0.25rem',
          fontSize: '0.6875rem',
          color: 'var(--text3, rgba(148,163,184,0.45))',
          letterSpacing: '0.1em',
          textAlign: 'center',
          animation: 'tagline-in 0.4s ease-out 0.15s both',
        }}
      >
        点击刷新
      </span>
    </button>
  );
}
