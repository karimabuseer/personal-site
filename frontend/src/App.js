import React, { Component } from "react";
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
    };
  }

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
      <main >
        <h1 >Project List</h1>
        <div >
          <div >
            <div >
              <ul>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;