import styled from 'styled-components';

export const Wrapper = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 15px;
    color: ${(props) => props.theme.colors.primary};
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 0;
  max-width: 500px;
  padding: 0 10px;
  padding-top: 30px;
  padding-bottom: 30px;

  .section-image {
    width: 125px;
    height: 125px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
