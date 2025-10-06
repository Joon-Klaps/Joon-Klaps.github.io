const TARGET_REGEX = /\b(?:J(?:oon)?\.?\s+Klaps|Klaps\s+J(?:oon)?\.?)/gi;

/**
 * Wraps occurrences of the author's name ("Joon Klaps", "J. Klaps", "Klaps J", ...)
 * in a <strong> tag.
 */
export function highlightAuthorName(input?: string | null): string {
  if (!input) {
    return input ?? "";
  }
  return input.replace(TARGET_REGEX, (match) => `<strong>${match}</strong>`);
}
