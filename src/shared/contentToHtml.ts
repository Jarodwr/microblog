
import dompurify from 'dompurify';

const contentToHtml = (content: string) => ({
  __html: dompurify.sanitize(content)
});

export default contentToHtml;