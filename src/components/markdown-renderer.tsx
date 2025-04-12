import { useEffect, useState } from "react"
import { marked } from "marked"
import DOMPurify from "dompurify"

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [htmlContent, setHtmlContent] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  
    const convertMarkdown = async () => {
      marked.setOptions({
        breaks: true,
        gfm: true,
      })
  
      const parsedHtml = await marked.parse(content)
      const cleanHtml = DOMPurify.sanitize(parsedHtml)
      setHtmlContent(cleanHtml)
    }
  
    convertMarkdown()
  }, [content])
  

  if (!mounted) {
    return null
  }

  return (
    <div
      className="prose prose-invert max-w-none prose-headings:font-minecraft prose-headings:text-bone-100 prose-p:text-bone-200 prose-a:text-emerald-400 prose-strong:text-bone-100 prose-li:text-bone-200"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}