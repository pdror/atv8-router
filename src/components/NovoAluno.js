import React from 'react';
import ProminentAppBar from './ProminentAppBar';
import Formulario from './Formulario';

const NovoAluno = () => (
    <div className="NovoAluno">
        <ProminentAppBar />
        <div className="container">
            <h1>Formulário de Cadastro</h1>
            <hr />
            <Formulario />
        </div>
    </div>
);

export default NovoAluno;