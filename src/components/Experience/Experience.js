import react from 'react';
import ImageOfMe from '../../imgs/blob-0001.png';
const Experience = () => {
  return (
    <div className="container mx-auto pt-10 px-10 lg:w-6/12 lg:pt-28">
      <div className="mx-auto p-20 text-center bg-gray-100">
        <div>
          <img
            src={ImageOfMe}
            alt="my.jpg"
            className="w-40 h-auto rounded-full mx-auto border-gray-800 border-4"
          />
          <h1 className="tracking-widest text-3xl text-gray-700 font-black pt-5">
            My Work Experience
          </h1>
          <h4 className="text-1xll text-gray-500 pt-2">
            I've spent more than 4 years working in the retail industry and
            education, and I was able to strength my leadership skills as well
            as technical skills, and based on my academic background, I am
            seeking a full-time work and hoping to contribute to the success of
            an organization and expand my skills as a programmer
          </h4>
        </div>
      </div>
      <h1 className="tracking-widest text-2xl text-gray-700 font-black pt-5">
        Mentor-Software Development
      </h1>

      <p className="text-1xl text-gray-500 pt-4">
        <p className="text-xl text-gray-600 pt-4">
          Fullstack Academy of code - April/2022 - Present.
        </p>
        <p className="text-1xl text-gray-500 pt-4">
          <p>
            Teach PERN stacks, Agile Methodologies, object-oriented programming
            concepts to 40+ student software engineers.
          </p>
          <p>
            Provide the students with the resources that they need to complete
            their projects as well as daily code reviews.
          </p>
          <p>
            Debug and problem-solve student's code while guiding students to the
            intended solution.{' '}
          </p>
        </p>
      </p>
      <h1 className="tracking-widest text-2xl text-gray-700 font-black pt-5">
        Warehouse Operator
      </h1>
      <p className="text-xl text-gray-600 pt-4">
        The TJX Companies, Inc. - Jun/2017 - March/2021.
      </p>
      <p className="text-1xl text-gray-500 pt-4">
        <p>
          Support warehouse operation workflows by receiving and shipping,
          loading, and unloading goods, and transferring completed products and
          raw materials to designated storage areas.
        </p>
        <p>
          Provide training to new employees in forklift operations to help them
          obtain certification.
        </p>
        <br />
        <br />
      </p>
    </div>
  );
};
export default Experience;
