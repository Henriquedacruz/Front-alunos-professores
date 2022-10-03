import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagem from '../../components/Imagens/transparente.png';
import api from '../../config/configApi.js'
import '../../styles/cadastro.css';



function index() {

    const [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [userName, setUserName] = useState('');

    async function createUser() {
        try {
            await api.post('/user', { email, password, userName })

            alert(`Usuario ${userName} cadastrado com sucesso`)
        }
        catch (err) {
            alert(`Houve um erro: ${err}`)
        }

    }
    return (
        <>
            <div className='cadastro-cont'>
                <img className="cadastro-Logo" src={Imagem} />
                <h3 className='tittle-cad'>Faça seu cadastro</h3>
                <Form>
                    <div className='user-text'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuário:</Form.Label>
                            <Form.Control type="text" value={userName}
      onChange={e => setUserName(e.target.value) } required />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Classe:</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                    </div>
                    <fieldset class="">
                        <div class="" >
                            <h6 class="">Tipo de conta:</h6>
                            <div class="" className='cont-tipo'>
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
                            <Form.Control type="date" required />
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email"  value={email} 
       onChange={e => setEmail(e.target.value) }required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control type="password" value={password}
      onChange={e => setPassword(e.target.value) } required />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group> */}
                    </div>
                    {/* <fieldset class="">
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
                    </fieldset> */}
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check label=" Li e concordo com os termos de uso" id="box-check" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={createUser}>
                        Cadastrar-se
                    </Button>
                </Form>
            </div>
        </>
    )
    
}

export default index
