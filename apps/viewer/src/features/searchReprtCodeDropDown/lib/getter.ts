import { REPRT_CODE } from "@/entities/config/constants";

export function getReprtArr(): string[] {
  return Object.keys(REPRT_CODE);
}