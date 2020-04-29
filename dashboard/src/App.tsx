import React from 'react';
import { Stack, Text, FontWeights } from 'office-ui-fabric-react';
import Pokedex from './components/Pokedex';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="center"
      styles={{
        root: {
          width: '960px',
          margin: '0 auto',
          color: '#313131'
        }
      }}
      gap={15}
    >
      <img
        src="pokemon_logo.png"
        alt="logo"
        height="120px"
        style={{marginTop: '15px'}}
      />
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to the world of pocket monsters!
      </Text>
      <Pokedex />
    </Stack>
  );
};
