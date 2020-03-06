import React from "react";
import styled from "styled-components";

const Date = styled.h5`
  font-size: 1.2rem;
  color: purple;
  padding: 10px;
`;

const MainImg = styled.img`
  max-width: 80%;
  border-radius: 5px;
  margin: 0, auto;
`;
const Title = styled.h3`
  font-size: 1.5rem;
  color: black;
  padding: 10px;
`;

const Paragraph = styled.p`
  color: black;
  width: 80%;
  margin: 0 auto;
  font-size: 1rem;
  margin: 5% auto;
  line-height: 1;
`;
const Author = styled.h4`
  font-size: 1.2rem;
  color: blue;
`;

const Card = props => {
  return (
    <div>
      <Date>Date: {props.date}</Date>
      <MainImg src={props.imgUrl} />
      <Title>{props.title}</Title>
      <Author>Image Credit & Copyright: {props.author}</Author>
      <Paragraph>
        <strong>Explanation:</strong> {props.explanation}
      </Paragraph>
    </div>
  );
};

export default Card;
