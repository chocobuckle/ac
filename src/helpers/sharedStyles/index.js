import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 3vw 0;
  width: 91%;
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

export const H6 = H3.withComponent('h6').extend`
  font-size: 2.75vw;
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
  margin-bottom: 0.5em;
`;
