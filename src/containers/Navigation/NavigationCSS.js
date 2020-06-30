import styled from 'styled-components';

export const Wrapper = styled.div`

  .nav-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 60px;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;

    &::after{
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2px;
      border-radius: 10px;
      background: ${props => props.theme.colors.primary};
    }
    &__logo{  
      height: 55px;

      img{
        object-fit: cover;
        height: 100%;
        width: auto;
      }
    }

    &__links{
      display: flex;
      align-items: center;

      .nav-pc-links a{
        display: none;
        font-family: Verdana;
      }

      button{
        width: 35px; height: 35px;

        svg{
          width: 100%; height: 100%;
        }
      }

      a{
        margin: 0 20px;
      }
    }
  }


  @media ${props => props.theme.device.laptop}{

    .nav-container{

      &__logo{

        img{

        }
      }

      &__links{



        .nav-pc-links{
          a{
            display: flex;
          }
          display: flex;
          flex-direction: row;
          justify-items: space-between;
          align-items: center;
          font-family: ${props => props.theme.colors.nav_font_family};
        }
        
        button{
          display: none;
        }

        a{

        }
      }
    }
  }
`;