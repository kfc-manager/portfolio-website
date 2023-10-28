import { useLocation } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";

const Background = (): JSX.Element => {
  const location = useLocation();
  const [spin, setSpin] = useState<boolean>(false);

  useEffect(() => {
    setSpin(!spin);
  }, [location]);

  return (
    <div className="app-background">
      {Array.from({ length: 50 }, (_, row: number) => (
        <div className={`hexagon-row${row % 2 === 0 ? " even" : ""}`}>
          {Array.from({ length: 100 }, (_, column: number) => (
            <div key={column} className={`hexagon${spin ? " spin" : ""}`}>
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
