import styled from 'styled-components';


export const Image = styled.img`
width: 100%;
margin-top: -8%;
`;

export const ContainerUser = styled.div`
margin-right: 5%;
`;

export const BoxUser = styled.div`
width: 380px;
height: 650px;
border-radius: 50px;
box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.3);
background: #fff;
display: flex;
justify-content: center;
align-items: center;
margin-top: -20%;
`;

export const Picture = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
margin-top: 1%;
z-index: 1;
`;

export const Name = styled.h1`
font-size: 26px;
color: #262626;
text-align: center;
margin-top: 10%;
`;

export const Description = styled.p`
font-size: 18px;
color: #999999;
text-align: center;
`;

export const Links = styled.div`
display: grid;
justify-content: flex-start;
margin-top: 5%;
width: 100%;
`;

export const Link = styled.h2`
font-size: 22px;
margin-left: 5%;
width: 100%;
`;

export const ContainerButtons = styled.div`
display: grid;
justify-content: center;
margin-top: 10%;
`;

export const ButtonUpload = styled.button`
width: 250px;
height: 50px;
color: #ffffff;
background: #FF5C00;
border-radius: 30px;
border: none;
`;

export const ButtonPost = styled.button`
width: 250px;
height: 50px;
color: #ffffff;
background: #1D85FF;
border-radius: 30px;
border: none;
margin-top: 5%;
`;

export const ContainerInfo = styled.div`
margin-top: 2%;
display: grid;
justify-content: center;
padding-bottom: 50px;
`;

export const ContainerAbout = styled.div`
height: 100%;
padding: 20px;
background: none;
border: 2px solid #999999;
border-radius: 30px;
`;

export const TitleAbout = styled.h1`
color: #535353;
`;

export const Border = styled.div`
width: 100%;
height: 1px;
margin-top: 1%;
background: #999999;
`;

export const DescriptionAbout = styled.p`
color: #282828;
margin-top: 2%;
`;

export const ContainerCursos = styled.div`
height: 100%;
padding: 20px;
background: none;
border: 2px solid #999999;
border-radius: 30px;
`;

export const TitleCursos = styled.h1`
color: #535353;
`;

export const ContainerBoxs = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 20px;
overflow: hidden;
margin-top: 1%;
`;

export const BoxCurso = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 330px;
background: #fff;
margin-right: 2%;
box-shadow: 0px 0px 15px 15px rgba(0, 0, 0, 0.1);
border-radius: 20px;
`;

export const ImgCurso = styled.img`
width: 330px;
`;

export const TitleBoxCurso = styled.h1`
font-size: 18px;
text-align: center;
margin-top: 3%;
`;

export const DateCurso = styled.p`
text-align: center;
`;

export const BorderPicture = styled.div`
width: 158px;
height: 159px;
background: linear-gradient(to left, #FF5E92, #46FFC2);
border-radius: 50%;
position: absolute;
margin-top: -2px;
`;

export const ButtonAdd = styled.div`
width: 30px;
height: 30px;
background: #2DFCB7;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
position: absolute;
z-index: 2;
transform: translateY(460%);
font-size: 20px;
cursor: pointer;
`;