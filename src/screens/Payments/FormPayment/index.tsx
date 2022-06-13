import React, { useState } from 'react';
import { AiFillCreditCard } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { RiBarcodeBoxLine } from 'react-icons/ri';
import Select from 'react-select';

import PicPay from '../../../assets/svgs/Icone-Picpay.svg';
import Pix from '../../../assets/svgs/Icone-PIX.svg';
import ImageLogo from '../../../assets/svgs/logo/Logo.svg';
import PicPay2 from '../../../assets/svgs/PicPay-Verde.svg';
import Pix2 from '../../../assets/svgs/Pix-Verde.svg';
import {
  Border,
  Button,
  Checkbox,
  Circle,
  ContainerButton,
  ContainerFormPayment,
  ContainerInput,
  ContainerInputFlex,
  ContainerLogo,
  ContainerPrivacity,
  ContainerStatus,
  Description,
  DescriptionTop,
  IconPayment,
  Input,
  InputFlex,
  Logo,
  Title,
  TitleInput,
} from './style';

const index = () => {
  const [formPaymethod, setFormPaymethod] = useState(1);

  const options = [
    { value: '1', label: '1x de R$ 1.140,00' },
    { value: '2', label: '2x de R$ 570,00' },
    { value: '3', label: '3x de R$ 380,00' },
    { value: '4', label: '4x de R$ 285,00' },
    { value: '5', label: '5x de R$ 228,00' },
    { value: '6', label: '6x de R$ 190,00' },
    { value: '7', label: '7x de R$ 162,86' },
    { value: '8', label: '8x de R$ 142,50' },
    { value: '9', label: '9x de R$ 126,67' },
    { value: '10', label: '10x de R$ 114,00' },
    { value: '11', label: '11x de R$ 103,64' },
    { value: '12', label: '12x de R$ 95,00' },
  ];

  return (
    <div>
      <ContainerLogo>
        <Logo src={ImageLogo} alt="Logo Jello" />
      </ContainerLogo>

      <ContainerStatus>
        <Circle style={{ background: '#44f9bd', color: '#000', fontSize: 10 }}>
          <BsCheckLg />
        </Circle>
        <Border style={{ background: '#44f9bd' }} />
        <Circle style={{ background: '#44f9bd', color: '#000', fontSize: 10 }}>
          <BsCheckLg />
        </Circle>
        <Border style={{ background: '#44f9bd' }} />
        <Circle style={{ border: '1px solid #44f9bd' }} />
      </ContainerStatus>

      <ContainerInput>
        <Title>
          Falta pouco para você <br /> começar a estudar!
        </Title>
        <DescriptionTop>
          Escolha a melhor forma de pagamento para você.
        </DescriptionTop>

        <ContainerFormPayment>
          {formPaymethod === 1 ? (
            <div
              style={{ color: '#44f9bd', marginRight: '5%', marginTop: '3%' }}
            >
              <AiFillCreditCard />
            </div>
          ) : (
            <div
              style={{ color: '#FD3373', marginRight: '5%', marginTop: '3%' }}
              onClick={() => setFormPaymethod(1)}
            >
              <AiFillCreditCard />
            </div>
          )}

          {formPaymethod == 2 ? (
            <div
              style={{ color: '#44f9bd', marginRight: '5%', marginTop: '3%' }}
            >
              <RiBarcodeBoxLine />
            </div>
          ) : (
            <div
              style={{ color: '#FD3373', marginRight: '5%', marginTop: '3%' }}
              onClick={() => setFormPaymethod(2)}
            >
              <RiBarcodeBoxLine />
            </div>
          )}

          {formPaymethod === 3 ? (
            <IconPayment src={Pix2} />
          ) : (
            <IconPayment onClick={() => setFormPaymethod(3)} src={Pix} />
          )}

          {formPaymethod === 4 ? (
            <IconPayment src={PicPay2} />
          ) : (
            <IconPayment onClick={() => setFormPaymethod(4)} src={PicPay} />
          )}
        </ContainerFormPayment>

        {formPaymethod === 1 && (
          <div style={{ display: 'grid', justifyContent: 'center' }}>
            <TitleInput>Selecione as parcelas</TitleInput>
            <div style={{ marginTop: '3%' }}>
              <Select options={options} placeholder="Número de parcelas" />
            </div>

            <TitleInput>Número do Cartão</TitleInput>
            <Input type="text" placeholder="**** **** **** ****" />

            <TitleInput>Data de validade</TitleInput>
            <Input type="text" placeholder="MM/AA" />

            <TitleInput>Código de segurança</TitleInput>
            <Input type="text" placeholder="***" />

            <TitleInput>Nome do Titular</TitleInput>
            <Input type="text" placeholder="Nome impresso no cartão" />

            <TitleInput>Data de Nascimento</TitleInput>
            <Input type="text" placeholder="DD/MM/AAAA" />

            <TitleInput>CPF</TitleInput>
            <Input type="text" placeholder="000.000.000-00" />

            <TitleInput>Telefone</TitleInput>
            <Input type="text" placeholder="(00) 0 0000-0000" />
          </div>
        )}

        {formPaymethod === 2 && (
          <div style={{ display: 'grid', justifyContent: 'center' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '3%',
                  width: '40%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Checkbox style={{ marginRight: '5%' }} />

                  <Description>Anual</Description>
                </div>
              </div>
            </div>

            <TitleInput>Nome completo</TitleInput>
            <Input type="text" placeholder="Ex. Felipe Silva" />

            <TitleInput>CPF</TitleInput>
            <Input type="text" placeholder="000.000.000-00" />

            <TitleInput>CEP</TitleInput>
            <Input type="text" placeholder="00000-000" />

            <TitleInput>Av./Rua</TitleInput>
            <Input type="text" placeholder="Ex. Avenida Independência" />

            <ContainerInputFlex>
              <div>
                <TitleInput>Número</TitleInput>
                <InputFlex
                  style={{ marginRight: 20 }}
                  type="text"
                  placeholder="0000"
                />
              </div>

              <div>
                <TitleInput>Complemento</TitleInput>
                <InputFlex type="text" placeholder="0000" />
              </div>
            </ContainerInputFlex>

            <TitleInput>Bairro</TitleInput>
            <Input type="text" placeholder="Ex. Centro" />

            <TitleInput>Cidade</TitleInput>
            <Input type="text" placeholder="Ex: São Paulo" />

            <TitleInput>Estado</TitleInput>
            <Input type="text" placeholder="Ex: São Paulo" />
          </div>
        )}

        {formPaymethod === 3 && (
          <div style={{ display: 'grid', justifyContent: 'center' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '3%',
                  width: '50%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '3%',
                    width: '100%',
                  }}
                >
                  <Checkbox style={{ marginRight: '10%' }} />

                  <Description>Mês</Description>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Checkbox style={{ marginRight: '10%' }} />

                  <Description>Anual</Description>
                </div>
              </div>
            </div>

            <TitleInput>Nome completo</TitleInput>
            <Input type="text" placeholder="Ex. Felipe Silva" />

            <TitleInput>CPF</TitleInput>
            <Input type="text" placeholder="000.000.000-00" />
          </div>
        )}

        {formPaymethod === 4 && (
          <div style={{ display: 'grid', justifyContent: 'center' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '3%',
                  width: '50%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '3%',
                    width: '100%',
                  }}
                >
                  <Checkbox style={{ marginRight: '10%' }} />

                  <Description>Mês</Description>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Checkbox style={{ marginRight: '10%' }} />

                  <Description>Anual</Description>
                </div>
              </div>
            </div>

            <TitleInput>Nome completo</TitleInput>
            <Input type="text" placeholder="Ex. Felipe Silva" />

            <TitleInput>CPF</TitleInput>
            <Input type="text" placeholder="000.000.000-00" />
          </div>
        )}

        <ContainerPrivacity>
          <Checkbox />

          <Description>
            Aceito os{' '}
            <strong style={{ color: '#FD3373' }}>
              Termos de Serviço e Política de Privacidade.
            </strong>
          </Description>
        </ContainerPrivacity>

        <ContainerButton>
          {formPaymethod === 1 && <Button>Finalizar</Button>}
          {formPaymethod === 2 && <Button>Finalizar</Button>}
          {formPaymethod === 3 && <Button>Avançar</Button>}
          {formPaymethod === 4 && <Button>Avançar</Button>}
        </ContainerButton>
      </ContainerInput>
    </div>
  );
};

export default index;
