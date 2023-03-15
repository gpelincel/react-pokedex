import './Pokemodal.css';

function Pokemodal(props) {

    var state = props.state;

    console.log(props.pokemon);

    if (props.pokemon) {
        return (
            <div id='modal' className={`${state} modal`}>
                <div className="modal-content" style={{
                    background: props.pokemon.mainType.color
                }}>

                    <img src={require(`./../../Assets/icons/${props.pokemon.mainType.type.name}.svg`)} alt="" className="type-icon" />

                    <svg className='close-icon' onClick={() => props.modalController("hidden")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
                    <div className="modal-header">
                        <h1>{props.pokemon.name}</h1>
                        <p>{props.pokemon.mainType.type.name}</p>
                    </div>
                    <div className="modal-body">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemon.id}.svg`} alt="" />

                    </div>
                    <div className="modal-footer">
                        {
                            props.pokemon.stats.map(stat => {
                                let score = stat.base_stat;
                                let name = stat.stat.name;
                                return (
                                    <div className="stat">
                                        <p className='stat-name'>{name}</p>
                                        <div className="stats-bar">
                                            <div className="stats-fill" style={{ width: `${score}%` }}></div>
                                        </div>
                                        <p className='stat-score'>{score}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokemodal;