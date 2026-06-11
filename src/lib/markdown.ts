/**
 * Simple markdown to HTML converter for detailed descriptions
 */
export function renderMarkdown(content: string): string {
  return (
    content
      // Headers
      .replace(
        /^### (.+)$/gm,
        '<h3 class="text-lg font-bold text-gray-900 mt-6 mb-3">$1</h3>',
      )
      .replace(
        /^## (.+)$/gm,
        '<h2 class="text-xl font-bold text-gray-900 mt-8 mb-4">$1</h2>',
      )
      // Bold
      .replace(
        /\*\*(.+?)\*\*/g,
        '<strong class="font-semibold text-gray-900">$1</strong>',
      )
      // Bullet points
      .replace(
        /^- (.+)$/gm,
        '<li class="flex items-start gap-2 text-gray-600 mb-2"><span class="text-blue-600 mt-1.5">•</span><span>$1</span></li>',
      )
      // Wrap consecutive list items
      .replace(
        /(<li.*?<\/li>\n?)+/g,
        '<ul class="space-y-1 mb-4 list-none">$&</ul>',
      )
      // Paragraphs
      .replace(
        /\n\n(?!<)/g,
        '</p><p class="text-gray-600 leading-relaxed mb-4">',
      )
      // Clean up
      .replace(/^\n/, "")
      .replace(/\n$/, "")
  );
}
