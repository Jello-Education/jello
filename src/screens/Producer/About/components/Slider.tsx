import React from 'react';
import { ContainerBoxs, BoxCurso, TitleBoxCurso, DateCurso, ImgCurso } from "../style";
import Curso1 from '../../../../assets/svgs/Curso-1.svg';
import Curso2 from '../../../../assets/svgs/Curso-2.svg';

interface props{
    width: number;
}

const Slider = ({ width }: props) => {


  return (
    <ContainerBoxs style={{ width: width / 2 }}>

        <BoxCurso>
            <div>
                <ImgCurso src={Curso1} />
                    <div style={{padding: 10}}>
                    <TitleBoxCurso>Figma - Introdução</TitleBoxCurso>
                    <DateCurso>Postado em 21/02 às 21:00</DateCurso>
                </div>
            </div>
        </BoxCurso>

        <BoxCurso>
            <div>
                <ImgCurso src={Curso1} />
                    <div style={{padding: 10}}>
                    <TitleBoxCurso>Figma - Introdução</TitleBoxCurso>
                    <DateCurso>Postado em 21/02 às 21:00</DateCurso>
                </div>
            </div>
        </BoxCurso>

        <BoxCurso>
            <div>
                <ImgCurso src={Curso1} />
                    <div style={{padding: 10}}>
                    <TitleBoxCurso>Figma - Introdução</TitleBoxCurso>
                    <DateCurso>Postado em 21/02 às 21:00</DateCurso>
                </div>
            </div>
        </BoxCurso>

                    
    </ContainerBoxs>
  )
}

export default Slider