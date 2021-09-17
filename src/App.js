import Header from './components/Header';
import Content from './components/Content';
import Project from './components/Project';
import Login from './components/Login';
import Register from './components/Register';
import
{
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";


function App()
{
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/:id" component={Project} />
        <Route path="/" component={Content} />
      </Switch>
    </Router>
  );
}

export default App;
