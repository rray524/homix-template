export function truncateText(text: string, maxChars = 140) {
  if (text.length <= maxChars) {
    return text;
  }
  return text.slice(0, maxChars) + "...";
}
