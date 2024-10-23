import { Link } from "react-router-dom";
import { SearchInput, Top } from "./Style";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";


const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);  

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);  
  };

  return(
  <Top>
    {/* a logo tem um link que leva a home do site */}
    <Link to="/" className="logo">
        <img src="/logo/ibmecLogo.png" alt="Logo"/> 
      </Link>
    <Link to="/fotos">Fotos</Link>
    <Link to="/atletas">Atletas</Link>
    <Link to="/cursos">Cursos</Link>
    <Link to="/projetos">Projetos</Link>
    <Link to="/sobreNos">Sobre Nós</Link>
    
    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }

    <CiSearch onClick={toggleSearch} style={{ cursor: 'pointer', color: 'white', size: '50px' }}>Lupa</CiSearch>
      
      {searchOpen && (
        <div className="search-container">
          <SearchInput type="text" placeholder="Buscar..." />
        </div>
    )}
    
  </Top>
  )
}

export default Header;