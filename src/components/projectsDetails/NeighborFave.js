import React from 'react';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router-dom';
// I want to show case the details and what i've worked on
const NeighborFave = () => {
  const history = useHistory();
  const handleClick = () => history.push('/projects');
  return (
    <div class="mx-auto">
      <div class="mx-auto bg-gray-100 lg:pl-40">
        <div class="mx-auto p-20 bg-gray-100 mb-10 md:mb-0">
          <div className="container mx-auto">
            <h1 className="tracking-widest text-3xl text-gray-700 font-black pt-5 pb-4 flex justify-between">
              Neighbor Fave
            </h1>
            <p className="mx-auto text-sm md:text-base lg:text1xl text-gray-500 ">
              NeighborFav, is a community-based platform that aims to facilitate
              the exchange of favors among members in a given area.The platform
              allows users to post and view favors, and offers a real-time chat
              feature to facilitate communication between users. As a member of
              the development team, I was responsible for the implementation of
              several key features, <strong className="text">including:</strong>
            </p>
            <br />
            <br />
            <hr />
            <h1 className="tracking-widest text-2xl text-gray-700 font-black pt-5 pb-4 flex justify-between">
              Duties
            </h1>
            <div className="paragraphs-container">
              <p className="mx-auto text-gray-500 ">
                The backend models and APIs, developed using Sequelize and
                Express, respectively, to enable robust data management and
                communication between the client-side and server-side of the
                application.
              </p>
              <p className="mx-auto text-gray-500 ">
                Security measures, such as the use of JSON web token and local
                storage, to ensure the protection of user information on the
                client-side.
              </p>
              <p className="mx-auto text-gray-500 ">
                Managed Github workflow such as daily code review, fixing merge
                conflicts, and review pull requests from other team members.
              </p>
            </div>
            <br />
            <br />
            <hr />
            <h1 className="tracking-widest text-2xl text-gray-700 font-black pt-5 pb-4 flex justify-between">
              Challenges
            </h1>
            <div className="paragraphs-container">
              <p className="mx-auto text-gray-500 ">
                Coordinating with a team of developers to ensure that the
                different components of the application were integrated
                seamlessly.
              </p>
              <p className="mx-auto text-gray-500 ">
                Managing the complexity of real-time chat feature and ensuring
                that it performed efficiently and reliably.
              </p>
              <p className="mx-auto text-gray-500 ">
                Ensuring that the security measures implemented were effective
                in protecting user information.
              </p>
            </div>
            <br />
            <br />
            <hr />
            <h1 className="tracking-widest text-2xl text-gray-700 font-black pt-5 pb-4 flex justify-between">
              What I have Learned
            </h1>
            <div className="paragraphs-container">
              <p className="mx-auto text-gray-500 ">
                The importance of clear and effective communication within a
                development team in order to deliver a high-quality product.
              </p>
              <p className="mx-auto text-gray-500 ">
                The importance of planning and design in the development of a
                complex application.
              </p>
              <p className="mx-auto text-gray-500 ">
                The technical skills necessary to design and implement real-time
                features in web applications.
              </p>
              <p className="mx-auto text-gray-500 ">
                The importance of security in software development and various
                ways to protect user information.
              </p>
            </div>
            <br />
            <br />
            <hr />
            <h1 className="tracking-widest text-2xl text-gray-700 font-black pt-5 pb-4 flex justify-between">
              Overall
            </h1>
            <p className="mx-auto text-gray-500 ">
              Overall, this project was a valuable learning experience for me as
              it was my first group project and gave me a chance to apply and
              improve my skills in full-stack web development. It also provided
              a great opportunity to learn how to work and communicate
              effectively with a team.
            </p>
          </div>
        </div>
        <button className="button-50" onClick={handleClick}>
          Back to Projects
        </button>
        <br />
      </div>
    </div>
  );
};

export default NeighborFave;
