import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	#root {
		margin: 0 auto;
    	width: 100%;
		height: 100%;
	}
	button {
		cursor: pointer;
	}

	body{
		background: #fdfdfd;
		font-family: "Montserrat"
	}

	h1, h2, h3, h4, span, b {
		font-family: "Montserrat"
	}

	ul{
		list-style: none;
	}

	/*Iframe bugando página ( congelando tela ), encontrar arquivo que está criando esse iframe*/

	iframe {
		display: none;
	}

	@media (max-width: 1080px){
		html{
			font-size: 90.75%;
		}
	}

@media (max-width: 720px){
  html{
    font-size: 85.5%;
  	}
	}

@media (max-width: 650px){
  html{
    font-size: 65.5%;
  }
}
`;

export default GlobalStyle;
