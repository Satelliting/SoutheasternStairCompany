export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  if (!path.startsWith("/")) return path;
  return `${base}${path}` || "/";
}
