import React from 'react'
import styled from 'styled-components';
import List from '../List';

const Wrapper = styled.div`
  h1{
    font-size: 3em;
    color: ${props => props.theme.colors.primary};
  }
`;

const IndividualInnovationFactors = () => {
  return (
    <Wrapper>
      <h1>Individual Innovation Factors</h1>
      <List />
    </Wrapper>
  )
}

export default IndividualInnovationFactors
