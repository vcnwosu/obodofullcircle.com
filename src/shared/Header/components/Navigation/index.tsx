import { Link } from "react-router-dom"
import { Button } from "../../../Button";
import './navigation.scss';

const Navigation = () => {
    return (
        <>
            <nav className="header-nav">
                <ul>
                    <li>
                        <Link to="/exchange-program">Exchange Program</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contribute">Contribute</Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <Button text="Login" type="button" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;