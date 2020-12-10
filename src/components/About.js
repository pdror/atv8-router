import React from 'react';
import ProminentAppBar from './ProminentAppBar';
import axios from 'axios';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: ''
        }
    }

    componentDidMount() {
        try {
            axios.get("https://my-json-server.typicode.com/pdror/atv8-router/about")
                .then((response) => {
                    this.setState({ about: response.data })
                })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className="About">
                <ProminentAppBar />
                <div className="container">
                    <h1>Sobre</h1>
                    <hr />
                    <p>
                        {this.state.about.descricao}
                    </p>
                    <h4>
                        Equipe: { this.state.about.integrante1} e {this.state.about.integrante2 }
                    </h4>
                    <h4>
                        Links úteis: 
                    </h4>
                    <p><a href={this.state.about.github} target="_blank" rel="noreferrer">Github</a></p>
                    <p><a href={this.state.about.server} target="_blank" rel="noreferrer">JSON Server</a></p>
                </div>
            </div>
        );
    }
};

export default About;