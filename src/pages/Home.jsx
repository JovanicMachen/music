import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import HowToPlay from "../components/HowToPlay/HowToPlay";
import "./Home.css";
export default function Home({ score = 0, onPlay }) {
  const [showRules, setShowRules] = useState(false);
  return <div className="home-page"><Navbar score={score} onHowToPlay={() => setShowRules(true)} /><main><HeroSection onPlay={onPlay} /></main><footer className="home-footer"><span>FOR THE LOVE OF THE STORY.</span><span>Movies. Television. A world to discover.</span></footer>{showRules && <HowToPlay onClose={() => setShowRules(false)} />}</div>;
}
