import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled.div`

`;

export const ProjectDiv = styled(animated.div)`
  &.project__container{
    background-color: #EEF0F2;
    margin: 20px 0;
    display: flex; flex-direction: column;
    height: 100%;
    width: 100%;
    border: 1px solid black;
  }
  .project{
    &__main{
      display: flex;
      flex-direction: column;
      padding: 15px;
      // MAIN TOP
      &-top{
        display: grid;
        grid-template-columns: 50px auto auto 100px;

        .project-icon{

          svg{
            width: 35px;
            height: 35px;
          }
        }

        .project-headers{
          font-size: 1.25em;
          button{

          }
        }

        .improvement-resources{
          border: none; outline: none;
          border-radius: 3px;
          color: white;
          background: ${props => props.theme.colors.primary};
          cursor: pointer;
        }
       

      }
      // MAIN BOT
      &-bot{
        // display: grid; 
        // grid-template-columns: 105px 105px 1fr;
        width: 100%;
        overflow: hidden;
        // text-align: center;
        ul > div > li{
          margin-top: 15px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          justify-items: center;

          button{
            width: 75px;
            height: 40px;
          }
        }

        ul .content-factor{
          background: lightgrey;
          padding: 25px 10px;
        }

      
        }
      }
    }

    
  }
`;