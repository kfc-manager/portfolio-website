import "./styles.css";

const Background = (): JSX.Element => {
  return (
    <div className="app-background">
      {Array.from({ length: 50 }, (_, row: number) => (
        <div className={`hexagon-row${row % 2 === 0 ? " even" : ""}`}>
          {Array.from({ length: 100 }, (_, column: number) => (
            <div key={column} className="hexagon">
              <div className="top"></div>
              <div className="middle"></div>
              <div className="bottom"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Background;
