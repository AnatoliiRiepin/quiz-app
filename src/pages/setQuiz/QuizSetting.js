import React from 'react';

import apiLinks from '../../components/data/apiLinks';
import ThemeSelector from './ThemeSelector';

export const QuizSetting = () => {
    return (
        <div>
            <ThemeSelector themes={apiLinks} />
        </div>
    );
};
