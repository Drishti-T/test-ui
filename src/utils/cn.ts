// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combine class names with conflict resolution
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
