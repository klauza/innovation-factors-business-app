import { createGlobalStyle } from 'styled-components';
import { background2 } from '../media/Images';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
      scroll-behavior: smooth;
  }
  body{
    min-height: 100vh;    
    width: 100%;

    background: url(${background2}) no-repeat center center fixed;


    overflow-y: scroll;

    /* background: url(${(props) => props.theme.background}); */
    /* background-repeat: no-repeat; */
    /* background-position: center; */
    /* background-size: cover; */
    


    /* background: ${(props) =>
      `url(${props.theme.background}) no-repeat top center`}; */


    /* background: url(${(props) => props.theme.background}); */

    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: 'Titillium Web', sans-serif;
    transition: color .5s ease;
  }

  body, #root{
    width: 100%; height: 100%;
  }

  

  // mobile navigation modal
  .MuiPaper-root{
    min-width: 400px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .modal-links{
      display: flex;
      flex-direction: column;
      align-items: center;
      a{
        text-decoration: none;
        font-size: 2em;
        color: #000;
      }
    }

    button{
      width: 100px;
      height: 50px;
      outline: none;
      border: none;
      background: none;
      cursor: pointer;

      svg{
        width: 100%;
        height: 100%;
      }        
      &:hover svg{
        fill: grey;
      }

    }
  }

  
  .views-container{
    // position: relative;
    // left: 0px;


    margin: 0 auto;
    @media ${(props) => props.theme.device.tablet} {
      padding: 0px;
    }
    @media ${(props) => props.theme.device.laptop} {
      // left: 50px;
      // transform: translate(-25px);
      // width: calc(100% - 50px);
    }

  }

  .page{
    // position: absolute;
    // top: 0; left: 0; right: 0; bottom: 0;
  }
  
  // enter 300ms, exit 150ms
  .fade-appear, .fade-enter{
    opacity: 1; 
    z-index: 1;
  }
  .fade-appear-active, .fade-enter.fade-enter-active{
    opacity: 1;
    transition: opacity 300ms linear 150ms;
  }
  .fade-exit{
    opacity: 1;
  }
  .fade-exit.fade-exit-active{
    opacity: 0;
    transition: opacity 150ms linear;
  }
`;
