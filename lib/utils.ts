import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function la(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
