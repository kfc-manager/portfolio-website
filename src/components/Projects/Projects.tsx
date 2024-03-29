import { useEffect, useState } from "react";
import InfoCard from "../InfoCard/InfoCard";

const Projects = (): JSX.Element => {
  const projects: Project[] = [
    {
      headline: "EMPIT Monitoring App",
      body: "This is a test body",
      links: [],
    },
    {
      headline: "EMPIT Monitoring App",
      body: "This is a test body",
      links: [],
    },
    {
      headline: "EMPIT Monitoring App",
      body: "This is a test body",
      links: [],
    },
    {
      headline: "EMPIT Monitoring App",
      body: "This is a test body",
      links: [],
    },
    {
      headline: "EMPIT Monitoring App",
      body: "This is a test body",
      links: [],
    },
    {
      headline: "EMPIT Monitoring App",
      body: "This is a test body",
      links: [],
    },
    {
      headline: "EMPIT Monitoring App",
      body: "This is a test body",
      links: [],
    },
  ];

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: windowWidth > 750 ? "center" : "unset",
        height: "calc(100vh - 80px)",
        overflowX:
          windowWidth > 1700 || windowWidth <= 750 ? "hidden" : "scroll",
        overflowY:
          windowHeight > 830 && windowWidth > 750 ? "hidden" : "scroll",
        gap: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "50px",
          flexDirection: windowWidth > 750 ? "row" : "column",
          marginTop: windowWidth > 750 ? "unset" : "50px",
        }}
      >
        <InfoCard
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fontSize: "32px", color: "var(--white)" }}
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
            </svg>
          }
          headline={"EMPIT Monitoring"}
          body={undefined}
          project={projects[0]}
          delay={0}
          horizontalSlide={true}
          time={1}
        />
        <InfoCard
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fontSize: "32px", color: "var(--white)" }}
            >
              <path d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"></path>
            </svg>
          }
          headline={"Serverless RDS"}
          body={undefined}
          project={projects[1]}
          delay={0.5}
          horizontalSlide={true}
          time={1}
        />
        <InfoCard
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fontSize: "32px", color: "var(--white)" }}
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"></path>
            </svg>
          }
          headline={"Spotify Party"}
          body={undefined}
          project={projects[2]}
          delay={1}
          horizontalSlide={true}
          time={1}
        />
        <InfoCard
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fontSize: "32px", color: "var(--white)" }}
            >
              <path d="M325.9 23.981L311.94 45.25c38.182 24.845 67.675 59.024 96.878 123.178l16.828-24.807c-5.155-17.403-10.801-35.86-16-51.351-5.597-16.682-11.538-30.866-13.105-33.194-1.32-1.96-10.748-9.452-24.53-16.34-12.285-6.14-28.272-12.655-46.11-18.754zm8.33 61.53l-54.46 42.994c10.761 6.175 18.5 17.082 20.314 29.828l57.5-45.396c-7.522-10.489-15.238-19.485-23.354-27.426zm-74.73 55.578c-12.81 0-23 10.19-23 23 0 12.809 10.19 23 23 23s23-10.191 23-23c0-12.81-10.19-23-23-23zm-39.342 34.476L87.49 280.304c11.838 4.67 20.406 16.013 20.975 29.306L244.5 202.214c-11.676-4.635-20.766-14.492-24.342-26.649zm174.342 4.448v210.006h18V195.063l-7.082 10.44-6.453-15.219a682.592 682.592 0 0 0-4.465-10.271zm-92.637.543L286.047 192.8l3.793 18.015-14.526-9.707-15.01 11.621 28.796 19.243-71.305 32.832 4.82-22.897-21.976 17.014-24.354 115.678-.44.195.272.61-19.92 94.615H140.5v18h222V468.58zm-4.226 67.3l12.02 57.088-79.057-26.218zm-85.477 43.717l86.432 28.666-102.012 45.338zM75.5 296.02c-8.39 0-15 6.609-15 15 0 8.39 6.61 15 15 15s15-6.61 15-15c0-8.391-6.61-15-15-15zm239.945 36.427l14.953 71.028-111.953-27.916zm-218.824 3.852c-4.595 3.851-10.24 6.481-16.42 7.377l21.266 46.344h19.804zm-42.232.008l-24.66 53.713h19.808l21.276-46.342c-6.181-.893-11.828-3.521-16.424-7.371zm137.574 51.2l116.781 29.118-133.101 48.403zM28.5 408.018v62h94v-62zm352 0v16h46v-16zm-45.324 18.15l9.232 43.85h-129.82zm45.324 15.85v28h46v-28zm64 28v18h39v-18z"></path>
            </svg>
          }
          headline={"Resource Map"}
          body={undefined}
          project={projects[3]}
          delay={1.5}
          horizontalSlide={true}
          time={1}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "50px",
          flexDirection: windowWidth > 750 ? "row" : "column",
        }}
      >
        <InfoCard
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fontSize: "32px", color: "var(--white)" }}
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
            </svg>
          }
          headline={"Placeholder"}
          body={undefined}
          project={projects[4]}
          delay={2}
          horizontalSlide={windowWidth <= 750}
          time={1}
        />
        <InfoCard
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fontSize: "32px", color: "var(--white)" }}
            >
              <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"></path>
            </svg>
          }
          headline={"EMPIT Pathfinder"}
          body={undefined}
          project={projects[5]}
          delay={2.5}
          horizontalSlide={windowWidth <= 750}
          time={1}
        />
        <InfoCard
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fontSize: "32px", color: "var(--white)" }}
            >
              <path d="m21.406 6.086-9-4a1.001 1.001 0 0 0-.813 0l-9 4c-.02.009-.034.024-.054.035-.028.014-.058.023-.084.04-.022.015-.039.034-.06.05a.87.87 0 0 0-.19.194c-.02.028-.041.053-.059.081a1.119 1.119 0 0 0-.076.165c-.009.027-.023.052-.031.079A1.013 1.013 0 0 0 2 7v10c0 .396.232.753.594.914l9 4c.13.058.268.086.406.086a.997.997 0 0 0 .402-.096l.004.01 9-4A.999.999 0 0 0 22 17V7a.999.999 0 0 0-.594-.914zM12 4.095 18.538 7 12 9.905l-1.308-.581L5.463 7 12 4.095zM4 16.351V8.539l7 3.111v7.811l-7-3.11zm9 3.11V11.65l7-3.111v7.812l-7 3.11z"></path>
            </svg>
          }
          headline={"Minecraft Plugins"}
          body={undefined}
          project={projects[6]}
          delay={3}
          horizontalSlide={windowWidth <= 750}
          time={1}
        />
      </div>
    </div>
  );
};

export default Projects;
