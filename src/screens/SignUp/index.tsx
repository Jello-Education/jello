import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

import Header from '../../components/Header/index';
import {
  Button,
  ContainerButton,
  ContainerCheckbox,
  ContainerCheckboxs,
  ContainerForm,
  ContainerIcon,
  ContainerInput,
  ContainerInputs,
  Input,
  NameCheckbox,
  NameInput,
  Title,
} from './style';

const index = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [view, setView] = useState(false);
  const [view2, setView2] = useState(false);

  const Check = styled('span')(() => ({
    borderRadius: 50,
    width: 16,
    height: 16,
    border: '1px solid #FD3373',
  }));

  const Checked = styled('span')(() => ({
    borderRadius: 50,
    width: 16,
    height: 16,
    backgroundColor: '#FD3373',
  }));

  return (
    <>
      <Header type={"pattern"} />

      <ContainerForm>
        <div>
          <Title>Cadastre - se</Title>

          <ContainerCheckboxs>
            <ContainerCheckbox>
              <Checkbox
                onClick={() => setChecked(true)}
                icon={<Check />}
                checkedIcon={<Checked />}
              />
              <NameCheckbox>Aluno (a)</NameCheckbox>
            </ContainerCheckbox>

            <ContainerCheckbox>
              <Checkbox
                onClick={() => setChecked2(true)}
                icon={<Check />}
                checkedIcon={<Checked />}
              />
              <NameCheckbox>Criador (a)</NameCheckbox>
            </ContainerCheckbox>
          </ContainerCheckboxs>
        </div>

        <ContainerInputs>
          <div>
            <NameInput>Nome completo</NameInput>
            <Input placeholder="Ex: Felipe Silva" />
          </div>

          <div>
            <NameInput>Nome social (apelido)</NameInput>
            <Input placeholder="Ex: Felipe" />
          </div>

          <div>
            <NameInput>E-mail</NameInput>
            <Input placeholder="Ex: felipe@gmail.com" />
          </div>

          <div>
            <NameInput>Celular</NameInput>
            <Input placeholder="Ex: 41 99999-9999" />
          </div>

          <div>
            <NameInput>CPF</NameInput>
            <Input placeholder="000.000.000-00" />
          </div>

          <div>
            <NameInput>Data de nascimento</NameInput>
            <Input type="date" />
          </div>

          <div>
            <NameInput>Senha</NameInput>

            <ContainerInput>
              {view !== false ? (
                <Input placeholder="ex: felipe123" type="text" />
              ) : (
                <Input placeholder="ex: felipe123" type="password" />
              )}

              <ContainerIcon>
                {view !== false ? (
                  <FiEye onClick={() => setView(false)} />
                ) : (
                  <FiEyeOff onClick={() => setView(true)} />
                )}
              </ContainerIcon>
            </ContainerInput>
          </div>

          <div>
            <NameInput>Confirmar senha</NameInput>

            <ContainerInput>
              {view2 !== false ? (
                <Input placeholder="Digite sua senha novamente" type="text" />
              ) : (
                <Input
                  placeholder="Digite sua senha novamente"
                  type="password"
                />
              )}

              <ContainerIcon>
                {view2 !== false ? (
                  <FiEye onClick={() => setView2(false)} />
                ) : (
                  <FiEyeOff onClick={() => setView2(true)} />
                )}
              </ContainerIcon>
            </ContainerInput>
          </div>
        </ContainerInputs>

        <ContainerButton>
          <Button>Cadastrar</Button>
        </ContainerButton>
      </ContainerForm>
    </>
  );
};

export default index;
