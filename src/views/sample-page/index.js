import React from 'react';

// material-ui
import { Typography } from '@material-ui/core';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import Chat from '../../ui-component/Chat.js';

//==============================|| SAMPLE PAGE ||==============================//

const SamplePage = () => {
    return (
        <MainCard title="Chatbot">
            <Chat />
        </MainCard>
    );
};

export default SamplePage;