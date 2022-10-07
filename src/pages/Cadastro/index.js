import { useState } from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Imagem from '../../components/Imagens/transparente.png';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";

function Index() {

  const handleRegister = (values) => {
    Axios.post("http://localhost:8080/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };

  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });

    
    return (
        <>
            {/* <div className='cadastro-cont'>
                <img className="cadastro-Logo" src={Imagem} />
                <h3 className='tittle-cad'>Faça seu cadastro</h3>
                <Form>
                    <div className='user-text'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuário:</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Classe:</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                    </div>
                    <fieldset class="">
                        <div class="" >
                            <h6 class="">Tipo de conta:</h6>
                            <div class=""  className='cont-tipo'>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="opcao1" required></input>
                                    <label class="" for="gridRadios1">
                                        RM
                                    </label>
                                </div>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="opcao2" required></input>
                                    <label class="" for="gridRadios2">
                                        RA
                                    </label>
                                </div>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="opcao2" required></input>
                                    <label class="" for="gridRadios2">
                                        GT
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className='user-text'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Número de registro:</Form.Label>
                            <Form.Control type="number" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Data de nascimento:</Form.Label>
                            <Form.Control type="date" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control type="password" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control type="text" required/>
                        </Form.Group>
                    </div>
                    <fieldset class="" >
                        <div class="">
                            <h6 class="">Horário de curso:</h6>
                            <div class="" className='cont-tipo'>
                                <div class="" >
                                    <input class="" type="radio" name="gridRadios" id="" value="opcao1" required></input>
                                    <label class="" for="gridRadios1">
                                        Manhã
                                    </label>
                                </div>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="opcao2" required></input>
                                    <label class="" for="gridRadios2">
                                        Tarde
                                    </label>
                                </div>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="opcao2" required></input>
                                    <label class="" for="gridRadios2">
                                        Noite
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check label=" Li e concordo com os termos de uso" id="box-check" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cadastrar-se
                    </Button>
                </Form>
            </div> */}
    <div className="container">
   {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <Field name="email" className="form-field" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field
              name="confirmation"
              className="form-field"
              placeholder="Senha"
            />

            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>
    </div>
  );
    
        </>
    );
}

export default Index