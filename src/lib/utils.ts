// Utility for conditional classNames (shadcn-ui)
export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

// Example utility function file
export function noop() {} 