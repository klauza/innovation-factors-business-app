import React from 'react';
import styled from 'styled-components';
import List from '../List';

const Wrapper = styled.div`
  h1{
    font-size: 3em;
    color: ${props => props.theme.colors.primary};
  }
`;

const Stages = () => {
  return (
    <Wrapper>
      <h1>Stages</h1>
      <List />
    </Wrapper>
  )
}

export default Stages
