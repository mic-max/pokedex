import React from 'react';
import { Stack, Text, FontWeights } from 'office-ui-fabric-react';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: '960px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#605e5c'
        }
      }}
      gap={15}
    >
      <img
        src="pokemon_logo.png"
        alt="logo"
        height="120px"
      />
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to the world of pocket monsters!
      </Text>
    </Stack>
  );
};
