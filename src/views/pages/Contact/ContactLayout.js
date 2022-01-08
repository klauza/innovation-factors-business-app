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
    }
  }
  .grid-bot {
    background: #fff;
    display: flex;
    flex-direction: column;

    border: 1px solid #000;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    .contact-column {
      display: grid;
      grid-template-columns: 50px 200px;
      justify-content: center;
      margin: 20px 0;
      div {
        /* padding: 20px 5px; */
        text-align: center;
        border: 1px solid red;
      }
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

const ContactLayout = () => {
  return (
    <Wrapper>
      <div className="grid-top">
        <h1>Form</h1>
      </div>
      <div className="grid-bot">
        <div className="contact-column">
          <div className="contact-ico">ico</div>
          <div className="contact-info">tel number</div>
        </div>
        <div className="contact-column">
          <div className="contact-ico">ico</div>
          <div className="contact-info">email address</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactLayout;
