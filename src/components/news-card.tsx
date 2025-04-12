import { Calendar } from "lucide-react"
import type { NewsPost } from "@/types/news"
import { useLanguage } from "@/contexts/language-context"
import { formatDate } from "@/utils/format-date"
import { Link } from "react-router-dom"

interface NewsCardProps {
  post: NewsPost
  featured?: boolean
}

export default function NewsCard({ post, featured = false }: NewsCardProps) {
  const { language, t } = useLanguage()
  const isKhmer = language === "km"
  const title = isKhmer && post.titleKm ? post.titleKm : post.title

  return (
    <div
      className={`group rounded-none border-2 border-bone-700 bg-black/40 backdrop-blur-sm transition-all hover:border-bone-600 hover:bg-black/60 ${
        featured ? "col-span-full md:col-span-2" : ""
      }`}
    >
      <div className="relative">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={post.image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        {featured && (
          <div className="absolute left-0 top-0 bg-emerald-700 px-3 py-1 font-minecraft text-white">
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center text-sm text-bone-400">
          <Calendar className="mr-1 h-4 w-4" />
          <span>
            {t("news.posted_on")} {formatDate(post.date, isKhmer ? "km-KH" : "en-US")}
          </span>
        </div>

        <h3 className="mb-2 font-minecraft text-xl text-bone-100">{title}</h3>

        <Link
          to={`/news/${post.slug}`}
          className="mt-4 inline-block border-b-4 border-emerald-800 bg-emerald-600 px-4 py-2 font-minecraft text-white transition-all hover:-translate-y-[2px] hover:border-b-[6px] hover:border-emerald-800 active:translate-y-[1px] active:border-b-2"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}