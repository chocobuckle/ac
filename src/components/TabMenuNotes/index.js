import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from 'helpers/sharedStyles';

const H2 = styled.h2`
  color: #004899;
  font-size: 5.3vw;
  font-weight: 600;
  margin-bottom: 2vw;
`;

const List = styled.ul`
  list-style: 'none';
`;

const ListItem = styled.li``;

const Wrapper = styled.div`
  background: rgba(245, 245, 245, 1);

  ul,
  li {
    font-size: 3.4vw;
  }

  li {
    margin-bottom: 1.4vw;
  }

  ul:last-child {
    margin-bottom: 0;
  }
`;

function TabMenuNotes() {
  return (
    <Wrapper>
      <ContentWrapper>
        <H2>Notes</H2>
        <List>
          <ListItem>
            Storage and operating range is 5°C–40°C (41°F–104°F) at 15% to 95%
            relative humidity
          </ListItem>
          <ListItem>
            Product may need to be replaced after 12 months of use.
            Environmental conditions, storage and proper cleaning can affect
            product life span
          </ListItem>
          <ListItem>Do not share this medical device</ListItem>
          <ListItem>
            If you notice medication build-up in your chamber, wash the inside
            of the chamber gently with a soft cloth
          </ListItem>
          <ListItem>
            Dishwashing with overly dirty dishes is not recommended
          </ListItem>
          <ListItem>Dishwasher validated up to 158°F (70°C)</ListItem>
        </List>
      </ContentWrapper>
    </Wrapper>
  );
}

export default TabMenuNotes;
