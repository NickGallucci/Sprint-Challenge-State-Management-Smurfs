import React from 'react';

const Smurf = ({smf}) => {
  return (
  <div>
  <p>Name: {smf.name}</p>
  <p>Age: {smf.age}</p>
  <p>Height: {smf.height}</p>
  </div>
  )
};

export default Smurf;