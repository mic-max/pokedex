import React from 'react';

import { Stack } from 'office-ui-fabric-react';
import { Pokemon } from './Pokemon';

export default class Pokedex extends React.Component {
    render() {
        return (
            <Stack>
                <Stack horizontal>
                    <Pokemon num={this.zeroPad(1)} name="Bulbasaur" types={["Grass", "Poison"]}/>
                    <Pokemon num={this.zeroPad(2)} name="Ivysaur" types={["Grass", "Poison"]}/>
                    <Pokemon num={this.zeroPad(3)} name="Venusaur" types={["Grass", "Poison"]}/>
                </Stack>
                <Stack horizontal>
                    <Pokemon num={this.zeroPad(4)} name="Charmander" types={["Fire"]}/>
                    <Pokemon num={this.zeroPad(5)} name="Charmeleon" types={["Fire"]}/>
                    <Pokemon num={this.zeroPad(6)} name="Charizard" types={["Fire", "Flying"]}/>
                </Stack>
                <Stack horizontal>
                    <Pokemon num={this.zeroPad(7)} name="Squirtle" types={["Water"]}/>
                    <Pokemon num={this.zeroPad(8)} name="Wartortle" types={["Water"]}/>
                    <Pokemon num={this.zeroPad(9)} name="Blastoise" types={["Water"]}/>
                </Stack>
            </Stack>
        );
    }

    componentDidMount() {
        fetch("http://localhost:9001/pokedex/150")
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));
    }

    zeroPad(num: number): string {
        return ("" + num).padStart(3, '0');
    }
};
