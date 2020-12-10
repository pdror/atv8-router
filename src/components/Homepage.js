import React from 'react';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';
import ProminentAppBar from './ProminentAppBar';
import axios from 'axios';

const requestAlunos = () => {
    axios.get("https://my-json-server.typicode.com/pdror/atv8-router/alunos")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
}

const Homepage = () => (
    <div className="Homepage">
        <ProminentAppBar />
        <div className="container">
            <h1>Lista de Alunos</h1>
            <hr />
            {requestAlunos()}
            <Link to="/new">
                <AddButton />
            </Link>
        </div>
    </div>
);

export default Homepage;