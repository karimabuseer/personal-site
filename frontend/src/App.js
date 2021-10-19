import React, { Component } from "react";
import axios from "axios";
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
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <about />
            </Route>
            <Route path="/projects">
              <Projects state={this.state}/>
            </Route>
            <Route path="/">
              <home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  Home() {
      return (
        <div>
          <h2>Home</h2>
          <text>Introductory text.</text>
        </div>
      );
    }
    
    About() {
      return <h2>About</h2>;
    }
}

export default App;

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

function renderItems (projectList) {
  return projectList.map((item) => (
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

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/projects">Projects</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/projects">
//             <Projects />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//       <text>Introductory text.</text>
//     </div>
//   );
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Projects() {
//   return (
//           <main >
//             <h1 >Project List</h1>
//             <div >
//               <div >
//                 <div >
//                   <ul>
//                     {renderItems()}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </main>
//         );

// function renderItems () {

//   return this.state.projectList.map((item) => (
//     <li
//       key={item.id}
//     >
//       <span
//         title={item.description}
//       >
//         {item.title}
//       </span>
//     </li>
//   ));
// };
// }