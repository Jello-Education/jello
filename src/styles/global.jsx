import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: "Montserrat"
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

.css-1s2u09g-control {
	border-color: #FD3373 !important;
}

.css-14el2xx-placeholder {
	color: #bdbdbd !important;
}


.css-1pahdxg-control {
	box-shadow: 0 0 0 1px #FD3373 !important;
	border-color: #FD3373 !important;
}



`;

export default GlobalStyle;
