import React from 'react';
import { useHistory } from 'react-router-dom';
const VirtualKitchen = () => {
  const history = useHistory();
  const handleClick = () => history.push('/projects');
  return (
    <div class="mx-auto">
      <div class="mx-auto bg-gray-100 lg:pl-40">
        <div class="mx-auto p-20 bg-gray-100 mb-10 md:mb-0">
          <div className="container mx-auto">
            <h1 className="tracking-widest text-3xl text-gray-700 font-black pt-5 pb-4 flex justify-between">
              Virtual Kitchen
            </h1>
            <p className="text-1xl text-gray-500 px-5">comming soon!</p>
          </div>
        </div>
        <button className="button-50" onClick={handleClick}>
          Back to Projects
        </button>
      </div>
    </div>
  );
};

export default VirtualKitchen;
