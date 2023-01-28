import react from 'react';
const Experience = () => {
  return (
    <div class="mx-auto">
      <div class="mx-auto bg-gray-100 lg:pl-40">
        <div class="mx-auto p-20 bg-gray-100 mb-10 md:mb-0">
          <div className="container mx-auto">
            <h1 className="tracking-widest text-3xl text-gray-700 font-black pt-5 pb-4 flex justify-between">
              My Work Experience
            </h1>
            <br />
            <hr />
            <h1 className="tracking-widest text-2xl text-gray-700 font-black pt-5">
              Mentor-Software Development
            </h1>
            <p className="tracking-widest text-0xl text-gray-600 font-black pt-5">
              Fullstack Academy of code - Jan/2022 - Present
            </p>
            <p className="text-1xl text-gray-500 pt-4">
              <p>
                Teach PERN stacks, Agile Methodologies, object-oriented
                programming concepts to 40+ student software engineers.
              </p>
              <p>
                Provide the students with the resources that they need to
                complete their projects as well as daily code reviews.
              </p>
              <p>
                Debug and problem-solve student's code while guiding students to
                the intended solution.
              </p>
              <p>
                Act as tech/team lead during student group projects, provide
                students with code reviews, grades,and correct students’ coding
                proficiency, optimizations, and adherence to documentation.
              </p>
            </p>
            <br />
            <hr />
            <h1 className="tracking-widest text-2xl text-gray-700 font-black pt-5">
              Warehouse Operator
            </h1>
            <p className="tracking-widest text-0xl text-gray-600 font-black pt-5">
              The TJX Companies, Inc. - Jun/2017 - March/2021
            </p>
            <p className="text-1xl text-gray-500 pt-4">
              <p>
                Support warehouse operation workflows by receiving and shipping,
                loading, and unloading goods, and transferring completed
                products and raw materials to designated storage areas.
              </p>
              <p>
                Provide training to new employees in forklift operations to help
                them obtain certification.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
