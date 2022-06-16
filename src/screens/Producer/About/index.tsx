import React, { useState } from 'react'
import Header from '../../../components/Header';
import BackgroundProducer from '../../../assets/svgs/Background-Producer.svg';
import ProfileImage from '../../../assets/svgs/Profile-Image.svg';
import { AiOutlineUser } from 'react-icons/ai';
import { MdQueryStats, MdOndemandVideo, MdAttachMoney } from 'react-icons/md';
import Curso1 from '../../../assets/svgs/Curso-1.svg';
import Curso2 from '../../../assets/svgs/Curso-2.svg';
import { BsArrowRight } from 'react-icons/bs';

import { Image, ContainerUser, BoxUser, Picture, Name, Description, Links, Link, ContainerButtons, ButtonUpload, ButtonPost, ContainerInfo, ContainerAbout, TitleAbout, Border, DescriptionAbout, ContainerCursos, TitleCursos, ContainerBoxs, BoxCurso, TitleBoxCurso, DateCurso, ImgCurso  } from './style';

const index = () => {

  const [ button, setButton ] = useState(1);

  return (
    <div>

      <Header type="creator" />

      <Image src={BackgroundProducer} />

      <div style={{ display: 'flex', justifyContent: 'center'}} >

        <ContainerUser>
          <BoxUser>
            <div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }} >
              <Picture src={ProfileImage} />
            </div>
            <Name>Maria</Name>
            <Description>Olá, eu sou Maria!</Description>

            <Links>

              <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '10%', color: button == 1 ? "#FF5C00" : "#262626", cursor: "pointer" }} onClick={() => setButton(1)} >
                <AiOutlineUser size={32} />
                <Link>Sobre Mim</Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '10%', color: button == 2 ? "#FF5C00" : "#262626", cursor: "pointer" }} onClick={() => setButton(2)} >
                <MdQueryStats size={32} />
                <Link>Estatísticas</Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', width: '200px', marginTop: '10%', color: button == 3 ? "#FF5C00" : "#262626", cursor: "pointer" }} onClick={() => setButton(3)} >
                <MdOndemandVideo size={32} />
                <Link>Meus Cursos</Link>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '10%', color: button == 4 ? "#FF5C00" : "#262626", cursor: "pointer"}} onClick={() => setButton(4)} >
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

        <ContainerInfo>

          <ContainerAbout>

            <TitleAbout>Sobre</TitleAbout>

            <Border />

            <DescriptionAbout>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem in in quam diam sed commodo. Neque erat cum tellus commodo. Neque, tellus in lectus eu gravida purus neque scelerisque aliquet. Tempor nullam sed aliquet mi tristique leo tellus lectus sem. Sed adipiscing eu tortor, eu ut ut elit. Nisi lectus malesuada tellus in. Facilisis posuere in pretium arcu sed sed arcu. Vel eu amet pharetra nunc. Ornare purus quisque ut morbi ultrices. Egestas odio felis, scelerisque at vulputate volutpat leo. In nisl nunc faucibus adipiscing. Tristique vestibulum pharetra, enim consectetur. Aliquam, ut posuere montes, pellentesque semper eget habitasse mi. 
            </DescriptionAbout>

          </ContainerAbout>

          <ContainerCursos>

            <TitleCursos>Aulas Disponíveis</TitleCursos>

            <Border />

            <ContainerBoxs>

                <BoxCurso>
                  <div>
                    <ImgCurso src={Curso1} />
                    <TitleBoxCurso>Figma - Introdução</TitleBoxCurso>
                    <DateCurso>Postado em 21/02 às 21:00</DateCurso>
                  </div>
                </BoxCurso>

                <BoxCurso>
                  <div>
                    <ImgCurso src={Curso2} />
                    <TitleBoxCurso>HTML5 para iniciantes</TitleBoxCurso>
                    <DateCurso>Acessado em 10/02 às 21:00</DateCurso>
                  </div>
                </BoxCurso>

                <BoxCurso>
                  <div>
                    <ImgCurso src={Curso1} />
                    <TitleBoxCurso>Figma - Formas</TitleBoxCurso>
                    <DateCurso>Acessado em 12/02 às 21:00</DateCurso>
                  </div>
                </BoxCurso>

                <BsArrowRight size={32} />

            </ContainerBoxs>

          </ContainerCursos>

        </ContainerInfo>

      </div>

    </div>
  )
}

export default index;