import React, { Component } from "react";

const todoItems = [
  {
    id: 1,
    title: "Acebook",
    description: "Facebook Clone",
  },
  {
    id: 2,
    title: "Chronicle",
    description: "Read Algebra and History textbook for the upcoming test",
  },
  {
    id: 3,
    title: "Notes App",
    description: "Go to library to return Sammy's books",
  },
  {
    id: 4,
    title: "MakersBNB",
    description: "Write article on how to use Django with React",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoItems,
    };
  }

  renderItems = () => {
    const newItems = this.state.todoList;

    return newItems.map((item) => (
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