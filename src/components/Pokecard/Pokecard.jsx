import './Pokecard.scss'
import { useEffect, useState } from 'react';
import apiPoke from '../../services/API/apiPoke';
import { pokemonTypes } from '../../pokemonTypes';

function Pokecard(props) {

    const [stats, setStats] = useState([]);

    useEffect(() => {
        apiPoke
            .get(`${props.id}`)
            .then((response) => setStats(response.data))
            .catch((err) => console.log(err));
    }, []);



    if (stats?.types !== undefined) {

        stats.mainType = stats?.types[0];

        pokemonTypes.map(type => {
            if (type.name === stats?.mainType.type.name) {
                stats.mainType.color = type.color;
            }
        });

        return (
            <div className="card">
                <div className="type-wrapper" style={{
                    background: stats.mainType.color
                }}>
                    <img src={require(`../../assets/icons/${stats.mainType.type.name}.svg`)} alt="" className="type-icon" />

                    <svg onClick={() => {
                        props.modalController("", stats);
                    }} className='info-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>

                    <div className="card-header">
                        <h2>{props.name}</h2>
                    </div>
                    <div className="card-body">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`} alt="" />
                    </div>
                </div>
                <div className="card-footer">
                    {
                        stats?.types.map(type => {
                            let typeName = type.type.name;

                            pokemonTypes.map(color => {
                                if (color.name === typeName) {
                                    type.color = color.color;
                                }
                            });

                            return (
                                <div className="type-pill" style={{
                                    background: type.color
                                }}>
                                    {typeName}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );

    }
}

export default Pokecard;