import React from 'react';
import styled from 'styled-components';
import ReviewCard from '../ReviewCard/ReviewCard';
import { interviewReviews } from '../../utils/data';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
`;

const ReviewList = () => {
  return (
    <StyledDiv>
      {interviewReviews.map(review => (
        // eslint-disable-next-line react/no-array-index-key
        <ReviewCard
          key={`${review.id}${review.user_id}`}
          text={review.text}
          name={review.company_name}
          id={review.id}
        />
      ))}
    </StyledDiv>
  );
};

export default ReviewList;