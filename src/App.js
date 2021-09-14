import Header from './components/Header';
import Content from './components/Content';
import Project from './components/Project';
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
        <Route path="/:id" component={Project} />
        <Route path="/" component={Content} />
      </Switch>
    </Router>
  );
}

export default App;
