import { Link } from "react-router-dom"
import './style.css'

function Header() {

    return (
        <header>
            <h1>API dos seres mais BOBOCAS do universo</h1>
            
            <Link to={'/'}>
                <button>
                    Voltar para Home
                </button>
            </Link>

            <Link to={'/users'}>
                <button>
                    Navegar para a API
                </button>
            </Link>
            
        </header>
    )
}

export default Header