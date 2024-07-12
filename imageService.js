export function getImage({ src }) {
  return src;
}

export const supportedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".svg"
]);
