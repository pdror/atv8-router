import React from 'react';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';
import ProminentAppBar from './ProminentAppBar';

const Homepage = () => (
    <div className="Homepage">
        <ProminentAppBar />
        <div className="container">
            <h1>Lista de Alunos</h1>
            <hr />
            <p>This is our homepage.</p>
            <Link to="/new">
                <AddButton />
            </Link>
        </div>
    </div>
);

export default Homepage;