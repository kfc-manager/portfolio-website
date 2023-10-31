import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import "./styles.css";
import { InfoCardProps } from "./types";

const InfoCard = ({
  icon,
  headline,
  body,
  project,
  horizontalSlide,
  delay,
  time,
}: InfoCardProps): JSX.Element => {
  return (
    <div
      style={{
        opacity: 0,
        display: "flex",
        padding: "0 50px",
        position: "relative",
        animation: `${
          horizontalSlide ? "info-card-slide-in-left" : "info-card-slide-in-up"
        } ${time}s forwards`,
        animationIterationCount: 1,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="info-card-hexagon">
        <div className="border-container-upper">
          <div className="border-line-upper-left" />
          <div className="border-line-upper-right" />
        </div>
        <div className="top" />
        <div className="middle" />
        <div className="border-container-lower">
          <div className="border-line-lower-left" />
          <div className="border-line-lower-right" />
        </div>
        <div className="bottom"></div>
      </div>
      <div style={{ position: "absolute", top: project ? "13px" : "0" }}>
        <div className="info-card-content">
          {icon}
          <h1 className="info-card-headline">{headline}</h1>
          {body && <h2 className="info-card-body">{body}</h2>}
          {project && <ReadMoreButton project={project} />}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
