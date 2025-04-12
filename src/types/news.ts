export interface NewsPost {
    id: string
    title: string
    titleKm?: string // Optional Khmer title
    slug: string
    date: string
    content: string
    contentKm?: string // Optional Khmer content
    image?: string
    featured?: boolean
  }
  