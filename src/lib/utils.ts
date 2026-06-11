import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Strips HTML tags and trims whitespace to prevent tag injection/XSS.
 */
export function sanitizeInput(text: string): string {
  if (typeof text !== "string") return "";
  return text
    .replace(/<[^>]*>?/gm, "") // Strip HTML tags
    .trim();
}

/**
 * Validates email structure using a standard robust regex.
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Checks if the user is rate-limited on the client side for a specific key.
 */
export function isRateLimited(key: string, limitMs: number = 30000): boolean {
  if (typeof window === "undefined") return false;
  const lastSubmit = localStorage.getItem(`rate_limit_${key}`);
  if (lastSubmit) {
    const timeDiff = Date.now() - parseInt(lastSubmit, 10);
    if (timeDiff < limitMs) {
      return true;
    }
  }
  return false;
}

/**
 * Sets the rate limit timestamp for a specific key.
 */
export function setRateLimit(key: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(`rate_limit_${key}`, Date.now().toString());
}

