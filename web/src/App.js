import React from 'react';

import './global.css';
import './App.css';

// Componente: Bloco isolado de HTML, CSS, e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (lembrar imutabilidade)

function App() {
  return (    
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div class="input-block">
            <label htmlFor="">Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

        </form>

      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
