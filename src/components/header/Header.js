import { NavLink } from 'react-router-dom';
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

function Header() {
    return (
        <header>
            <div>
                <p>Test your knowledge</p>
                <BtnDarkMode />
                <ul>
                    <li>
                        <NavLink to="/">
                            Quiz Setting
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/guidesHelp">
                            Guides and Help
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard">
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/questionsSuggestions">
                            Questions and Suggestions
                        </NavLink>
                    </li>
                </ul>
                <NavLink to="/sign-up">
                    <button>Sign In</button>
                </NavLink>
                <NavLink to="/login">
                    <button>Login</button>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
