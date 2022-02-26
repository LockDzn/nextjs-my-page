import { remark } from 'remark'
import html from 'remark-html'
import remarkHighlightjs from 'remark-highlight.js'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkHighlightjs)
    .use(html)
    .process(markdown)

  return result.toString()
}
