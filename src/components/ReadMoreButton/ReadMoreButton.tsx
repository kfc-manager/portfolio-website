import { useState } from "react";
import "./styles.css";
import { ReadMoreButtonProps } from "./types";
import { useNavigate } from "react-router-dom";

const ReadMoreButton = ({ project }: ReadMoreButtonProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="read-more-button">
      <div className="read-more-hexagon">
        <div className="read-more-border-container-upper">
          <div
            className={`read-more-border-line-upper-left${
              isHovered ? " remove-bg" : ""
            }`}
          />
          <div
            className={`read-more-border-line-upper-right${
              isHovered ? " remove-bg" : ""
            }`}
          />
        </div>
        <div
          className={`read-more-top${isHovered ? " add-color-top" : ""}`}
        ></div>
        <div
          className={`read-more-middle${isHovered ? " remove-border-lr" : ""}`}
        ></div>
        <div className="read-more-border-container-lower">
          <div
            className={`read-more-border-line-lower-left${
              isHovered ? " remove-bg" : ""
            }`}
          />
          <div
            className={`read-more-border-line-lower-right${
              isHovered ? " remove-bg" : ""
            }`}
          />
        </div>
        <div
          className={`read-more-bottom${isHovered ? " add-color-bottom" : ""}`}
        ></div>
      </div>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          fontSize: "24px",
          transition: "400ms all ease",
          color: isHovered ? "var(--dark-grey)" : "var(--white)",
        }}
      >
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="40"
          d="M196 220h64v172"
        ></path>
        <path
          fill="none"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="40"
          d="M187 396h138"
        ></path>
        <path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z"></path>
      </svg>
      <button
        style={{
          color: "unset",
          backgroundColor: "unset",
          position: "absolute",
          height: "44px",
          width: "40px",
        }}
        onClick={() => navigate("/readmore")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default ReadMoreButton;
