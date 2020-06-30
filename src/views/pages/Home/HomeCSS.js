import styled from 'styled-components';

export const HeroContainer = styled.div`
  min-height: calc( 100vh - 60px);
  // height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background: #fff;
  padding: 10px 5px;



  .hero-grid{
    height: 100%;
    // height: calc( 100vh - 60px);
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    align-self: center;
    padding: 0 10px;

    &__left{
      max-width: 500px;
      margin: 50px auto;
      h1{
        color: ${props => props.theme.colors.primary};
        text-align: center;
      }
      p{
        text-align: center;
        color: grey;
        font-size: 2em;
      }
    }

    &__right{
      margin: 0 auto;
      max-width: 500px;
      height: 100%;
      img{
        width: 100%; height: auto;
        object-fit: cover;
      }
    }

  }



  @media ${props => props.theme.device.laptop}{
    height: 100%;
    .hero-grid{
      grid-template-columns: 1fr 1fr;
      height: calc( 100vh - 60px);
      &__left{
        margin: 0;
        h1{
          text-align: left;
        }
        p{
          text-align: left;
          margin-top: 15px;
          color: grey;
          font-size: 2em;
        }
      }

      &__right{
        max-width: unset;
        height: unset;
      }
    }
  }
`;




export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  

  background: #fff;
  // background: ${props => props.theme.colors.primary};
  // background: transparent;
  transition: background .5s ease;
  // button{
  //   background: ${props => props.theme.colors.primary};
  // }

  .hero-arrow{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    
    margin: 0px auto 75px;
    border: 0;
    background: none;
    outline: none;
    width: 30px; height: 50px;
    display: block;
    cursor: pointer;

    svg{
      width: 100%; height: 100%;
      &:nth-child(2){
        margin-top: -30px;
      }
    }

    &:hover svg{
      fill: grey;
    }
  }

  .insight{
    scroll-snap-align: start;
    max-width: 500px;
    margin: 50px auto 200px;
    h1{
      color: ${props => props.theme.colors.primary};
      text-align: center;
    }
    p{
      text-align: center;
      color: grey;
      font-size: 2em;
    }
  }

  .sections{
    max-width: 1440px;
    margin: 0 auto 125px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media ${props => props.theme.device.mobileL}{
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${props => props.theme.device.laptop}{
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
`;



export const Section = styled.div`
  padding: 0 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto 0;
  max-width: 500px;

  .section-image{
    width: 125px; height: 125px;

    img{
    width:100%; height: 100%;
      object-fit: cover;
    }
  }

  .section-title{
    text-align: center;
    color: ${props => props.theme.colors.primary};
  }
  .section-desc{
    color: grey;
    font-size: 1.25em;
    text-align: center;
  }
`;