import ScoreBoard from "../ScoreBoard/ScoreBoard";
import "./Navbar.css";
export default function Navbar({ score = 0, onHowToPlay }) {
  return (
    <header className="navbar">
      <a className="brand" href="./" aria-label="ReelRecall home">
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M5 13h23v14H5zM4 7l22-4 2 7-23 4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="m10 6 4 6m4-8 4 6M5 19h23"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <span>
          Reel<span className="brand-accent">Recall</span>
        </span>
      </a>
      <nav aria-label="Main navigation">
        <button className="rules-button" onClick={onHowToPlay}>
          <span className="help-icon" aria-hidden="true">
            ?
          </span>
          How to Play
        </button>
        <ScoreBoard score={score} />
      </nav>
    </header>
  );
}
