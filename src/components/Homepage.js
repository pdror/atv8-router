import React from 'react';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';
import ProminentAppBar from './ProminentAppBar';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alunos: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount = () => {
        try {
            //axios.get("https://my-json-server.typicode.com/pdror/atv8-router/alunos")
            axios.get("http://localhost:8000/alunos")
                .then((response) => {
                    this.setState({ alunos: response.data })
                })
        } catch (err) {
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
                    <List>
                        {this.state.alunos.map((aluno) => {
                            return (
                                <ListItem style={{ paddingLeft: '0' }}>
                                    <Avatar>
                                        <AccountCircle />
                                    </Avatar>
                                    <ListItemText style={{ paddingLeft: 15 }} primary={aluno.nome} secondary={aluno.matricula} />
                                </ListItem>
                            )
                        })}
                    </List>
                    <Link to="/new">
                        <AddButton />
                    </Link>
                </div>
            </div>
        );
    }
};

export default Homepage;