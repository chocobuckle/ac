import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 3vw 0;
  width: 91%;
`;

export const H1 = styled.h1`
  font-size: 7.75vw;
  font-weight: 600;
`;

export const H2 = H1.withComponent('h2').extend`
  font-size: 5.3vw;
`;

export const LightBlueSpan = styled.span`
  color: #007fc8;
`;

export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  margin-bottom: 0.5em;
`;
