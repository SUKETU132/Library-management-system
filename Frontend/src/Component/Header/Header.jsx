import Buttons from "../Button";
import './Header.css'

export default function Header() {
    return (
        <>
            <div id="header">
                <div className="header-content">
                    <h1>BOOKS</h1>
                    <Buttons name="Login" />
                </div>
            </div>
        </>
    );
}
