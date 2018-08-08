import React from 'react';
import styled from 'styled-components';
import { ContentWrapper, ScalingH2, ScalingText, List } from 'helpers/sharedStyles';

const Wrapper = styled.div`
  background: rgba(245, 245, 245, 1);
`;

const ListItem = styled.li`
  margin-bottom: 0.8em;
`;

function TabMenuNotes() {
  return (
    <Wrapper>
      <ContentWrapper>
        <ScalingH2>Notes</ScalingH2>
        <ContentWrapper style={{ padding: 0 }}>
          <ScalingText style={{ marginBottom: 0 }}>
            <List style={{ marginBottom: 0 }}>
              <ListItem>
                Storage and operating range is 5°C–40°C (41°F–104°F) at 15% to 95% relative humidity
              </ListItem>
              <ListItem>
                Product may need to be replaced after 12 months of use. Environmental conditions,
                storage and proper cleaning can affect product life span
              </ListItem>
              <ListItem>Do not share this medical device</ListItem>
              <ListItem>
                If you notice medication build-up in your chamber, wash the inside of the chamber
                gently with a soft cloth
              </ListItem>
              <ListItem>Dishwashing with overly dirty dishes is not recommended</ListItem>
              <ListItem style={{ marginBottom: 0 }}>
                Dishwasher validated up to 158°F (70°C)
              </ListItem>
            </List>
          </ScalingText>
        </ContentWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default TabMenuNotes;
