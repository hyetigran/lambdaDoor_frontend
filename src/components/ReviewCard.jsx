/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Rate } from 'antd';
import styled from 'styled-components';
import { mobilePortrait } from '../styles/theme.styles';
import ReviewDetails from './ReviewDetails';
import DashboardLayout from '../components/Layout/DashboardLayout';

const StyledDiv = styled.div`
  margin: 10px;
  @media ${mobilePortrait} {
    width: 100%;
  }
`;

const StyledH3 = styled.h3`
  font-family: Roboto;
`;

const StyledCardDiv = styled.div`
  width: 350px;
  height: 280px;
  @media ${mobilePortrait} {
    width: 98%;
    height: 300px;
  }
`;

export default function ReviewCard(props) {
  const { text, name, id } = props;

  return (
    <StyledDiv>
      {/* <StyledCardDiv> */}
      <Card>
        <StyledCardDiv>
          <StyledH3>Company Name: {name}</StyledH3>
          <p>{text}</p>
          <Rate disabled defaultValue={4} />
        </StyledCardDiv>
      </Card>
      {/* </StyledCardDiv> */}
    </StyledDiv>
  );
}