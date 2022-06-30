import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { GrFormAdd } from 'react-icons/gr';
import { MdAttachMoney, MdOndemandVideo, MdQueryStats } from 'react-icons/md';

import { Slider } from '@material-ui/core';

import BackgroundProducer from '../../../assets/svgs/Background-Producer.svg';
import ProfileImage from '../../../assets/svgs/Profile-Image.svg';
import Header from '../../../components/Header';
import {
  Border,
  BorderPicture,
  BoxUser,
  ButtonAdd,
  ButtonPost,
  ButtonUpload,
  ContainerAbout,
  ContainerButtons,
  ContainerCursos,
  ContainerInfo,
  ContainerUser,
  Description,
  DescriptionAbout,
  Image,
  Link,
  Links,
  Name,
  Picture,
  TitleAbout,
  TitleCursos,
} from './style';

const index = () => {
  const [button, setButton] = useState(1);

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);

  return (
    <div>
      <Header type="creator" />

      <Image src={BackgroundProducer} />

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <ContainerUser>
          <BoxUser>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Picture src={ProfileImage} />
                <BorderPicture />
                <ButtonAdd>
                  <GrFormAdd />
                </ButtonAdd>
              </div>
              <Name>Maria</Name>
              <Description>Olá, eu sou Maria!</Description>

              <Links>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '10%',
                    color: button == 1 ? '#FF5C00' : '#262626',
                    cursor: 'pointer',
                  }}
                  onClick={() => setButton(1)}
                >
                  <AiOutlineUser size={32} />
                  <Link>Sobre Mim</Link>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '10%',
                    color: button == 2 ? '#FF5C00' : '#262626',
                    cursor: 'pointer',
                  }}
                  onClick={() => setButton(2)}
                >
                  <MdQueryStats size={32} />
                  <Link>Estatísticas</Link>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '200px',
                    marginTop: '10%',
                    color: button == 3 ? '#FF5C00' : '#262626',
                    cursor: 'pointer',
                  }}
                  onClick={() => setButton(3)}
                >
                  <MdOndemandVideo size={32} />
                  <Link>Meus Cursos</Link>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '10%',
                    color: button == 4 ? '#FF5C00' : '#262626',
                    cursor: 'pointer',
                  }}
                  onClick={() => setButton(4)}
                >
                  <MdAttachMoney size={32} />
                  <Link>Finaceiro</Link>
                </div>
              </Links>

              <ContainerButtons>
                <ButtonUpload>Upload de Aula</ButtonUpload>
                <ButtonPost>Postagem Blog</ButtonPost>
              </ContainerButtons>
            </div>
          </BoxUser>
        </ContainerUser>

        <ContainerInfo style={{ width: windowDimenion.winWidth / 2 }}>
          <ContainerAbout>
            <TitleAbout>Sobre</TitleAbout>

            <Border />

            <DescriptionAbout>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem in
              in quam diam sed commodo. Neque erat cum tellus commodo. Neque,
              tellus in lectus eu gravida purus neque scelerisque aliquet.
              Tempor nullam sed aliquet mi tristique leo tellus lectus sem. Sed
              adipiscing eu tortor, eu ut ut elit. Nisi lectus malesuada tellus
              in. Facilisis posuere in pretium arcu sed sed arcu. Vel eu amet
              pharetra nunc. Ornare purus quisque ut morbi ultrices. Egestas
              odio felis, scelerisque at vulputate volutpat leo. In nisl nunc
              faucibus adipiscing. Tristique vestibulum pharetra, enim
              consectetur. Aliquam, ut posuere montes, pellentesque semper eget
              habitasse mi.
            </DescriptionAbout>
          </ContainerAbout>

          <div style={{ marginTop: '3%' }}>
            <ContainerCursos>
              <TitleCursos>Aulas Disponíveis</TitleCursos>

              <Border />

              <Slider width={windowDimenion.winWidth} />
            </ContainerCursos>
          </div>
        </ContainerInfo>
      </div>
    </div>
  );
};

export default index;
