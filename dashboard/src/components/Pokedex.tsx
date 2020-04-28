import React from 'react';

import { Pokemon } from './Pokemon'

export default class Pokedex extends React.Component {
    render() {
        return (
            <Pokemon num={this.zeroPad(4)} name="Charmander" types={["Fire"]}/>
        );
    }

    zeroPad(num: number): string {
        return ("" + num).padStart(3, '0')
    }
};
