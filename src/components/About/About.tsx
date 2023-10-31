import InfoCard from "../InfoCard/InfoCard";
import "./styles.css";

const About = (): JSX.Element => {
  return (
    <div className="about">
      <div className="text-box-wrapper">
        <p className="text-box">
          Hi I'm Kilian a 23 year old Software Engineer. I have a strong passion
          for building and deploying highly scalable and performant backend
          services. For realizing that passion I have build my Tech Stack around
          modern technologies, which are commonly used industry standards.
          Preferably I build my services in Golang with strong use of it's rich
          standard library, but am also no stranger to managed frameworks like
          Flask-Python or Spring-Java. I containerize my applications with
          Docker and deploy them on AWS cloud infrastructure configured with
          Terraform. While working a lot with AWS I strengthend my understanding
          and designing capabilities of cloud architecture. From Microservices
          deployed on auto scaling clusters to cost effective serverless Lambda
          functions and DynamoDB instances, I always put my mind to find the
          best solution for given Use-Case. Besides that I have collected a huge
          amount of UI/UX design experience and have been building with it user
          friendly interfaces with React-Typescript, which I hope came to show
          with this little portfolio website project! :)
        </p>
      </div>
      <div className="info-box">
        <div className="info-box-row-wrapper">
          <div className="info-box-row">
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
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
                </svg>
              }
              headline={"Employment"}
              body={"Full Stack Developer at EMPIT GmbH"}
              link={undefined}
              delay={0}
              horizontalSlide={false}
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
                  <path d="M256 370.43L96 279v98.42l160 88.88 160-88.88V279l-160 91.43z"></path>
                  <path d="M512.25 192L256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14l.25-.14z"></path>
                </svg>
              }
              headline={"Degree"}
              body={"Computer Science at University of Potsdam"}
              link={undefined}
              delay={0.5}
              time={1}
              horizontalSlide={false}
            />
          </div>
          <div className="info-box-row even">
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
                  <path d="M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z"></path>
                </svg>
              }
              headline={"Interests"}
              body={"Programming, Finance and Astronomy"}
              link={undefined}
              delay={1}
              time={1}
              horizontalSlide={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
