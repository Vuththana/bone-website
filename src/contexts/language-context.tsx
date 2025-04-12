"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "km"

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

// Define our translations
const translations: Translations = {
  en: {
    // Navigation
    "nav.home": "HOME",
    "nav.news": "NEWS",
    "nav.store": "STORE",
    "nav.leaderboards": "LEADERBOARDS",
    "nav.rules": "RULES",
    "nav.about": "ABOUT",
    "nav.join_discord": "JOIN DISCORD",

    // Homepage
    "home.title": "BONE NETWORK",
    "home.subtitle": "Dig Deep. Build Big. Survive Together.",
    "home.server_features": "SERVER FEATURES",
    "home.about_bone": "ABOUT Bone Network",
    "home.about_text1":
      "Established in 2024, Bone Network is a community-focused Minecraft server offering a unique survival experience with a twist. Our server features balanced gameplay, and a friendly community.",
    "home.learn_more": "Learn More",
    "home.join_community": "JOIN OUR COMMUNITY",
    "home.connect_players": "Connect with other players and stay updated with server news",
    "home.discord": "Discord",
    "home.twitter": "Twitter",

    // Features
    "feature.survival": "Survival Experience",
    "feature.survival_desc": "Pure vanilla survival with minimal plugins for the authentic Minecraft experience.",
    "feature.community": "Active Community",
    "feature.community_desc": "Join our friendly players and participate in regular events and competitions.",
    "feature.builds": "Custom Builds",
    "feature.builds_desc": "Explore amazing structures and contribute to our growing world.",
    "feature.economy": "Economy System",
    "feature.economy_desc": "Trade with other players using our balanced in-game economy.",
    "feature.protection": "Land Protection",
    "feature.protection_desc": "Claim and protect your builds with our easy-to-use protection system.",
    "feature.events": "Regular Events",
    "feature.events_desc": "Participate in and seasonal competitions with prizes.",

    // Footer
    "footer.copyright": "© 2024 Bone SMP. Not affiliated with Mojang AB.",

    // News
    "news.title": "SERVER NEWS",
    "news.subtitle": "Stay updated with the latest changes and events on Bone SMP",
    "news.read_more": "Read More",
    "news.back": "Back to News",
    "news.posted_on": "Posted on",
    "news.no_posts": "No news posts yet. Check back soon!",
    "news.latest_updates": "LATEST UPDATES",

    // Server Status
    "status.status": "STATUS:",
    "status.online": "ONLINE",
    "status.offline": "OFFLINE",
    "status.players": "PLAYERS:",
    "status.updated": "Updated:",

    // Store Page
    "store.title": "Store",
    "store.description": "Support the server and enhance your gameplay experience with these exclusive perks and items.",
    "store.info": "PAYMENT INFORMATION",
    "store.info_description1": "All purchases are processed securely through our payment provider. Once your payment is confirmed, your perks will be automatically applied to your account within 5 to 30 minutes.",
    "store.info_description2": "If you encounter any issues with your purchase, please contact our support team on Discord.",

    // Rule Page
    "title.title" : "SERVER RULES",
    "title.description": "To ensure everyone has a great experience on Bone Network, please follow these rules. Failure to comply may result in temporary or permanent bans.",
    // General Conduct
    "general_conduct.general_conduct": "General Conduct",
    "general_conduct.respectful": "Be respectful to staff members. If you encounter any server issues or performance problems, report them to the staff instead of complaining in the server chat. Players who are caught complaining instead of reporting may receive a temporary mute.",
    "general_conduct.no_spam": "No spamming in chat or using all caps excessively.",

    // Gameplay Rule
    "gameplay.gameplay_rules": "Gameplay Rules",
    "gameplay.no_cheating": "No hacking, cheating, or using modified clients that provide unfair advantages.",
    "gameplay.no_exploiting": "No exploiting bugs or glitches. Report them to staff instead.",
    "gameplay.no_offensive_builds": "No building offensive or inappropriate structures.",
      
    // Building Guidelines
    "building.building_guidelines": "Building Guidelines",
    "building.redstone": "No massive redstone contraptions that cause lag without staff approval.",
    
    // Economy & Trading
    "eco.economy_trading": "Economy & Trading",
    "eco.honor_agreements": "Honor all agreements made for trades or services.",
    
    // Server Performance
    "server.server_performance": "Server Performance",
    "server.no_lag_machines": "No creating lag machines or devices that negatively impact server performance.",
    "server.report_performance_issues": "Report any performance issues to staff.",

    // Consequences
    "punishment.title": "Consequences",
    "punishment.title1": "Rule violations will be handled according to severity:",
    "punishment.warning_label": "Warning",
    "punishment.warning_desc": "First minor offense",
    "punishment.temp_ban_label": "Temporary Ban (1-7 days)",
    "punishment.temp_ban_desc": "Repeated minor offenses or moderate violations",
    "punishment.long_ban_label": "Long-term Ban (30+ days)",
    "punishment.long_ban_desc": "Serious violations or continued rule-breaking",
    "punishment.perm_ban_label": "Permanent Ban",
    "punishment.perm_ban_desc": "Extreme violations, hacking, or repeated serious offenses",
    
    "punishment.appeal_note": "All bans can be appealed on our Discord server. The staff team has final say in all moderation decisions.",
    
    // About Page
    "about.title": "ABOUT US",
    "about.description": "Learn more about Bone Network, our history, and the team behind the server.",
    "about.story": "OUR STORY",
    "about.story_description": "Founded in 2024 by a group of friends, Bone Network began as a small private server with a vision—to create a unique and immersive Minecraft survival experience. What started as a passion project quickly grew into a thriving community of builders, explorers, and adventurers.",
    "about.story_description1": "At Bone Network, we believe in fostering creativity, community, and fair play. Our server is designed to provide a balanced and engaging gameplay experience, where players can unleash their creativity while embracing the challenges of survival Minecraft.",
    "about.story_description2": "The name Bone was inspired by the iconic Minecraft item.",
    "about.story_description3": "Join us and be part of the adventure!",
    "team.title": "OUR TEAM",
    "team.description": "Meet the dedicated staff members who keep Bone Network running smoothly and ensure everyone has a great experience.",
    "team.gorosxd_description": "Server owner and main developer. Responsible for server maintenance and custom plugins.",
    "team.sas_description": "Handles player support, moderation, and community events. Always ready to help!",
    "team.jakain_description": "Assists players with in-game questions, helps maintain a friendly environment, and provides support for various server-related issues.",
    // Language
    language: "ភាសាខ្មែរ", // Khmer in Khmer
  },
  km: {
    // Navigation
    "nav.home": "ទំព័រដើម",
    "nav.news": "ព័ត៌មាន",
    "nav.store": "ហាង",
    "nav.leaderboards": "តារាងពិន្ទុ",
    "nav.rules": "ច្បាប់",
    "nav.about": "អំពី",
    "nav.join_discord": "ចូលរួម DISCORD",

    // Homepage
    "home.title": "BONE NETWORK",
    "home.subtitle": "Dig Deep. Build Big. Survive Together.",
    "home.server_features": "លក្ខណៈពិសេស នៃ Server",
    "home.about_bone": "អំពី Bone Network",
    "home.about_text1":
      "បង្កើតឡើងនៅឆ្នាំ 2024 Bone Network គឺជា Server Minecraft ដែលផ្តោតលើសហគមន៍ដែលផ្តល់នូវបទពិសោធន៍ Survival ដែលមានលក្ខណះថី្ម។ Server របស់យើងមាន Balanced Gameplay និង Friendly Community។",
    "home.learn_more": "ស្វែងយល់បន្ថែម",
    "home.join_community": "ចូលរួមសហគមន៍របស់យើង",
    "home.connect_players": "ភ្ជាប់ជាមួយអ្នកលេងផ្សេងទៀត និងទទួលបានព័ត៌មានថ្មីៗអំពី Server",
    "home.discord": "Discord",
    "home.twitter": "Twitter",

    // Features
    "feature.survival": "Survival Experience",
    "feature.survival_desc": "ការ Survival ជាមួយនឹង​ Plugin សម្រាប់បទពិសោធន៍ដ៏ថ្មី។",
    "feature.community": "Active Community",
    "feature.community_desc": "ចូលរួមជាមួយអ្នកលេង និងចូលរួមក្នុង Event និងការប្រកួតប្រជែងគ្នា។",
    "feature.builds": "ការសាងសង់ផ្ទាល់ខ្លួន",
    "feature.builds_desc": "ដើរផ្សងព្រេង និងរួមចំណែកក្នុងការសាងសង់អោយរីកចម្រើនក្នុង World របស់ពួកយើង។",
    "feature.economy": "ប្រព័ន្ធសេដ្ឋកិច្ច",
    "feature.economy_desc": "ជួញដូរជាមួយអ្នកលេងផ្សេងទៀតដោយប្រើប្រព័ន្ធសេដ្ឋកិច្ច​ ឬទិញពី Shop ក្នុងហ្គេម។",
    "feature.protection": "ការការពារដីធ្លី",
    "feature.protection_desc": "Claim និង Protect សាងសង់របស់អ្នកជាមួយនឹងប្រព័ន្ធការពារ។",
    "feature.events": "Regular Events",
    "feature.events_desc": "ចូលរួមក្នុង​ Event និងការប្រកួតប្រជែងតាមរដូវកាលជាមួយនឹងរង្វាន់។",

    // Footer
    "footer.copyright": "© 2024 Bone SMP. Not affiliated with Mojang AB.",

    // News
    "news.title": "ព័ត៌មាន Server",
    "news.subtitle": "បន្តទទួលបានព័ត៌មានថ្មីៗអំពីការផ Update និង Event នៅលើ Bone Network",
    "news.read_more": "អានបន្ថែម",
    "news.back": "ត្រឡប់ទៅព័ត៌មាន",
    "news.posted_on": "បានប្រកាសនៅ",
    "news.no_posts": "មិនទាន់ព័ត៌មានថ្មីនៅឡើយទេ។ សូមពិនិត្យមើលពេលក្រោយ!",
    "news.latest_updates": "LATEST UPDATES",
    
    // Server Status
    "status.status": "ស្ថានភាព៖",
    "status.online": "អនឡាញ",
    "status.offline": "ក្រៅបណ្តាញ",
    "status.players": "អ្នកលេង៖",
    "status.updated": "បានធ្វើបច្ចុប្បន្នភាព៖",
    
    // Store Page
    "store.title": "ហាង",
    "store.description": "ទិញ Rank ក្នុង Server ដើមី្បគាំទ្រ Server និងទទួលបាននូវ​ Items និង Perks។",
    "store.info_description1": "រាល់ការទិញទាំងអស់ត្រូវបានដំណើរការដោយសុវត្ថិភាពតាមរយៈសេវាបង់ប្រាក់របស់យើង។ នៅពេលដែលការទូទាត់របស់អ្នកត្រូវបានបញ្ជាក់ ទំនិញរបស់អ្នកនឹងត្រូវបានអនុវត្តដោយស្វ័យប្រវត្តិទៅក្នុងគណនីរបស់អ្នកក្នុងរយៈពេល 5 ទៅ 30 នាទី។",
    "store.info_description2": "ប្រសិនបើអ្នកជួបប្រទះបញ្ហាណាមួយជាមួយនឹងការទិញរបស់អ្នក ឬចាំយូរ សូមទាក់ទង​ទៅ Staff Server របស់យើងនៅលើ Discord។",

    // Rules Page
    "title.title" : "ច្បាប់ក្នុង Server",
    "title.description": "ដើម្បីធានាថាអ្នកគ្រប់គ្នាមានបទពិសោធន៍ដ៏អស្ចារ្យនៅលើ Server សូមអនុវត្តតាមច្បាប់ទាំងនេះ។ ការខកខានក្នុងការអនុវត្តតាមអាចបណ្តាលឱ្យមានការ Ban បណ្តោះអាសន្ន ឬ Permanent Bans។",
    // General Conduct
    "general_conduct.general_conduct": "អាកប្បកិរិយាទូទៅ",
    "general_conduct.respectful": "ត្រូវមានការគោរពចំពោះ Staff Server ប្រសិនបើមានបញ្ហាក្នុង Server ឬ Performance Server សូមឆាតទៅកាន់ Staff Server ​វិញ​ កំុមានការត្អូញត្អែរនៅក្នុង Server ​បើសិនជាមាននិងប្រឈមមុខ Temporary Mute។",
    "general_conduct.no_spam": "ហាមផ្ញើសារច្រើនដងដដែលៗ ឬប្រើអក្សរធំជាញឹកញាប់។",
    
    // Gameplay Rules
    "gameplay.gameplay_rules": "ច្បាប់នៃការលេងហ្គេម",
    "gameplay.no_cheating": "មិនអនុញ្ញាតឱ្យប្រើ Hack ឬ Client ដែលធ្វើអោយមានការមិនស្មើភាពគ្នា។",
    "gameplay.no_exploiting": "គ្មានការកេងប្រវ័ញ្ចលើ Bugs។ រាយការណ៍ទៅ Staff Server វិញ។",
    "gameplay.no_offensive_builds": "មិនអនុញ្ញាតឱ្យសាងសង់សំណង់ដែលគ្មានភាពសមរម្យ ឬប្រមាថ។",
    
    // Building Guidelines
    "building.building_guidelines": "ការណែនាំអំពីការសាងសង់",
    "building.redstone": "គ្មានការសាងសង់ម៉ាសុីនដ៏ធំដែលបណ្តាលឱ្យ Slow Server ដោយគ្មានការយល់ព្រមពី Staff Server។",

    // Economy & Trading
    "eco.economy_trading": "សេដ្ឋកិច្ច និងការដុះដូរ",
    "eco.honor_agreements": "គោរពព្រមព្រៀងទាំងអស់ដែលបានធ្វើសម្រាប់ការជួញដូរ ឬសេវាកម្ម។",
    
    // Server Performance
    "server.server_performance": "ដំណើរការ​ នៃ Server",
    "server.no_lag_machines": "មិនត្រូវបង្កើតម៉ាស៊ីនឬឧបករណ៍ដែលបណ្ដាលឱ្យ Slow Server ឬប៉ះពាល់ដល់ Server។",
    "server.report_performance_issues": "រាយការណ៍បញ្ហាក្នុង Server ណាមួយទៅកាន់ Staff Server។",
    
    // Consequences
    "punishment.title": "ការ Ban Player ពេលមិនគោរពលក្ខណ",
    "punishment.title1": "ការបំពានច្បាប់នឹងត្រូវដោះស្រាយទៅតាមស្ថានភាពខាងក្រោម:",
    "punishment.warning_label": "ការព្រមាន",
    "punishment.warning_desc": "ការលើកលែងដំបូងជាការព្រមាន",
    "punishment.temp_ban_label": "ការ Ban បណ្តោះអាសន្ន (1-7 ថ្ងៃ)",
    "punishment.temp_ban_desc": "ការ បទល្មើសតូចតាច ឬ ការបំពានកម្រិតមធ្យម",
    "punishment.long_ban_label": "ការ Ban រយៈពេលវែង (30+ ថ្ងៃ)",
    "punishment.long_ban_desc": "ការបំពានធ្ងន់ធ្ងរ ឬបន្តការបំពានច្បាប់",
    "punishment.perm_ban_label": "ការ Ban រហូត",
    "punishment.perm_ban_desc": "ការរំលោភបំពានធ្ងន់ធ្ងរ ហេក ឬបទល្មើសធ្ងន់ធ្ងរម្តងហើយម្តងទៀត",
    "punishment.appeal_note": "ការ Ban ទាំងអស់អាចប្តឹងនៅលើ Server Discord របស់យើង។ Staff Server មានសិទ្ធនៅក្នុងការសម្រេចចិត្តសម្របសម្រួលទាំងអស់ក្នុងវិធានច្បាប់​របស់​ Server។",
    
    // About Page
    "about.title": "អំពីពួកយើង",
    "about.description": "សូមស្វែងយល់បន្ថែមអំពី Bone Network ប្រវត្តិសាស្រ្តរបស់យើង និងក្រុមការងាររបស់យើងខាងក្រោយសេវា។",
    "about.story": "រឿងរ៉ាវរបស់យើង",
    "about.story_description": "ត្រូវបានបង្កើតនៅឆ្នាំ 2024 ដោយក្រុមមិត្តភក្តិមួយ Bone Network ចាប់ផ្តើមជា Private Server តូចមួយដែលមានចក្ខុវិស័យក្នុងការបង្កើតបទពិសោធន៍ Minecraft survival ដែលមានភាពខុសគ្នា និងទាក់ទាញ។ ចាប់ផ្តើមពី Private Server វាបានក្លាយទៅជា​ Project Public Server រួមមានអ្នកលេង​ជាច្រើន។",
    "about.story_description1": "នៅ Bone Network យើងជឿជាក់លើការជម្រុញសិល្បៈភាព សហគមន៍ និងការលេងយ៉ាងស្មើភាព។ Server របស់យើងត្រូវបានរចនាឡើងដើម្បីផ្តល់បទពិសោធន៍ដែលសមស្រប និងគួរឱ្យចាប់អារម្មណ៍ ដែលអ្នកលេងអាចបញ្ចេញ Creativity របស់ខ្លួននៅក្នុង Minecraft។",
    "about.story_description2": "ឈ្មោះ Bone ត្រូវបានជម្រើសមកពី Minecraft។",
    "about.story_description3": "ចូលរួមជាមួយពួកយើង ហើយក្លាយជាផ្នែកមួយនៃការផ្សងព្រេងនេះ!",
    "team.title": "ក្រុមរបស់ពួកយើង",
    "team.description": "សមាជិកបុគ្គលិកដែលអនុវត្តការងារយ៉ាងស្មោះត្រង់ ដើម្បីឱ្យ Bone Network ដំណើរការបានយ៉ាងរលូន និងធានាថា អ្នកទាំងអស់គ្នានឹងមានបទពិសោធន៍ល្អបំផុត។",
    "team.gorosxd_description": "ម្ចាស់ Server និងអ្នកអភិវឌ្ឍន៍។ ទទួលខុសត្រូវលើការថែទាំ​ Server និង​ Custom Plugin។",
    "team.sas_description": "គ្រប់គ្រងការជួយ Player ការត្រួតពិនិត្យក្នុង Server និង Events។",
    "team.jakain_description": "ជួយសមាជិកក្នុងការសួរសំណួរផ្ទាល់ក្នុងហ្គេម ថែរក្សបរិយាកាសមិត្តភាព និងផ្តល់ជំនួយចំពោះបញ្ហាផ្សេងៗទាក់ទងនឹង Server។",
    // Language
    language: "English", // English in English
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "km")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
