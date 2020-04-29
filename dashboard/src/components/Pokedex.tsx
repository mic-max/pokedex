import React from 'react';

import { Stack, IStackTokens } from 'office-ui-fabric-react';
import { Pokemon } from './Pokemon';

const spacing: IStackTokens = {
    childrenGap: 20
};

export default class Pokedex extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            pokemon: []
        };
        // nextId: 13,
        // numberPerFetch: 12
    }

    componentDidMount() {
        fetch("http://localhost:9001/pokedex/range/1/13")
            .then(res => res.json())
            .then(json => {
                this.setState(state => {
                    // return {pokemon: state.pokemon.concat(json)}
                });
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <Stack tokens={spacing}>
                {/* <pre>{this.state.pokemon}</pre> */}

                <Stack horizontal tokens={spacing}>
                    <Pokemon num={this.zeroPad(1)} name="Bulbasaur" types={["Grass", "Poison"]}/>
                    <Pokemon num={this.zeroPad(2)} name="Ivysaur" types={["Grass", "Poison"]}/>
                    <Pokemon num={this.zeroPad(3)} name="Venusaur" types={["Grass", "Poison"]}/>
                    <Pokemon num={this.zeroPad(4)} name="Charmander" types={["Fire"]}/>
                </Stack>
                <Stack horizontal tokens={spacing}>
                    <Pokemon num={this.zeroPad(5)} name="Charmeleon" types={["Fire"]}/>
                    <Pokemon num={this.zeroPad(6)} name="Charizard" types={["Fire", "Flying"]}/>
                    <Pokemon num={this.zeroPad(7)} name="Squirtle" types={["Water"]}/>
                    <Pokemon num={this.zeroPad(8)} name="Wartortle" types={["Water"]}/>
                </Stack>
                <Stack horizontal tokens={spacing}>
                    <Pokemon num={this.zeroPad(9)} name="Blastoise" types={["Water"]}/>
                    <Pokemon num={this.zeroPad(10)} name="Caterpie" types={["Bug"]}/>
                    <Pokemon num={this.zeroPad(11)} name="Metapod" types={["Bug"]}/>
                    <Pokemon num={this.zeroPad(12)} name="Butterfree" types={["Bug", "Flying"]}/>
                </Stack>
                {/* TODO add a load more button */}
            </Stack>
        );
    }

    zeroPad(num: number): string {
        return ("" + num).padStart(3, '0');
    }
};
