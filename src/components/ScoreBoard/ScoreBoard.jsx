import "./ScoreBoard.css";
export default function ScoreBoard({ score = 0 }) {
  return <div className="score-board" role="status" aria-label={`Total points: ${score}`}><span aria-hidden="true" className="score-star">✦</span><strong>{score}</strong><span className="score-label">points</span></div>;
}
