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
import NestedList from './ListaAlunos'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import { SettingsInputComponent, SettingsPowerRounded } from '@material-ui/icons';

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
                    { this.state.alunos.map((aluno) => (
                        <div>
                        <ListItem>
                            <ListItemIcon>
                                <Avatar>
                                    <AccountCircle />
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText primary={aluno.nome} secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                    >
                                        Matrícula: {aluno.matricula}, CPF: {aluno.cpf}
                                        <br />
                                        Curso: {aluno.curso}
                                        <br />
                                        Idade: {aluno.idade}
                                        <br />
                                        Localização: {aluno.cidade} - {aluno.estado}, {aluno.cep}
                                    </Typography>
                                </React.Fragment>
                            } />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                    ))}

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