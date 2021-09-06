import React from 'react';

import useAuth from './useAuth';

// import { Container } from './styles';

function Dashboard({ code }) {
    const accessToken = useAuth(code);
    return <div>{code}</div>;
}

export default Dashboard;