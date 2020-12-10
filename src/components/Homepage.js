import React from 'react';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';
import ProminentAppBar from './ProminentAppBar';
import axios from 'axios';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alunos: [],
        }
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        try {
            axios.get("https://my-json-server.typicode.com/pdror/atv8-router/alunos")
            .then((response) => {
                this.setState({ alunos: response.data })
            })
        } catch(err) {
            console.log(err);
        }
    }


    render() {
        return (
            <div className="Homepage">
                <ProminentAppBar />
                <div className="container">
                    <h1>Lista de Alunos</h1>
                    <hr />
                    {
                        this.fetchData()}
                    <p>{this.state.alunos.map((aluno) => {
                        return <p>{aluno.nome}</p>
                    })}</p>
                    <Link to="/new">
                        <AddButton />
                    </Link>
                </div>
            </div>
        );
    }
};

export default Homepage;