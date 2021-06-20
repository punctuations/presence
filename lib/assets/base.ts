export function base(content: string) {
  return "data:image/svg+xml;base64," + Buffer.from(content).toString("base64");
}
