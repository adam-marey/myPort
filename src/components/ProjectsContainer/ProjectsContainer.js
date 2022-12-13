import React from 'react';
import Projects from '../Projects/Projects';
import fav from '../../imgs/fav.jpg';
import kitchen from '../../imgs/kitchen.jpg';
import game from '../../imgs/game.png';
import todo from '../../imgs/todo.jpg';
import expenses from '../../imgs/expenses.png';
import weather from '../../imgs/weatherapp.jpg';
const ProjectsContainer = () => {
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
          <Projects
            name="Virtual Kitchen"
            description="Fullstack e-commerce application- Built with React, Redux, Node, Express, PostgreSQL, Sequelize"
            image={kitchen}
            githubLink="https://github.com/mudkip-masters/grace-shopper"
            liveSite="https://grace-shopper-mudkip-masters.herokuapp.com/"
          />
          <Projects
            name="Guess a Number"
            description="Guess The Number is a game where it randomly select an integer from 1 to 20, and you have to guess the number by making guesses until you find the number that is chose. Have fun!"
            image={game}
            githubLink="https://github.com/adam-marey/Guess-My-Number"
            liveSite="https://guess-number-4a2a3a.netlify.app/"
          />
          <Projects
            name="Todo List"
            description="Classic Todo List built with HTML, CSS and JS"
            image={todo}
            githubLink="https://github.com/adam-mareys/todo-list"
            liveSite="https://mytodolist212.netlify.app/"
          />
          <Projects
            name="Expenses Tracker"
            description="expenses tracker app build with React.js and React Hooks"
            image={expenses}
            githubLink=""
            liveSite="https://expensestracker2.netlify.app/"
          />
          <Projects
            name="Weather app"
            description="Simple weather app built with create-react-app and OpenWeatherMap API"
            image={weather}
            githubLink="https://github.com/adam-marey/react-weather-app"
            liveSite="https://lovely-weather.netlify.app/"
          />
        </h1>
      </div>
    </div>
  );
};

export default ProjectsContainer;
