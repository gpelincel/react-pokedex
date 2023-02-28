import './Pokemodal.css';

function Pokemodal(props) {
    return (
        <div className={`hidden modal`}>
            <div className="modal-content">
                <div className="modal-header">
                    <h1>{props.name}</h1>
                    <p>{props.mainType}</p>
                </div>
                <div className="modal-body">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="" />
                </div>
                <div className="modal-footer">
                    <div className="stat">
                        <p>HP</p>
                        <div className="stats-bar">
                            <div className="stats-fill" style={{ width: "20%" }}></div>
                        </div>
                        <p>100</p>
                    </div>
                    <div className="stat">
                        <p>HP</p>
                        <div className="stats-bar">
                            <div className="stats-fill" style={{ width: "20%" }}></div>
                        </div>
                        <p>100</p>
                    </div>
                    <div className="stat">
                        <p>HP</p>
                        <div className="stats-bar">
                            <div className="stats-fill" style={{ width: "20%" }}></div>
                        </div>
                        <p>100</p>
                    </div>
                    <div className="stat">
                        <p>HP</p>
                        <div className="stats-bar">
                            <div className="stats-fill" style={{ width: "20%" }}></div>
                        </div>
                        <p>100</p>
                    </div>
                    <div className="stat">
                        <p>HP</p>
                        <div className="stats-bar">
                            <div className="stats-fill" style={{ width: "20%" }}></div>
                        </div>
                        <p>100</p>
                    </div>
                    <div className="stat">
                        <p>HP</p>
                        <div className="stats-bar">
                            <div className="stats-fill" style={{ width: "20%" }}></div>
                        </div>
                        <p>100</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokemodal;