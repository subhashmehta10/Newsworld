
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Trending from './pages/Trending/Trending';
import About from './pages/About/About';
import Technology from './pages/Technology/Technology';
import Science from './pages/Science/Science';
import History from './pages/History/History';
import Geography from './pages/Geography/Geography';
import Politics from './pages/Politics/Politics';
import Economy from './pages/Economy/Economy';
import Health from './pages/Health/Health';
import Culture from './pages/Culture/Culture';
import WritersCorner from './pages/WritersCorner/WritersCorner';
import Forum from './pages/Forum/Forum';
import HelpCenter from './pages/HelpCenter/HelpCenter';
import TrendingDetail from './pages/Trending/TrendingDetail';
import TopicPage from './pages/TopicPage/TopicPage';
import AI from './pages/AI/AI';
import ClimateChange from './pages/ClimateChange/ClimateChange';
import SpaceExploration from './pages/SpaceExploration/SpaceExploration';
import QuantumComputing from './pages/QuantumComputing/QuantumComputing';
import Login from './pages/Auth/Login';
import Account from './pages/Account/Account';
import SearchPage from './pages/Search/SearchPage';
import ViratKohli from './pages/Players/ViratKohli';
import CricketPage from './pages/Sports/CricketPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="trending" element={<Trending />} />
        <Route path="about" element={<About />} />
        <Route path="politics" element={<Politics />} />
        <Route path="technology" element={<Technology />} />
        <Route path="science" element={<Science />} />
        <Route path="economy" element={<Economy />} />
        <Route path="health" element={<Health />} />
        <Route path="culture" element={<Culture />} />
        <Route path="history" element={<History />} />
        <Route path="geography" element={<Geography />} />
        <Route path="writers-corner" element={<WritersCorner />} />
        <Route path="forum" element={<Forum />} />
        <Route path="help-center" element={<HelpCenter />} />
        <Route path="trending/ai" element={<AI />} />
        <Route path="trending/climate-change" element={<ClimateChange />} />
        <Route path="trending/space-exploration" element={<SpaceExploration />} />
        <Route path="trending/quantum-computing" element={<QuantumComputing />} />
        <Route path="trending/:slug" element={<TrendingDetail />} />

        {/* Auth & User */}
        <Route path="login" element={<Login />} />
        <Route path="account" element={<Account />} />
        <Route path="search" element={<SearchPage />} />

        {/* Specific Topics */}
        <Route path="topic/virat-kohli" element={<ViratKohli />} />
        <Route path="topic/cricket" element={<CricketPage />} />

        {/* Dynamic Topics and Categories */}
        <Route path="topic/:slug" element={<TopicPage />} />

        {/* Main SubHeader Categories mapping to TopicPage */}
        <Route path="world" element={<TopicPage />} />
        <Route path="us" element={<TopicPage />} />
        <Route path="ny" element={<TopicPage />} />
        <Route path="california" element={<TopicPage />} />
        <Route path="business" element={<TopicPage />} /> {/* Reuse TopicPage or Economy */}
        <Route path="sports" element={<TopicPage />} />
        <Route path="entertainment" element={<TopicPage />} />
        <Route path="style" element={<TopicPage />} />
        <Route path="travel" element={<TopicPage />} />
        <Route path="food" element={<TopicPage />} />
        <Route path="opinions" element={<TopicPage />} />
        <Route path="audio" element={<TopicPage />} />
        <Route path="games" element={<TopicPage />} />
        <Route path="cooking" element={<TopicPage />} />
        <Route path="wirecutter" element={<TopicPage />} />
        <Route path="the-athletic" element={<TopicPage />} />
        <Route path="jobs" element={<TopicPage />} />
        <Route path="real-estate" element={<TopicPage />} />
      </Route>
    </Routes>
  );
}

export default App;
