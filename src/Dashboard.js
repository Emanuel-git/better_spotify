import { useState } from 'react';

import useAuth from './useAuth';

import { Container, Form } from 'react-bootstrap';

function Dashboard({ code }) {
    const accessToken = useAuth(code);

    const [search, setSearch] = useState('');

    return (
        <Container>
            <Form.Control
                type="Search"
                placeholder="Search Songs/Artists"
                value={search} 
                onChange={e => setSearch(e.target.value)} 
            />
        </Container>
    );
}

export default Dashboard;