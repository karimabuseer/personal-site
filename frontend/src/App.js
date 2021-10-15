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
    completed: false,
  },
  {
    id: 3,
    title: "Notes App",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "MakersBNB",
    description: "Write article on how to use Django with React",
    completed: false,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoItems,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  };

  renderItems = () => {
    const newItems = this.state.todoList.filter(
      (item) => item
    );

    return newItems.map((item) => (
      <li
        key={item.id}
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
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