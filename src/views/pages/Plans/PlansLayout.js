import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1080px;
  margin: 0 auto;
  padding-top: 60px;
  padding-left: 2.5px;
  padding-right: 2.5px;

  font-size: 18px;
  font-weight: 700;
  .grid-top {
    width: 50%;
    margin: 0 auto;
    border: 1px solid #000;
    border-bottom: unset;
    background: #ededed;
    h1 {
      text-align: center;
      @media (max-width: 998px) {
        font-size: 5vw;
      }
    }
  }
  .grid-bot {
    background: #fff;
    border: 1px solid #000;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .plan-column {
      margin: 20px 0;
      div {
        padding: 20px 5px;
        text-align: center;
      }
    }

    & > div:nth-child(2) {
      border-left: 1px solid #000;
      border-right: 1px solid #000;
    }
  }

  &::after {
    content: '';
    display: block;
    background: #000;
    width: 96%;
    height: 6px;
    margin: 0 auto;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    /* position: absolute;
      bottom: 0;
      left: 0; */
  }
`;

const PlansLayout = () => {
  return (
    <Wrapper>
      <div className="grid-top">
        <h1>Subscription</h1>
      </div>
      <div className="grid-bot">
        <div className="plan-column">
          <div className="plan-name">Basic</div>
          <div className="plan-number">1</div>
          <div className="plan-duration">1 week</div>
          <div className="plan-price">9,99</div>
        </div>
        <div className="plan-column">
          <div className="plan-name">Extended</div>
          <div className="plan-number">2</div>
          <div className="plan-duration">1 month</div>
          <div className="plan-price">19,99</div>
        </div>
        <div className="plan-column">
          <div className="plan-name">Pro</div>
          <div className="plan-number">3</div>
          <div className="plan-duration">12 months</div>
          <div className="plan-price">49,99</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PlansLayout;
