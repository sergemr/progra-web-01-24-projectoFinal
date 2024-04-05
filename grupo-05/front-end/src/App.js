import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Usuarios from './components/Usuarios';

function App() {
  return (
    <div className="App">
     <Router> {/*Es importante notar que Router envuelve los routes*/}
      <Switch> {/*El switch nos permite navegar entre las diferentes rutas dentro del ambiente de Router*/}
        <Route path="/Usuarios">  {/* Route solo nos indica la ruta a la que iremos y se vera asi: Ejemplo, ulatina.com/Usuarios*/}
           <Usuarios />
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
