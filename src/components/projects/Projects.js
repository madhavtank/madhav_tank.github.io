import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-5 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Automated Malnutrition Detection"
          des="To detect the amount of malnutrition using automated height and
          weight detection according to UNICEF standards, using Computer Vision, MERN and Flask."
          src={projectOne}
          githubLink="https://github.com/madhavtank/Automated-Malnutrition-Detection"
          websiteLink="https://mihirc0111-ipl-predictor-mihir-app-8s1ct4.streamlit.app/"
        />
        <ProjectsCard
          title="Reddit Clone"
          des="Developed a fully functional dockerized web application called Greddit inspired by Reddit, using MERN stack."
          src={projectTwo}
          githubLink="https://github.com/madhavtank/Reddit_Clone"
          websiteLink="https://mihirs-blog-website.onrender.com/"
        />
        <ProjectsCard
          title="Linux Shell"
          des="Bash-like command interpreter, written in C supporting Auto Completion, built-in commands, Process Management, Piping and I/O
          redirection."
          src={projectThree}
          githubLink="https://github.com/madhavtank/C-Shell"
          websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
        />
        <ProjectsCard
          title="XV6 OS"
          des="A modified version of MIT's xv6 Operating System, which adds
          several new scheduling algorithms, namely FCFS, Priority-based and
          Multi- Level-Feedback-Queue, along with a couple of System Calls."
          src={projectFour}
          githubLink="https://github.com/madhavtank/XV6-OS"
          websiteLink="https://mihirc0111.github.io/AfterSchoolDiaries-HTML-CSS-JS-BootStrap-Website/"
        />
        <ProjectsCard
          title="IPL Database"
          des="It is a well-maintained database that has all of the information on the
          current IPL season. Python also has a suitable user interface (UI) for
          adding and viewing details."
          src={projectFive}
          githubLink="https://github.com/madhavtank/IPL-Database"
          websiteLink="https://mihirs-weather-website.onrender.com/"
        />
      </div>
    </section>
  );
}

export default Projects
