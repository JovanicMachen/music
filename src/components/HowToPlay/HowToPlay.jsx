import { useEffect, useRef } from "react";
import "./HowToPlay.css";
const rules = [
  ["Read the quote", "Read an iconic quote from a movie or TV show."],
  ["Name the story", "Guess the title by filling in the missing letters."],
  ["Trust your memory", "Correct answers without hints earn the maximum points."],
  ["Need a hint?", "Revealing individual letters reduces the available points."],
  ["Reveal the answer", "Revealing the entire answer awards zero points."],
  ["Go beyond the screen", "After solving, discover information about the movie or TV show and explore its filming locations."],
];
export default function HowToPlay({ onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current.focus();
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const buttons = dialogRef.current.querySelectorAll("button");
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, [onClose]);
  return <div className="modal-backdrop" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}><section className="rules-modal" role="dialog" aria-modal="true" aria-labelledby="rules-title" ref={dialogRef}><button className="modal-close" aria-label="Close How to Play" onClick={onClose} ref={closeRef}>×</button><span className="modal-eyebrow">YOUR GUIDE TO REELRECALL</span><h2 id="rules-title">How to Play</h2><p className="modal-intro">A familiar line. A little curiosity. Let’s roll.</p><ol>{rules.map(([title, description]) => <li key={title}><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol><button className="play-button modal-done" onClick={onClose}>Got it, let’s go</button></section></div>;
}
