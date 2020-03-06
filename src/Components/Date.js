import React from "react";
import styled from "styled-components";

const Form = styled.form`
  background: lightgrey;
  height: 100px;
  width: 100%;
  margin: 0, auto;
`;

const CustomInput = styled.input`
  background: lightblue;
  color: blue;
  opacity: 90%;
  height: 4vh;
  margin: 0 1%;
`;
const CustomButton = styled.button`
  background: lightgrey;
  height: 35px;
  width: 100px;
  font-size: 1rem;
  color: red;
`;

const Date = props => {
  return (
    <div>
      <Form onSubmit={e => props.handleSubmit(e)}>
        <p>
          <strong>Select Date To See Picture From That Date</strong>
        </p>
        <CustomInput
          onChange={e => props.handleDate(e)}
          type="text"
          id="myData"
          placeholder="Date (YYYY-MM-DD)"
        />
        <CustomButton>Submit</CustomButton>
      </Form>
    </div>
  );
};

export default Date;
