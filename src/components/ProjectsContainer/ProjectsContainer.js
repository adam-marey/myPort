import React from 'react';
import Projects from '../Projects/Projects';
import fav from '../../imgs/fav.jpg';
import kitchen from '../../imgs/kitchen.jpg';
import game from '../../imgs/game.png';
import todo from '../../imgs/todo.jpg';
import expenses from '../../imgs/expenses.png';
import weather from '../../imgs/weatherapp.jpg';
import ezmanage from '../../imgs/ezmanage.png';
import portfolio from '../../imgs/portfolio.png';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const ProjectsContainer = () => {
  const history = useHistory();

  const handleProjectClick = e => {
    e.preventDefault();
    history.push('/neighbor-fave');
  };
  const handleWeb = e => {
    e.preventDefault();
    history.push('/personal-web');
  };
  const handleManage = e => {
    e.preventDefault();
    history.push('/ez-manage');
  };
  const handleVirtual = e => {
    e.preventDefault();
    history.push('/virtual-kitchen');
  };

  return (
    <div class="mx-auto">
      <div class="mx-auto bg-gray-100 lg:pl-40">
        <div class="mx-auto p-20 bg-gray-100 mb-10 md:mb-0">
          <div className="container mx-auto">
            <h1 className="tracking-widest text-3xl text-gray-700 font-black pt-5 pb-4 flex justify-between">
              My Projects
            </h1>
            <p className="mx-auto text-sm md:text-base lg:text1xl text-gray-500 ">
              I love to write code and learn new things. So you can see that
              most of my work is public and can be found on my
              <span>
                <a
                  className="cursor-pointer border-b-2 border-indigo-600 px-1"
                  href="https://github.com/adam-marey"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </span>
              there you can see all the various languages that I mess around
              with, frameworks that I want to learn and projects I put together
              in the process of learning new things. Below are some of my
              featured products, these projects excite me and I could talk about
              them all day. I hope you enjoy them too. I will be adding to this
              constantly so check back for more.
            </p>
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="flex items-center my-2" />
        <h1 className="font-weight-light">
          <Projects
            name="Neighbor-fave"
            description="Fullstack application is built for people to help each other in their community, people can ask for help as well as help others, users are able to see their posts and other's posts via geolocations and real-time communication
						Built with React, Redux, Node, Express, Sequelize, PostgreSQL, socket.io, react-leaflet"
            image={fav}
            githubLink="https://github.com/cs-team-02/neighbor-fave"
            liveSite="https://neighbor-fave.herokuapp.com/"
          />
          <div>
            <button className="button-50" onClick={handleProjectClick}>
              My Experience
            </button>
          </div>
          <Projects
            name="Personal Website"
            description="Personal website built with React and Tailwind CSS"
            image={portfolio}
            githubLink="https://github.com/adam-marey/myPort"
            liveSite="https://www.adammarey.com/"
          />
          <div>
            <button className="button-50" onClick={handleWeb}>
              My Experience
            </button>
          </div>
          <Projects
            name="EZ-Manage"
            description="The project is a management system for keeping track of projects and clients. It is built using React for the frontend, Apollo Client for handling GraphQL requests, and Bootstrap for styling. The backend is built using Express and GraphQL for the database."
            image={ezmanage}
            githubLink="https://github.com/adam-marey/EZ-Manage"
            liveSite="https://github.com/adam-marey/EZ-Manage"
          />
          <div>
            <button className="button-50" onClick={handleManage}>
              My Experience
            </button>
          </div>
          <Projects
            name="Virtual Kitchen"
            description="Fullstack e-commerce application- Built with React, Redux, Node, Express, PostgreSQL, Sequelize"
            image={kitchen}
            githubLink="https://github.com/mudkip-masters/grace-shopper"
            liveSite="https://grace-shopper-mudkip-masters.herokuapp.com/"
          />
          <div>
            <button className="button-50" onClick={handleVirtual}>
              My Experience
            </button>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default ProjectsContainer;
