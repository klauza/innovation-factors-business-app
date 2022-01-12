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
    border: 1px solid lightgrey;
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
    display: flex;
    flex-direction: column;

    border: 1px solid grey;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    .contact-column {
      margin: 20px auto;
      input {
        padding: 5px;
        border-radius: 0;
        border: 1px solid grey;
      }

      .contact-button {
        button {
          padding: 7px 12px;
          cursor: pointer;
          box-shadow: 0px 2px 6px -2px rgba(66, 68, 90, 1);
          background: #1b75bb;
          color: #fff;
          outline: none;
          border: 1px solid white;
          border-radius: 3px;
          &:hover {
            box-shadow: 0px 2px 12px -1px rgba(66, 68, 90, 1);
          }
        }
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
          <div className="contact-button">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginLayout;
