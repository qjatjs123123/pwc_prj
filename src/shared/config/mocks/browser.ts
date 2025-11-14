import { companiesHandler, favoritesHandler } from "@/entities/Manager";
import { favoritesPostHandler } from "@/features/Manager/createFavoriteCompany";
import { setupWorker } from "msw/browser";
export const worker = setupWorker(
  ...favoritesHandler,
  ...companiesHandler,
  ...favoritesPostHandler
);
