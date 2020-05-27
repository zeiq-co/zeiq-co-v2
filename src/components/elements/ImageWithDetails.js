import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  border-radius: 10px;
`;
const Text = styled.p`
  padding-top: 0.8rem;
`;

const ImageWithDetails = ({ source, date, title, subtitle }) => {
  return (
    <div className="section">
      <figure className="image is-square">
        <Img src={source} alt="details" />
      </figure>
      <Text className="subtitle is-6">{date}</Text>
      <Text className="title is-4">{title}</Text>
      <Text className="subtitle is-6">{subtitle}</Text>
    </div>
  );
};
export default ImageWithDetails;
