import React from 'react';
import { Formik, Field, Form, useField, FieldArray } from 'formik';
import { TextField, Button, Select, MenuItem, FormControl } from '@material-ui/core';
import * as Yup from 'yup';
import estadosArray from '../helpers/estados';
import axios from 'axios';

const MyTextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";

    return (
        <TextField
        fullWidth
            label={label}
            {...field}
            helperText={errorText}
            error={!!errorText}
        />
    );
}

const schema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório").min(10, "Muito curto"),
    idade: Yup.number().required("Campo obrigatório").min(16, "Idade mínima de 16 anos"),
    cpf: Yup.number().required("Campo obrigatório"),
    matricula: Yup.string().required("Campo obrigatório").min(9, "Formato inválido").max(9, "Formato inválido"),
    curso: Yup.string().required("Campo obrigatório"),
    endereco: Yup.string().required("Campo obrigatório"),
    numero: Yup.number().optional(),
    complemento: Yup.string().optional(),
    bairro: Yup.string().required("Campo obrigatório"),
    cidade: Yup.string().required("Campo obrigatório"),
    estado: Yup.string().required("Campo obrigatório"),
    cep: Yup.string().required("Campo obrigatório").min(8, "Formato inválido").max(8, "Formato inválido")
});

const Formulario = () => {
    const handleSubmitting = ( values, { setSubmitting }) => {
        //event.preventDefault();
        console.log(values);
        
        axios.post("http://localhost:8000/alunos", {
                nome: values.nome,
                idade: values.idade,
                cidade: values.cidade,
                cpf: values.cpf,
                complemento: values.complemento,
                curso: values.curso,
                estado: values.estado,
                matricula: values.matricula,
                bairro: values.bairro,
                cep: values.cep,
                endereco: values.endereco,
                numero: values.numero
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log(res);
                console.log("====== CADASTRADO =======")
            })
            .catch(err => console.log(err));
    }

    return (
        <Formik initialValues={{
            nome: '',
            idade: '',
            cpf: '',
            matricula: '',
            curso: '',
            endereco: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: '',
            cep: ''
        }}
            validationSchema={schema}
            onSubmit={handleSubmitting}
        >
            {({ values, isSubmitting }) => (
                <Form>
                    <FormControl>
                        <MyTextField label="Nome Completo*" name="nome" />
                        <br />
                        <MyTextField label="Idade*" name="idade" />
                        <br />
                        <MyTextField label="CPF*" name="cpf" />
                        <br />
                        <MyTextField label="Matrícula*" name="matricula" />
                        <br />
                        <MyTextField label="Curso*" name="curso" />
                        <br />
                        <MyTextField label="Endereço*" name="endereco" />
                        <br />
                        <MyTextField label="Número" name="numero" />
                        <br />
                        <MyTextField label="Complemento" name="complemento" />
                        <br />
                        <MyTextField label="Bairro*" name="bairro" />
                        <br />
                        <MyTextField label="Cidade*" name="cidade" />
                        <br />
                        <FieldArray name="estados">
                            <Field label="Estado*" labelId="label" name="estado" type="select" as={Select}>
                                <MenuItem value="" disabled>
                                    Estado
                            </MenuItem>
                                {estadosArray.map(estado => (
                                    <MenuItem key={estado.ID} value={estado.Sigla}>{estado.Nome}</MenuItem>
                                ))}
                            </Field>
                        </FieldArray>
                        <br />
                        <MyTextField label="CEP*" name="cep" />
                        <br />
                        <Button type="submit" disabled={isSubmitting} color="primary">
                            Cadastrar
                        </Button>
                    </FormControl>
                </Form>
            )}
        </Formik>
    );
}

export default Formulario;