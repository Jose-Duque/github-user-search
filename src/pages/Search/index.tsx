import React, { useEffect, useState } from 'react';
import './styles.css';
import makeRequest from '../../core/utils/request';
import { User } from '../../core/types/User';
import InfoLoader from './components/Loaders';


const Search = () => {
  const [userResponse, setUserResponce] = useState<User>();
  const [userUrl, setUserUrl] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  const handleChamge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserUrl(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  useEffect(() => {
    setIsLoader(true);
    makeRequest({url: `${userUrl}`})
    .then(response => setUserResponce(response.data))
    .finally(() => {
      setIsLoader(false);
    })
  }, [userUrl])

  return (
    <>
      <div className="search-container">
        <div className="search-content-container">
          <h1>
            Encontre um perfil Github
          </h1>
          <form onSubmit={handleSubmit} className="search-form">
            <input
              type="text"
              placeholder="Usuário Github"
              onChange={handleChamge}
              value={userUrl}
            />
            <div className="search-btn-form">
              <button >Encontrar</button>
            </div>
          </form>
        </div>
         
          {isLoader ? <InfoLoader/> : (
            <>
              {userResponse && 
                <div className="search-perfil">
                <div className="search-img">
                  <img src={userResponse?.avatar_url} alt="avatar" className="user-img"/>
                  <div className="search-btn">
                    
                      <a href={userResponse?.html_url} target="_blank" rel="external">Ver perfil</a>
                    
                  </div>     
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
                      <div>Membro desde: {userResponse.created_at}</div>
                    </div>
                  </div>
                </div>

              }          
            </>
          )}
      </div>
    </>
  );
}

export default Search;
        
          
         
      
         