import "./App.css";
import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function App() {
  const [allTodo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title,
      description,
      isEditing: false,
    };
    setTodo([...allTodo, newTodoItem]);
    setTitle("");
    setDescription("");
  };

  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodo];
    reducedTodo.splice(index, 1);
    setTodo(reducedTodo);
  };

  const handleEdit = (index) => {
    let updatedTodo = [...allTodo];
    updatedTodo[index].isEditing = true;
    setTodo(updatedTodo);
    
    setTitle(updatedTodo[index].title);
    setDescription(updatedTodo[index].description);
  };

  const handleUpdate = (index) => {
    let updatedTodo = [...allTodo];
    updatedTodo[index].title = title;
    updatedTodo[index].description = description;
    updatedTodo[index].isEditing = false;
    setTodo(updatedTodo);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-input">
        <div className="todo-input-item">
          <label className="heading">Title</label>
          <input
            type="text"
            placeholder="What's your task"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="todo-input-item">
          <label className="heading">Description</label>
          <input
            type="text"
            placeholder="What's your task description"
            className="input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="todo-input-item">
          <button type="button" className="add_btn" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>

      <div className="todo_list">
        {allTodo.map((item, index) => (
          <div className="todo_list_item" key={index}>
            {item.isEditing ? (
              <>
                <input
                  type="text"
                  placeholder="Updated Title"
                  className="input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Updated Description"
                  className="input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <button
                  type="button"
                  className="primaryBtn"
                  onClick={() => handleUpdate(index)}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <div className="todo_list_items">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="todo_list_icons">
                  <MdDelete
                    className="icon"
                    title="Delete?"
                    onClick={() => handleDeleteTodo(index)}
                  />
                  <MdEdit
                    className="check-icon"
                    title="Edit?"
                    onClick={() => handleEdit(index)}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
