import './Pokelist.css';
import Pokecard from '../Pokecard/Pokecard';
import { useEffect, useState } from 'react';
import apiPoke from '../../services/API/apiPoke';
import Pokemodal from '../Pokemodal/Pokemodal';

function Pokelist() {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        apiPoke
            .get()
            .then((response) => setPokemon(response.data.results))
            .catch((err) => console.log(err));
    }, []);

    const [modal, setModal] = useState("");


    const modalController = (modalData) => {
        setModal(modalData);
    }

    console.log(modal);

    return (
        <main>
            <div className="pokegrid">
                {pokemon.map(pokemon => {
                    pokemon.id = pokemon?.url.split('/')[6];

                    return (
                        <Pokecard key={pokemon?.id} id={pokemon?.id} url={pokemon?.url} name={pokemon?.name} modalController={modalController} />
                    )
                })}
            </div>
            <Pokemodal state={modal}></Pokemodal>
        </main>
    )
}

export default Pokelist;