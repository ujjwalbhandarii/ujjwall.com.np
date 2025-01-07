import sanitizeHTML from 'sanitize-html';
import { DEFAULT_SANITIZE_OPTION } from '@/constants/package-config.constants';

export const sanitizeHtml = (
  text: string,
  options: sanitizeHTML.IOptions = DEFAULT_SANITIZE_OPTION,
): string => {
  const sanitizedText = sanitizeHTML(text, options);
  return sanitizedText;
};
