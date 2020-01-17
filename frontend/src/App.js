import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

//Componente: um bloco isolado de HTML CSS JS, o qual não interfere no restante da aplicação..
//Estado: Informações mantidas pelo componentes (Lembrar: imutabilidade)
//Propriedade: Seria os atributos... informações que um componente pai passa para o componente filho

// <> fragmento

function App() { // componente é uma função que retorna um html css javascript
  const [dev, setDevs] = useState([]);


  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data){

    
    const response = await api.post('/devs', data)

    setDevs([...dev, response.data]);

  }


    return(
      <div id="app">
        <aside>
        <strong> Cadastrar </strong>
          <DevForm onSubmit={handleAddDev} />
        </aside>
        <main>
          <ul>
            {dev.map(dev => (
              <DevItem key={dev._id} dev={dev} />
            ))}
          </ul>

        </main>
      </div>
    )
}

export default App;
