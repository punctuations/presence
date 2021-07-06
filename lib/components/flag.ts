import { badges } from "@lib/components/badges";

export const flags = (flag: number): string[] => {
  let flags: string[] = [];

  if (flag & 1) flags.push(badges.staff);
  if (flag & 2) flags.push(badges.partner);
  if (flag & 4) flags.push(badges.events);
  if (flag & 8) flags.push(badges.bug_hunter[0]);
  if (flag & 64) flags.push(badges.house.bravery);
  if (flag & 128) flags.push(badges.house.brilliance);
  if (flag & 256) flags.push(badges.house.balance);
  if (flag & 512) flags.push(badges.early_supporter);
  if (flag & 16384) flags.push(badges.bug_hunter[1]);
  if (flag & 131072) flags.push(badges.early_developer);

  return flags;
};
