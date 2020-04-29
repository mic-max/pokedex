import React from 'react';

import { Text } from 'office-ui-fabric-react';

interface Props {
    type: string
};

const styles: { [id: string]: any } = {
    Grass: {
        backgroundColor: '#9bcc50',
        color: '#212121',
        borderRadius: '3px',
        lineHeight: '18px',
        width: '38%',
        maxWidth: '110px',
        textAlign: 'center',
        fontSize: '11px'
    },
    Poison: {
        backgroundColor: '#b97fc9',
        color: '#fff',
        borderRadius: '3px',
        lineHeight: '18px',
        width: '38%',
        maxWidth: '110px',
        textAlign: 'center',
        fontSize: '11px'
    },
    Fire: {
        backgroundColor: '#fd7d24',
        color: '#fff',
        borderRadius: '3px',
        lineHeight: '18px',
        width: '38%',
        maxWidth: '110px',
        textAlign: 'center',
        fontSize: '11px'
    },
    Flying: {
        backgroundColor: '#3dc7ef',
        color: '#212121',
        borderRadius: '3px',
        lineHeight: '18px',
        width: '38%',
        maxWidth: '110px',
        textAlign: 'center',
        fontSize: '11px'
    },
    Water: {
        backgroundColor: '#4592c4',
        color: '#fff',
        borderRadius: '3px',
        lineHeight: '18px',
        width: '38%',
        maxWidth: '110px',
        textAlign: 'center',
        fontSize: '11px'
    },
    Bug: {
        backgroundColor: '#729f3f',
        color: '#fff',
        borderRadius: '3px',
        lineHeight: '18px',
        width: '38%',
        maxWidth: '110px',
        textAlign: 'center',
        fontSize: '11px'
    }
};

export const TypePill: React.FunctionComponent<Props> = (props) => {
  return (
    <Text style={styles[props.type]}>{props.type}</Text>
  );
};
