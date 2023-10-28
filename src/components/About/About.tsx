import InfoCard from "./InfoCard";
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
        <InfoCard />
      </div>
    </div>
  );
};

export default About;
