import React, { useEffect, useRef, useState } from 'react';
import './SingleSkill.css';

interface ISingleSkill {
  imageName?: string;
}

const SingleSkill = ({ imageName }: ISingleSkill) => {
  return (
    <div className="single_skill_container">
      <img src={`/assets/${imageName}`} alt={imageName} />
    </div>
  );
};

export default SingleSkill;
