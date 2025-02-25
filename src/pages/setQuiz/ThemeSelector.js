import React, { useState } from 'react';
import QuizForm from './QuizForm';

const ThemeSelector = ({ themes }) => {
  const [selectedThemeUrl, setSelectedThemeUrl] = useState(null);

  const handleSelectTheme = (themeUrl) => {
    setSelectedThemeUrl(themeUrl);
  };

  return (
    <div>
      <div>
        {themes.map((link, index) => (
          <div
            key={index}
            onClick={() => handleSelectTheme(link.url)}
            style={{
              cursor: 'pointer',
              padding: '10px',
              border:
                selectedThemeUrl === link.url
                  ? '2px solid blue'
                  : '1px solid gray',
              marginBottom: '5px',
            }}
          >
            <p>{link.theme}</p>
            <img src={link.img} alt={link.theme} />
          </div>
        ))}
      </div>
      <QuizForm selectedThemeUrl={selectedThemeUrl} />
    </div>
  );
};

export default ThemeSelector;
