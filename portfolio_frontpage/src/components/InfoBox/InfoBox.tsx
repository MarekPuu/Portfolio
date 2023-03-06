import React from 'react';
import './InfoBox.css';

interface IInfoBox {
  title: string;
  children: JSX.Element;
}

const InfoBox = ({ children, title }: IInfoBox) => {
  return (
    <div className="infobox-container">
      <div className="infobox-title-container">
        <p>{title}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InfoBox;
