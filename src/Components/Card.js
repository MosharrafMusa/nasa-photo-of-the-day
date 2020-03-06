import React from "react";
import styled from "styled-components";

const MainImg = styled.img`
  max-width: 80%;
  border-radius: 5px;
  margin: 0, auto;
`;
const Paragraph = styled.p`
  color: black;
  width: 70%;
  margin: 0 auto;
  font-size: 1rem;
  margin: 5% auto;
  line-height: 1;
`;
const Author = styled.h4`
  font-size: 1.5rem;
  color: red;
`;
const Copyright = styled.h4`
  color: blue;
`;

const Card = props => {
  return (
    <div>
      <p>Date: {props.date}</p>
      <MainImg src={props.imgUrl} />
      <h2>{props.title}</h2>
      <h4>Image Credit & Copyright: {props.author}</h4>
      <p>
        <strong>Explanation:</strong> {props.explanation}
      </p>
    </div>
  );
};

export default Card;
