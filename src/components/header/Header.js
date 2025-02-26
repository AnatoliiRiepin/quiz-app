import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

function Header() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <header>
      <div>
        <p>Test your knowledge</p>
        <BtnDarkMode />
        <ul>
          <li>
            <NavLink to="/">Quiz Setting</NavLink>
          </li>
          <li>
            <NavLink to="/guidesHelp">Guides and Help</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
          <li>
            <NavLink to="/questionsSuggestions">
              Questions and Suggestions
            </NavLink>
          </li>
        </ul>
        {user ? (
          <div>
            <span>{user.displayName || user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <NavLink to="/sign-up">
              <button>Sign In</button>
            </NavLink>
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
