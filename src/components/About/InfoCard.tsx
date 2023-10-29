import "./styles.css";

const InfoCard = (): JSX.Element => {
  return (
    <div className="info-card">
      <div className="info-card-hexagon">
        <div className="border-container-upper">
          <div className="border-line-upper-left"></div>
          <div className="border-line-upper-right"></div>
        </div>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="border-container-lower">
          <div className="border-line-lower-left"></div>
          <div className="border-line-lower-right"></div>
        </div>
        <div className="bottom"></div>
      </div>
      <div style={{ position: "absolute" }}>
        <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", width: "304px", height: "350px", flexDirection: "column" }}>
          <div>Jwgjpoweg</div>
          <div>wojgepjwg</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
