import React from 'react';
import styled from 'styled-components';
import { emailIco, phoneIco } from '../../../media/Icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1080px;
  margin: 0 auto;
  /* padding-top: 30px; */
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
      display: grid;
      grid-template-columns: 50px 200px;
      grid-gap: 5px;
      grid-template-rows: 50px;
      justify-content: center;
      margin: 20px 0;

      /* &:hover {
        box-shadow: 0px 2px 6px -1px rgba(66, 68, 90, 1);
      } */
      div {
        /* padding: 20px 5px; */
        text-align: center;
        border: 1px solid gray;
      }
      .contact-ico,
      .contact-info {
        display: grid;
        box-shadow: 0px 2px 6px -1px rgba(66, 68, 90, 1);

        span,
        a,
        img {
          justify-self: center;
          align-self: center;
        }

        img {
          width: 40px;
          height: 40px;
          object-fit: cover;
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

const ContactLayout = () => {
  return (
    <Wrapper>
      <div className="grid-top">
        <h1>Form</h1>
      </div>
      <div className="grid-bot">
        <div className="contact-column">
          <div className="contact-ico">
            <img src={phoneIco} />
          </div>
          <div className="contact-info">
            <a href="tel:666111666">
              <span>066111666</span>
            </a>
          </div>
        </div>
        <div className="contact-column">
          <div className="contact-ico">
            <img src={emailIco} />
          </div>
          <div className="contact-info">
            <a href="mailto:innovation-technology@mail.net">
              <span>in-fac@mail.net</span>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactLayout;
