import ThemeToggle from "./ThemeToggle";
import { ReactComponent as ProjectsIcon } from "../assets/ProjectsIcon.svg";
import { ReactComponent as AboutIcon } from "../assets/AboutIcon.svg";
import { ReactComponent as EducationIcon } from "../assets/EducationIcon.svg";

const NavBar = () => {
  return (
    <div className="fixed text-sm flex justify-center w-full z-50 backdrop-blur">
      <div>
        <ul className="menu menu-horizontal">
          <li>
            <a href="#home">
              <AboutIcon />
              <p className="hidden md:block">About</p>
            </a>
          </li>
          <li>
            <a href="#education">
              <EducationIcon />
              <p className="hidden md:block">Education</p>
            </a>
          </li>
          <li>
            <a href="#projects">
              <ProjectsIcon />
              <p className="hidden md:block">Projects</p>
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
