import './Pokelist.css';
import Pokecard from '../Pokecard/Pokecard';
import { useEffect, useState } from 'react';
import apiList from '../../services/API/apiList';

function Pokelist() {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        apiList
            .get()
            .then((response) => setPokemon(response.data.results))
            .catch((err) => console.log(err));
    }, []);

    return (
        <main>
            {pokemon.map(pokemon => {
                pokemon.id = pokemon?.url.split('/')[6];

                return (
                    <Pokecard key={pokemon?.id} id={pokemon?.id} url={pokemon?.url} name={pokemon?.name} />
                )
            })}
        </main>
    )
}

export default Pokelist;