// Normalize text: lowercase, remove accents
export function norm(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function matchSearch(text: string, query: string): boolean {
  if (!query) return true;
  return norm(text).includes(norm(query));
}

export function matchSearchMulti(fields: string[], query: string): boolean {
  if (!query) return true;
  const q = norm(query);
  return fields.some(f => norm(f).includes(q));
}
