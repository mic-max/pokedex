import React from 'react';

import { Stack, Text, FontWeights, IStackTokens } from 'office-ui-fabric-react';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

interface Props {
    num: string;
    name: string;
    types: string[]
}

const spacing: IStackTokens = {
    childrenGap: 10
};

export const Pokemon: React.FunctionComponent<Props> = (props) => {
  return (
    <Stack>
      <img src={`images/${props.num}.png`} alt={props.name}/>
      <Text>#{props.num}</Text>
      <Text variant="xxLarge" styles={boldStyle}>{props.name}</Text>
      <Stack horizontal tokens={spacing}>
        {props.types.map((user, index) =>
            <Text>{user}</Text>
        )}
      </Stack>
    </Stack>
  );
};
