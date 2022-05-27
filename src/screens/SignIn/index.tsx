import React, { useState } from 'react';

import StudentImage from '../../assets/image/Student-Image.png';
import Google from '../../assets/icons/google.svg';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Container, Student, Division, Title, Description, ContentButtonGoogle, ButtonGoogle, ImageGoogle, ContentBorder, Border, NameBorder, Form, ContainerInput, ContainerIconInput, Input, ContainerIconPassword, ContainerCheckbox, Checkbox, NameCheckbox, ContainerButton, ButtonRegister, ButtonLogin, ForgotPassword } from './style';

const SignIn = () => {

    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] = useState("");
    const [ view, setView ] = useState(false);

  return (
    <Container>

        <Student src={StudentImage} alt="Student Jello" />

        <Division>
            <div>

                <Title>Olá!</Title>

                <Description>Seja bem-vindo(a) novamente!</Description>

                <ContentButtonGoogle>
                    <ButtonGoogle>
                        <ImageGoogle src={Google} />
                        Entrar com Google
                    </ButtonGoogle>
                </ContentButtonGoogle>

                <ContentBorder>
                    
                    <Border />

                    <NameBorder>OU</NameBorder>

                    <Border />

                </ContentBorder>

                <Form>

                    <ContainerInput>

                        <ContainerIconInput>
                             <MdOutlineEmail />
                        </ContainerIconInput>

                        <Input type="text" placeholder="E-mail" />

                    </ContainerInput>

                    <ContainerInput>

                        <ContainerIconInput>
                             <FaLock />
                        </ContainerIconInput>

                        <Input type={view == false ? "password" : "text"} placeholder="Senha" />

                        <ContainerIconPassword>
                             {view == false ? <FiEye onClick={() => setView(true)} /> : <FiEyeOff onClick={() => setView(false)} />}
                        </ContainerIconPassword>

                    </ContainerInput>

                    <div style={{display: 'flex', justifyContent: 'center'}}>

                        <ContainerCheckbox>

                            <Checkbox type="checkbox" />

                            <NameCheckbox>Continuar conectado(a)</NameCheckbox>

                        </ContainerCheckbox>

                    </div>

                    <ContainerButton>

                        <ButtonRegister>Cadastrar</ButtonRegister>

                        <ButtonLogin>Entrar</ButtonLogin>

                    </ContainerButton>

                    <ForgotPassword>Esqueci minha senha!</ForgotPassword>

                </Form>

            </div>
        </Division>

    </Container>
  )
}

export default SignIn;