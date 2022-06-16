import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-start;
width: 100%;
height: 100%;
border-top: 2px solid #FD3373;
padding-bottom: 50px;
flex-wrap: wrap;

@media only screen and (max-width:991px) {
    display: grid;
}

`;

export const Box = styled.div`
margin-top: 2%;

@media only screen and (max-width:991px) {
    margin-top: 15%;
}

`;

export const Title = styled.h1`
font-size: 28px;
color: #282828;
`;

export const Link = styled.p`
color: #FD3373;
margin-top: 5%;
font-size: 16px;
font-weight: 600;
`;

export const ContainerIcons = styled.div`
display: flex;
margin-top: 3%;
justify-content: space-around;
`;

export const ContainerLinks = styled.div`
display: grid;
`;

export const BoxIcon = styled.div`
width: 30px;
height: 30px;
background-color: #FD3373;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
border-radius: 50%;
`;

export const Copy = styled.p`
font-size: 16px;
color: #282828;
text-align: center;
padding-bottom: 50px;
`;