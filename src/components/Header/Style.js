import styled from "styled-components";

// Exporta o componente Top
export const Top = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em 2em;
  background-color: #021859;
  position: relative; //garante que a barra de pesquisa container fique abaixo do menu

  .logo img {
    height: 80%;
    max-height: 40px;
    width: auto;
    display: block;
    object-fit: contain;
  }

  .nav-links {
    display: flex;
    gap: 1em;
  }

  .search-icon {
    cursor: pointer;
    color: white;
  }

  .search-container{
    position: absolute; /* Permite que a busca fique fora do fluxo normal */
    top: 100%; /* Alinha a busca logo abaixo do cabeçalho */
    left: 0; /* Centraliza horizontalmente */
    width: 100%; /* Garante que o container de busca ocupe a largura total do menu */
    display: flex; /* Flex para o alinhamento do input */
    justify-content: center; /* Centraliza o conteúdo dentro do container */
    padding: 1em 0; /* Espaçamento para a barra */
    background-color: #021859; /* Dá uma cor de fundo para destacar a barra de pesquisa */
    z-index: 1; /* Garante que fique acima de outros elementos */
  }

  a {
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    color: #F2F2F2;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
      background-color: var(--destaque);
      color: var(--secundaria);
    }
  }

  /* responsividade */
  @media (max-width: 768px) {
    flex-direction: column;  /* Muda para coluna em telas pequenas */
    .nav-links {
      flex-direction: column;  /* Links em coluna */
      align-items: center;
    }
    .logo {
      margin-bottom: 10px;
    }
    .search-icon {
      margin-top: 10px;
    }
  }
`;

export const SearchInput = styled.input`
  width: 80%; /* O input ocupará 70% da largura do container */
  padding: 0.5em 1em;
  border: 2px solid #ccc; /* Define uma borda de 2px de espessura e cor cinza */
  border-radius: 50px; /* Borda arredondada */
  background-color: #2A2D40; /*cor da barra de pesquisa */
  color: #fff; /* Cor do texto = branco */
  font-size: 1.2em; /* Tamanho da fonte */
  outline: none; /* Remove o contorno padrão ao focar no input */

  &::placeholder {
    color: #bbb; /* Cor do placeholder */
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo (search input) horizontalmente */
  padding: 1em 0; /* Espaçamento em torno da barra de pesquisa */
  background-color: #021859; /* Fundo branco para destacar a barra de pesquisa */
  z-index: 1; /* Garante que o input fique acima de outros elementos */
`;
