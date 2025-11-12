import { favoritesHandler } from "@/entities/Manager";
import { setupWorker } from "msw/browser";
export const worker = setupWorker(...favoritesHandler);
