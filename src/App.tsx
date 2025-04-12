import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StorePage from "./pages/Store";
import RulesPage from "./pages/Rules";
import AboutPage from "./pages/About";
import EventPage from "./pages/Event";
import LeaderboardsPage from "./pages/Leaderboards";
import PurchasePage from "./pages/Purchase/Purchase";
import NewsPage from "./pages/news/page";
import NewsPostPage from "./pages/news/slugs/page";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news/:slug" element={<NewsPostPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/leaderboards" element={<LeaderboardsPage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/store/purchase" element={<PurchasePage />} />
    </Routes>
  );
}