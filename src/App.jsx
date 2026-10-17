import { useState } from "react";
import Home from "./pages/Home";
import Game from "./pages/Game";
import "./App.css";
export default function App() {
  const [page, setPage] = useState("home");
  return <div className="app-container">{page === "home" ? <Home score={0} onPlay={() => setPage("game")} /> : <Game />}</div>;
}
