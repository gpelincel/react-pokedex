import './Header.css';
import logo from './../../assets/img/logo.gif';

console.log(logo);

function Header () {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo-gif" />
                <h2>Pokedex</h2>
            </div>
            <div className="search-input">
                <input type="search" />
            </div>
        </header>
    );
}

export default Header;