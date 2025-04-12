import { ChevronLeft } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import NewsCard from "@/components/news-card"
import { newsPosts } from "@/data/news-posts"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function NewsPage() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Sort posts by date (newest first)
  const sortedPosts = [...newsPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const featuredPost = sortedPosts.find((post) => post.featured)
  const regularPosts = featuredPost ? sortedPosts.filter((post) => post.id !== featuredPost.id) : sortedPosts

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-stone-900 text-stone-100">
      <AnimatedBackground />

      {/* Minecraft-style dirt background overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('https://th.bing.com/th/id/OIP.PTUHQP8DQC50ZE8FW67MaAHaHa?rs=1&pid=ImgDetMain')",
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

      <main className="relative flex-grow z-10 px-4 py-16 pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center">
            <Link to="/" className="group flex items-center text-bone-300 transition-colors hover:text-bone-100">
              <ChevronLeft className="mr-1 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-minecraft">{t("nav.home")}</span>
            </Link>
          </div>

          <div className="mb-12 text-center">
            <h1 className="mb-4 font-minecraft text-4xl text-bone-100 md:text-5xl">{t("news.title")}</h1>
            <p className="mx-auto max-w-2xl text-lg text-bone-200">{t("news.subtitle")}</p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-12">
              <h2 className="mb-6 border-b-2 border-bone-700 pb-2 font-minecraft text-2xl text-emerald-400">
                {t("news.latest_updates")}
              </h2>
              <NewsCard post={featuredPost} featured={true} />
            </div>
          )}

          {/* Regular Posts */}
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.length > 0 ? (
              regularPosts.map((post) => <NewsCard key={post.id} post={post} />)
            ) : (
              <div className="col-span-full rounded-none border-2 border-bone-700 bg-black/40 p-6 text-center backdrop-blur-sm">
                <p className="font-minecraft text-bone-300">{t("news.no_posts")}</p>
              </div>
            )}
          </div>
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