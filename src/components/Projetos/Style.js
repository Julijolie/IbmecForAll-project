import styled from "styled-components";

const Card = styled.article`
  width: 15rem;
  background-color: #D0D7E0;
  padding: .5em;
  position: relative;
  
  div.nome{
    background-color: #021859;
    color: #F2F2F2;
    text-align: center;
    font-size: larger;
    font-weight: bold;
    text-transform: uppercase;
  }

  figure {
    margin: .5rem 0 0 0;
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 15rem;
  }

`;

export {Card};