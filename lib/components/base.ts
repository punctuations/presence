export async function base(context: string) {
  return "data:image/svg+xml;base64," + Buffer.from(context).toString("base64");
}
