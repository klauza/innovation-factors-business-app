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
      margin: 20px auto;
      input {
        padding: 5px;
        border-radius: 0;
        border: 1px solid black;
      }

      button {
        outline: none;
        padding: 5px 20px;
        cursor: pointer;
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

const LoginLayout = () => {
  return (
    <Wrapper>
      <div className="grid-top">
        <h1>Authentication</h1>
      </div>
      <div className="grid-bot">
        <div className="contact-column">
          <input placeholder="login" type="text" />
        </div>
        <div className="contact-column">
          <input placeholder="password" type="password" />
        </div>
        <div className="contact-column">
          <button>Submit</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginLayout;
