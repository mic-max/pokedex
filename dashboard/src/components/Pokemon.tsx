import React from 'react';

import { Stack, Text, FontWeights, IStackTokens } from 'office-ui-fabric-react';
import { TypePill } from './TypePill';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

interface Props {
    num: string;
    name: string;
    types: string[]
};

const spacing: IStackTokens = {
    childrenGap: 10
};

export const Pokemon: React.FunctionComponent<Props> = (props) => {
  return (
    <Stack>
      {/* <Image>
        src={`images/${props.num}.png`}
        alt={props.name}
      </Image> */}
      <img src={`images/${props.num}.png`} alt={props.name} width="180px" style={{backgroundColor: '#f2f2f2', padding: '15px', borderRadius: '6px'}}></img>
      <Text>#{props.num}</Text>
      <Text variant="xxLarge" styles={boldStyle}>{props.name}</Text>
      <Stack horizontal tokens={spacing}>
        {props.types.map((typeName, index) =>
            <TypePill type={typeName} key={index} />
        )}
      </Stack>
    </Stack>
  );
};
