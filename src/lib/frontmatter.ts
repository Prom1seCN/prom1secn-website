export function parseFrontmatter(raw: string): Record<string, any> {
  const parts = raw.split('---');
  if (parts.length < 2) return {};
  const data: Record<string, any> = {};
  let currentKey = '';
  for (const line of parts[1].split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ') && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(trimmed.slice(2).trim());
      continue;
    }
    const i = line.indexOf(':');
    if (i > 0) {
      const key = line.slice(0, i).trim();
      let val: any = line.slice(i + 1).trim();
      if (val.startsWith('[') && val.endsWith(']')) {
        val = val.slice(1, -1).split(',').map((s: string) => s.trim());
      }
      data[key] = val;
      currentKey = key;
    }
  }
  if (data.publish === 'true') data.publish = true;
  if (data.publish === 'false') data.publish = false;
  return data;
}
