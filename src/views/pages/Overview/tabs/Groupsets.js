import React from 'react';
import styled from 'styled-components';
// import { chart } from '../../../../media/Icons';

const Wrapper = styled.div`
overflow-x: hidden;
  h1{
    font-size: 3em;
    color: ${props => props.theme.colors.primary};
  }

  .groupsets-grid{
    padding: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    overflow-x: scroll;
    @media ${props => props.theme.device.tablet}{
      overflow-x: unset;
    }

    .group-names > div,
    .innovation-capacity > div,
    .internal-ideas > div,
    .external-ideas > div,
    .selection > div,
    .development > div,
    .roll-out > div,
    .synthesys > div{
      padding: 5px;
      border: 1px solid lightgrey;
      font-weight: bold;
      height: 100%;
      text-align: center;
      
      span{
        display: block;
      }
    }
    .group-names,
    .innovation-capacity,
    .internal-ideas,
    .external-ideas,
    .selection,
    .development,
    .roll-out,
    .synthesys{
      display: flex;
      flex-direction: column;
    }

    .group-names{
      &>nth-child(1){
        border: 1px solid red;
      }

      button{
        outline: none;
        border: none;
        background: #aaf0c9;
        padding: 5px 7.5px;
        cursor: pointer;
        border-radius: 2px;
      }
    }
  }
`;
const Groupsets = () => {
  return (
    <Wrapper>
      <h1>Groupsets</h1>

      <div className="groupsets-grid">
        {/* 1 */}
        <div className="group-names">
          <div>
            <span>Select Highlighted Groups</span>
          </div>
          <div>
            <span>Site A</span>
            <button>Site</button>
          </div>
          <div>
            <span>John smith</span>
            <button>Management</button>
          </div>
          <div>
            <span>Business Dev</span>
            <button>Dept</button>
          </div>
        </div>

        {/* 2 */}
        <div className="innovation-capacity">
          <div>
            <span>Innovation Capacity</span>
          </div>
          <div style={{background: '#acdee3'}}>7.6</div>
          <div style={{background: '#21aae1'}}>7.8</div>
          <div style={{background: '#21aae1'}}>8.1</div>
        </div>

        {/* 3 */}
        <div className="internal-ideas">
          <div>
            <span>Internal Ideas</span>
          </div>
          <div style={{background: '#ef5b2a'}}>3.6</div>
          <div style={{background: '#acdee3'}}>6.8</div>
          <div style={{background: '#acdee3'}}>7.1</div>
        </div>

        {/* 4 */}
        <div className="external-ideas">
          <div>
            <span>External Ideas</span>
          </div>
          <div style={{background: '#acdee3'}}>7.1</div>
          <div style={{background: '#d4c711'}}>4.8</div>
          <div style={{background: '#ef5b2a'}}>2.1</div>
        </div>

        {/* 5 */}
        <div className="synthesys">
          <div>
            <span>Synthesys</span>
          </div>
          <div style={{background: '#ef5b2a'}}>4.3</div>
          <div style={{background: '#d4c711'}}>5.6</div>
          <div style={{background: '#ef5b2a'}}>1.1</div>
        </div>

        {/* 6 */}
        <div className="selection">
          <div>
            <span>Selection</span>
          </div>
          <div style={{background: '#ef5b2a'}}>3.1</div>
          <div style={{background: '#ef5b2a'}}>4.4</div>
          <div style={{background: '#21aae1'}}>9.5</div>
        </div>

        {/* 7 */}
        <div className="development">
          <div>
            <span>Development</span>
          </div>
          <div style={{background: '#acdee3'}}>7.6</div>
          <div style={{background: '#acdee3'}}>7.8</div>
          <div style={{background: '#acdee3'}}>8.1</div>
        </div>

        {/* 8 */}
        <div className="roll-out">
          <div>
            <span>Roll Out</span>
          </div>
          <div style={{background: '#ef5b2a'}}>2.2</div>
          <div style={{background: '#21aae1'}}>8.4</div>
          <div style={{background: '#acdee3'}}>6.2</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Groupsets
