import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = (): JSX.Element => {
  return (
    <div className="navbar">
      <div className="routerlinks">
        <Link className="routerlink" to="/">
          Home
        </Link>
        <Link className="routerlink" to="/about">
          About
        </Link>
        <Link className="routerlink" to="/projects">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
