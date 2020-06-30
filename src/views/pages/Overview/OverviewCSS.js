import styled from 'styled-components';

export const Wrapper = styled.div`

  .overview-grid{
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    // justify-content: center;

    .tabs{
      display: flex;
      flex-direction: column;
      align-content: center;


      button{
        font-weight: 600;
        text-align: left;
        font-family: ${props => props.theme.nav_font_family};
        outline: none; 
        border: none;
        padding: 10px 0;
        background: #fff;
        border-bottom: blue;
        width: 250px;
        height: auto;
        position: relative;
        cursor: pointer;
        border-bottom: 2px solid ${props => props.theme.colors.primary};
        &:hover{
          background: #fafafa;
        }

        .pillar{
          position: absolute;
          left: 0;
          bottom: 0;
          height: 0px;
          width: 15px;
          background: ${props => props.theme.colors.secondary};
          transition: height 0.5s ease;
        }

        span{
          margin-left: 15px;
          color: grey;
          transition: all 0.5s ease;
        }
        
        &.tab-active{
          .pillar{
            height: 100%;
            transition: height 0.5s ease;
          }
          span{
            color: ${props => props.theme.colors.primary};
            margin-left: 25px;
            transition: all 0.5s ease;
          }
        }
      }
    }



    .content{
      border: 2px dashed red;
    }
  }


`;