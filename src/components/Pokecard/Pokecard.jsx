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

        pokemonTypes.map(type => {
            if (type.name === stats?.types[0].type.name) {
                stats.types[0].color = type.color;
            }
        });

        let img = require(`../../assets/icons/${stats.types[0].type.name}.svg`);

        return (
            <div className="card">

                <div className="type-wrapper" style={{
                    background: stats.types[0].color
                }}>
                    <img src={img} alt="" className="type-icon" />


                    <div className="card-header">
                        <h1>{props.name}</h1>
                    </div>
                    <div className="card-body">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.id}.png`} alt="" />
                    </div>
                </div>
                <div className="card-footer">
                    {
                        stats?.types.map(type => {
                            let typeName = type.type.name;

                            pokemonTypes.map(color => {
                                if (color.name === type.type.name) {
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