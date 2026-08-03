export const defaultTagColors: Record<string, { bg: string; border: string; text: string }> = {
  'Node.js':    { bg: 'rgba(67,160,71,0.08)',  border: 'rgba(67,160,71,0.25)',  text: '#43a047' },
  'Express':    { bg: 'rgba(158,158,158,0.08)', border: 'rgba(158,158,158,0.25)', text: '#9e9e9e' },
  'MongoDB':    { bg: 'rgba(0,150,100,0.08)',   border: 'rgba(0,150,100,0.25)',   text: '#009664' },
  '微信小程序': { bg: 'rgba(7,193,96,0.08)',    border: 'rgba(7,193,96,0.25)',    text: '#07c160' },
  'pm2':        { bg: 'rgba(155,89,182,0.08)',  border: 'rgba(155,89,182,0.25)',  text: '#9b59b6' },
  'Nginx':     { bg: 'rgba(0,150,57,0.08)',    border: 'rgba(0,150,57,0.25)',    text: '#009639' },
  'Astro':      { bg: 'rgba(255,93,1,0.08)',    border: 'rgba(255,93,1,0.25)',    text: '#ff5d01' },
  'React':      { bg: 'rgba(97,218,251,0.08)',  border: 'rgba(97,218,251,0.25)',  text: '#61dafb' },
  'Tailwind':   { bg: 'rgba(56,189,248,0.08)',  border: 'rgba(56,189,248,0.25)',  text: '#38bdf8' },
  'SSR':        { bg: 'rgba(249,115,22,0.08)',  border: 'rgba(249,115,22,0.25)',  text: '#f97316' },
  'KaTeX':      { bg: 'rgba(61,97,161,0.08)',   border: 'rgba(61,97,161,0.25)',   text: '#3d61a1' },
  '技术':       { bg: 'rgba(249,115,22,0.08)',  border: 'rgba(249,115,22,0.25)',  text: '#f97316' },
  '生活':       { bg: 'rgba(14,165,233,0.08)',  border: 'rgba(14,165,233,0.25)',  text: '#0ea5e9' },
  '思考':       { bg: 'rgba(168,85,247,0.08)',  border: 'rgba(168,85,247,0.25)',  text: '#a855f7' },
  'Build in Public': { bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.25)', text: '#22c55e' },
};

export const palette = ['#f97316','#22c55e','#3b82f6','#a855f7','#f43f5e','#14b8a6','#eab308','#ec4899','#ff5d01','#61dafb'];

export function tagStyle(tag: string) {
  if (defaultTagColors[tag]) return defaultTagColors[tag];
  const c = palette[Math.abs(tag.split('').reduce((h,c)=>h*31+c.charCodeAt(0),0)) % palette.length];
  return { bg: c+'10', border: c+'33', text: c };
}
