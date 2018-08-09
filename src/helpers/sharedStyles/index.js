import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 3vw 0;
  width: 91%;

  @media screen and (min-width: 996px) {
    padding: 29.88px 0;
  }
`;

export const H1 = styled.h1`
  color: #004899;
  font-family: Myriad Pro, sans-serif;
  font-size: 7.75vw;
  font-weight: 600;
  margin-bottom: 0.5em;
`;

export const H2 = H1.withComponent('h2').extend`
  font-size: 5.3vw;
`;

export const H3 = H2.withComponent('h3').extend`
  font-weight: 200;
  font-size: 4.7vw;
`;

export const H4 = H3.withComponent('h4').extend`
  font-size: 3.1vw;
`;

export const H5 = H4.withComponent('h5').extend`
  font-size: 2.75vw;
`;

export const H6 = H5.withComponent('h6').extend`
  font-size: 2.2vw;
`;

export const LightBlueSpan = styled.span`
  color: #007fc8;
`;

export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 3.9vw;
  line-height: 1.25em;
  margin-bottom: 0.5em;
`;

export const ScalingText = styled.p`
  font-size: 3.15vw;
  line-height: 1.225em;

  @media screen and (min-width: 360px) {
    font-size: 3vw;
    line-height: 1.25em;
  }

  @media screen and (min-width: 420px) {
    font-size: 2.95vw;
    line-height: 1.3em;
  }

  @media screen and (min-width: 500px) {
    font-size: 2.85vw;
    line-height: 1.25em;
  }

  @media screen and (min-width: 550px) {
    font-size: 2.75vw;
    line-height: 1.3em;
  }

  @media screen and (min-width: 600px) {
    font-size: 2.5vw;
    line-height: 1.35em;
  }

  @media screen and (min-width: 700px) {
    font-size: 2.25vw;
    line-height: 1.4em;
  }

  @media screen and (min-width: 800px) {
    font-size: 2vw;
  }

  @media screen and (min-width: 996px) {
    font-size: 19.92px;
    line-height: 1.5em;
  }
`;

export const ScalingH2 = H2.extend`
  font-size: 4.1625vw;
  margin-bottom: 0.4em;

  @media screen and (min-width: 996px) {
    font-size: 41.4585px;
  }
`;

export const ScalingH6 = styled.p`
  font-size: 3vw;
  line-height: 1.225em;

  @media screen and (min-width: 360px) {
    font-size: 2.85vw;
    line-height: 1.25em;
  }

  @media screen and (min-width: 420px) {
    font-size: 2.8vw;
    line-height: 1.3em;
  }

  @media screen and (min-width: 500px) {
    font-size: 2.7vw;
    line-height: 1.25em;
  }

  @media screen and (min-width: 550px) {
    font-size: 2.6vw;
    line-height: 1.3em;
  }

  @media screen and (min-width: 600px) {
    font-size: 2.35vw;
    line-height: 1.35em;
  }

  @media screen and (min-width: 700px) {
    font-size: 2.1vw;
    line-height: 1.4em;
  }

  @media screen and (min-width: 800px) {
    font-size: 1.85vw;
  }

  @media screen and (min-width: 996px) {
    font-size: 19.92px;
    line-height: 1.5em;
  }
`;

export const List = ScalingText.withComponent('ul').extend`
  list-style: 'none';
  margin-left: 0;
`;
