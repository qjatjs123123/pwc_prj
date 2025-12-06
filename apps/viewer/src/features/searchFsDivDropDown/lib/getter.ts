import { FS_DIV, type FsDivKey } from "@/entities/config/constants";

export function getFsDivArr(): { key: FsDivKey; value: string }[] {
  return Object.entries(FS_DIV).map(([key, value]) => ({
    key: key as FsDivKey,
    value
  }));
}
