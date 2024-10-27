import Base from "./Base";
import React from 'react';
import ProjetoCard from "../components/Projetos/ProjetoCard";
import ListContainer from "../components/ListContainer/ListContainer";

// Categorias de linguagens
const programmingLanguages = {
  "Back-end": ['Python', 'Java', 'C', 'C++', 'C#', 'PHP', 'Ruby', 'Golang'],
  "Banco de Dados": ['SQL'],
  "Front-end": ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  "Análise de Dados": ['Python', 'R', 'MatLab']
};

const Filters = () => {
  return (
    <div style={{
      width: '200px', 
      position: 'sticky', // Fixa o filtro ao rolar a página
      top: '80px', // Ajusta a posição para que fique próximo ao menu
      padding: '10px', 
      backgroundColor: '#f5f5f5',
      height: 'calc(100vh - 80px)',
      overflowY: 'auto'
    }}>
      <h3>Filtros</h3>
      {Object.keys(programmingLanguages).map((category) => (
        <div key={category} style={{ marginBottom: '20px' }}>
          <h4>{category}</h4>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {programmingLanguages[category].sort().map((language, index) => (
              <label key={index} style={{ marginBottom: '10px' }}>
                <input type="checkbox" value={language} />
                {language}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Projetos = () => {
  return (
    <Base>
      <h1 style={{ 
        textAlign: 'center', 
        marginTop: '20px' 
      }}>
        Projetos
      </h1>
      
      <div style={{
        display: 'flex', // Usa flexbox para alinhar lado a lado
        alignItems: 'flex-start', // Alinha o topo dos itens
        padding: '20px'
      }}>
        <Filters /> {/* Filtros fixados à esquerda */}
        
        <ListContainer style={{ marginLeft: '20px', flex: 1 }}>
          {/* Renderização dos cards de projetos */}
          <ProjetoCard nome="Projeto 1" src="image_url_1" />
          <ProjetoCard nome="Projeto 2" src="image_url_2" />
          {/* Mais cards... */}
        </ListContainer>
      </div>
    </Base>
  );
};

export default Projetos;
