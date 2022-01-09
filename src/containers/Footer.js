import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background: #000;
  line-height: 60px;
  text-align: center;
  margin-top: auto;

  span {
    color: #f2f2f2;
    font-size: 11px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <span>Website created for educational purposes.</span>
    </Wrapper>
  );
};

export default Footer;
