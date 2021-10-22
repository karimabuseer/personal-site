import React, { Component } from "react";
import axios from "axios";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],

    };
  }

  componentDidMount() { 
    this.refreshList();
  }

  refreshList = () => { 
    axios.get("/api/projects")
    .then((res) => this.setState( { projectList: res.data }))
    .catch((err) => console.log(err))
  };

  renderItems = () => {

    return this.state.projectList.map((item) => (
      <li
        key={item.id}
      >
        <span
          title={item.description}
        >
          {item.title}
        </span>
      </li>
    ));
  };

  render() {
    return (
      <Router>
        <div className='Main-pane'>
          <nav >
            <ul className='Nav-bar'>
              <li className='Nav-items'>
                <Link to="/">Home</Link>
              </li>
              <li className='Nav-items'>
                <Link to="/about">About</Link>
              </li>
              <li className='Nav-items'>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects state={this.state}/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

const introText = `Former tech Operations and Business Development Manager, turned software engineer. 
A lifelong interest in technology has led me to pivot into software engineering. 
I'm deeply fascinated by how technology can be utilised to make life easier, and have moved away from tech strategy to have a more tangible impact within the industry. 
I'm looking for a role which leverages the best modern industry practices. 
I'm excited by innovative teams with a strong culture, that focus on data-driven decisions, and that support their team member's skill-set development.`

function Projects(props) {
  console.log('we are in projects', props.state)
  return (
    <main >
      <h1 >Project List</h1>
      <div >
        <div >
          <div >
            <ul>
              {renderItems(props.state.projectList)}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

function Home() {
  return (
    <div className="content-pane">
      <h2>Home</h2>
      <span> {introText}</span>
    </div>
  );
}

function renderItems (projectList) {
  return projectList.map((item) => (
    <li
      key={item.id}
    >
      <span>
        {item.title}
        {"\n"}
        {item.short_description}
      </span>
    </li>
  ));
};

function About() {
  return <h2>About</h2>;
}
