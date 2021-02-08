import React, { useEffect, useState } from 'react';
import './styles.css';
import makeRequest from '../../core/utils/request';
import { User } from '../../core/types/User';


const Search = () => {

  const [userResponse, setUserResponce] = useState<User>();
  
  useEffect(() => {
    makeRequest({url: '/jose-duque'})
    .then(response => setUserResponce(response.data))
  }, [])

  return (
    <>
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
              <img src={userResponse?.avatar_url} alt="avatar" className="user-img"/>
            </div>
            <div className="search-data-user">
              <div className="search-form-repository">
                <div>Repositórios públicos: {userResponse?.public_repos}</div>
                <div>Seguidores: {userResponse?.followers}</div>
                <div>Seguindo: {userResponse?.following}</div>
              </div>
              <h3>Informações</h3>
              <div className="search-form-user">
                <div>Empresa: {userResponse?.name}</div><br/>
                <div>Website/Blog:{userResponse?.blog}</div><br/>
                <div>Localidade: {userResponse?.location}</div><br/>
                <div>Membro desde: </div>
              </div>
            </div>
          </div>
        
      
      </div>
    </>
  );
}

export default Search;
         