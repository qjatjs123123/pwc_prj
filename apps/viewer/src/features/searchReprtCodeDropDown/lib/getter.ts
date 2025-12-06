import { REPRT_CODE, type ReprtKey } from "@/entities/config/constants";

export function getReprtArr(): ReprtKey[] {
  return Object.keys(REPRT_CODE) as ReprtKey[];
}