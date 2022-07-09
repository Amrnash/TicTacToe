import "./Tile.css";
export const Tile = ({ value, idx, gameOver }) => {
  let className = gameOver ? "disabled" : "tile";
  return (
    <div className={className} data-idx={idx}>
      {value}
    </div>
  );
};
