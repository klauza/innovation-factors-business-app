import React from 'react';
import styled from 'styled-components';

// media
import { like, dislike } from '../../../../media/Icons';

const Wrapper = styled.div`
  h1{
    font-size: 3em;
    color: ${props => props.theme.colors.primary};
  }

  .comment-actions{
    display: flex;
    flex-direction: row;
    justify-content: start;

    button{
      outline: none;
      border: 2px solid ${props => props.theme.colors.primary};
      padding: 10px;
      background: #fff;
      cursor: pointer;
      margin: 7.5px 15px;
      .arrow-right{
        width: 0; 
        height: 0; 
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        
        border-left: 6px solid ${props => props.theme.colors.primary};
        display: inline-block;
      }
      span{
        margin-left: 5px;
        display: inline-block;
      }
    }
  }
  

  .card{
    width: 100%;
    display: grid;
    grid-template-columns: 50px 1fr 1fr 4fr;
    justify-items: center;
    align-items: center;
    margin-top: 25px;

    border: 1px solid grey;
    border-radius: 2px;
    padding: 20px 10px;

    &-icon{
      width: 35px; height: 35px;
      img{
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    &-title,
    &-score{
      font-weight: bold;
      color:${props => props.theme.colors.primary};
      font-size: 1.25em;
    }

    // &-dsc{
    // }
  }
`;

const Comments = () => {
  return (
    <Wrapper>
      <h1>Comments</h1>
      <div className="comment-actions">
        <button><div className="arrow-right" /><span>Stage</span></button>
        <button><div className="arrow-right" /><span>Groupset</span></button>
        <button><div className="arrow-right" /><span>Sort</span></button>
        <button><div className="arrow-right" /><span>Search</span></button>
      </div>

      <div className="card">
        <div className="card-icon"><img src={like} alt=""/></div>
        <div className="card-title">External ideas</div>
        <div className="card-score">7.6</div>
        <div className="card-dsc">It was really useful having a media team representative in the business development meeting.</div>
      </div>

      <div className="card">
        <div className="card-icon"><img src={like} alt=""/></div>
        <div className="card-title">Internal ideas</div>
        <div className="card-score">5.1</div>
        <div className="card-dsc">My manager made it feel easy to suggest different perpsectives.</div>
      </div>

      <div className="card">
        <div className="card-icon"><img src={dislike} alt=""/></div>
        <div className="card-title">Selection</div>
        <div className="card-score"><span style={{color: 'red'}}>3.0</span></div>
        <div className="card-dsc">My manager made it feel easy to suggest different perpsectives.</div>
      </div>

      <div className="card">
        <div className="card-icon"><img src={like} alt=""/></div>
        <div className="card-title">Selection</div>
        <div className="card-score">7.0</div>
        <div className="card-dsc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum mi. Donec hendrerit rutrum metus sagittis accumsan. Nam ac sollicitudin lorem. Nam ac tristique turpis, vitae varius quam. Nullam et sapien ut libero sollicitudin iaculis. Duis semper tempus sapien sed tincidunt. Vestibulum sodales urna sed pulvinar rhoncus.</div>
      </div>
    </Wrapper>
  )
}

export default Comments
