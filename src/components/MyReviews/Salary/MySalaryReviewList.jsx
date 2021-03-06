/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import { Empty, Button } from 'antd';
import { connect } from 'react-redux';
import SmallSalaryReviewCard from './SmallSalaryReviewCard';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledEmpty = styled.div`
  display: flex;
  justify-content: center;
  height: 40vh;
  align-items: center;
  .text {
    font-size: 20px;
  }
`;

const MySalaryReviewList = ({
  history,
  authState: { isLoggedIn },
  reviews: {
    reviews: { salary },
  },
}) => {
  return isLoggedIn && salary.length === 0 ? (
    <StyledEmpty>
      <Empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        imageStyle={{
          height: 60,
        }}
        description={
          <span className="text">
            Oops!! <br />
            You haven&apos;t posted any reviews yet
          </span>
        }
      >
        <Link to={{ pathname: '/add-review', state: 1 }}>
          <Button>Post a Review</Button>
        </Link>
      </Empty>
    </StyledEmpty>
  ) : (
    <StyledDiv>
      {salary.map(review => (
        <SmallSalaryReviewCard review={review} key={review.id} />
      ))}
    </StyledDiv>
  );
};

export default withRouter(connect(state => state)(MySalaryReviewList));
