import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  background: #dcebf7;

  @media screen and (min-width: 1280px) {
    position: relative;
  }
`;

export const Img = styled.img`
  display: none;

  @media screen and (min-width: 1280px) {
    width: 352.8px;
    display: block;
    position: absolute;
    bottom: 0;
    left: 40px;
  }
`;

export const ImgText = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    width: 174px;
    transform: rotate(-27deg);
    display: block;
    position: absolute;
    bottom: 271px;
    left: 80px;
    font-size: 14px;
    line-height: 16px;
    padding: 4px;
    z-index: 1;
  }
`;
export const Span = styled.span`
  color: #3e85f3;
  font-style: italic;
`;
export const ImgBg = styled.img`
  display: none;

  @media screen and (min-width: 1280px) {
    width: 174px;
    display: block;
    position: absolute;
    transform: rotate(+27deg);
    bottom: -44px;
    left: -11px;
    z-index: -1;
  }
`;
