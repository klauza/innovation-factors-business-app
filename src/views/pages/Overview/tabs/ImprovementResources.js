import React from 'react';
import styled from 'styled-components';

//media
import { img1, img2 } from '../../../../media/Images';

const Wrapper = styled.div`
  h1 {
    font-size: 3em;
    color: ${(props) => props.theme.colors.primary};
  }

  .comment-actions {
    display: flex;
    flex-direction: row;
    justify-content: start;

    button {
      outline: none;
      border: 2px solid ${(props) => props.theme.colors.primary};
      padding: 10px;
      background: #fff;
      cursor: pointer;
      margin: 7.5px 15px;
      .arrow-right {
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;

        border-left: 6px solid ${(props) => props.theme.colors.primary};
        display: inline-block;
      }
      span {
        margin-left: 5px;
        display: inline-block;
      }
    }
  }

  .articles {
    background: #fff;
    padding: 5px;

    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 350px));
    grid-gap: 5px;

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }

    .article {
      border: 2px solid ${(props) => props.theme.colors.primary};
      display: grid;
      grid-template-rows: 1fr 3fr 1fr;

      .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 5px;
        button {
          cursor: pointer;
          width: 90px;
          height: 35px;
          border: none;
          outline: none;
          border-radius: 2px;
          color: white;
          background: ${(props) => props.theme.colors.primary};
        }
      }

      .mid {
        width: 100%;
        height: 100%;
        border-top: 2px solid ${(props) => props.theme.colors.primary};
        border-bottom: 2px solid ${(props) => props.theme.colors.primary};
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .bottom {
        padding: 20px;

        span {
          text-align: left;
          display: block;
        }
      }
    }
  }
`;

const ImprovementResources = () => {
  return (
    <Wrapper>
      <h1>ImprovementResources</h1>

      <div className="comment-actions">
        <button>
          <div className="arrow-right" />
          <span>Stage</span>
        </button>
        <button>
          <div className="arrow-right" />
          <span>Content Type</span>
        </button>
      </div>

      <div className="articles">
        <div className="article">
          <div className="top">
            <button>Internal Ideas</button>
            <button>Article</button>
          </div>

          <div className="mid">
            <img src={img2} alt="" />
          </div>

          <div className="bottom">
            <span>Title: Creativity and The Role of The Leader</span>
            <span>Source: Harvard Business Review</span>
          </div>
        </div>

        <div className="article">
          <div className="top">
            <button>External Ideas</button>
            <button>Article</button>
          </div>

          <div className="mid">
            <img src={img1} alt="" />
          </div>

          <div className="bottom">
            <span>Title: Where Good Ideas Come From</span>
            <span>Source: TED.COM</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ImprovementResources;
