import React from 'react';
import './styles.css';

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-content-container">
        <h1>
          Encontre um perfil Github
        </h1>
        <form className="search-form">
          <input type="text" placeholder="Usuário Github"/>
          <div className="search-btn-form">
            <button type="submit">Encontrar</button>
          </div>
        </form>
      </div>
      <div className="search-perfil">
          <div className="search-img">
            <h3>imagem</h3>
          </div>
         
          <div className="search-data-user">
            <form action="" className="search-form-repository">
              <input type="text" placeholder="Repositórios públicos:"/>
              <input type="text" placeholder="Seguidores: "/>
              <input type="text" placeholder="Seguindo:"/>
            </form>
            <h3>Informações</h3>
            <form action="" className="search-form-user">
              <input type="text" placeholder="Empresa:"/><br/>
              <input type="text" placeholder="Website/Blog:"/><br/>
              <input type="text" placeholder="Localidade:"/><br/>
              <input type="text" placeholder="Membro desde:"/>
            </form>
          </div>
      </div>
    </div>
  );
}

export default Search;