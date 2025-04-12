import { useParams, useNavigate, Link } from "react-router-dom"
import { ChevronLeft, Calendar } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import { newsPosts } from "@/data/news-posts"
import { useLanguage } from "@/contexts/language-context"
import { formatDate } from "@/utils/format-date"
import MarkdownRenderer from "@/components/markdown-renderer"
import { useEffect, useState } from "react"

export default function NewsPostPage() {
  const params = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { language, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const slug = params.slug
  const post = newsPosts.find((p) => p.slug === slug)

  if (!post) {
    navigate("/news", { replace: true })
    return null
  }

  const isKhmer = language === "km"
  const title = isKhmer && post.titleKm ? post.titleKm : post.title
  const content = isKhmer && post.contentKm ? post.contentKm : post.content

  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-900 text-stone-100">
      <AnimatedBackground />

      {/* Minecraft-style dirt background overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Dirt_JE4_BE2.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "64px 64px",
        }}
      ></div>

      {/* Bone texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f2/Bone_Block_JE2_BE2.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      ></div>

      <main className="relative z-10 px-4 py-16 pt-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center">
            <Link to="/news" className="group flex items-center text-bone-300 transition-colors hover:text-bone-100">
              <ChevronLeft className="mr-1 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-minecraft">{t("news.back")}</span>
            </Link>
          </div>

          <article className="rounded-none border-2 border-bone-700 bg-black/40 backdrop-blur-sm">
            {post.image && (
              <div className="relative h-64 w-full md:h-80">
                <img
                  src={post.image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="p-6">
              <div className="mb-4 flex items-center text-sm text-bone-400">
                <Calendar className="mr-1 h-4 w-4" />
                <span>
                  {t("news.posted_on")} {formatDate(post.date, isKhmer ? "km-KH" : "en-US")}
                </span>
              </div>

              <h1 className="mb-6 font-minecraft text-3xl text-bone-100 md:text-4xl">{title}</h1>

              <div className="mt-6">
                <MarkdownRenderer content={content} />
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t-4 border-bone-800 bg-black/60 px-4 py-6 text-center backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <p className="font-minecraft text-sm text-bone-400">{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  )
}