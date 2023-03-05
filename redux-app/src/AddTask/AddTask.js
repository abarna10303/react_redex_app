import React from "react";
import Header from "../Header/Header";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../Slice/Slice";
const AddTask = () => {
  let states = useSelector(({ sample }) => sample);
  let dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPrority, setTaskPrority] = useState(false);
  const [taskCompletion, setTaskCompletion] = useState(false);
  const handlingSubmit = (e) => {
    e.preventDefault();
    // console.log(states);
    var task1 = [
      ...states.tasks,
      { taskName, taskDescription, taskPrority, taskCompletion },
    ];
    dispatch(addTask(task1));
    // console.log(states.tasks);
  };
  return (
    <section className="form-container">
      <Header />
      <form onSubmit={(e) => handlingSubmit(e)} className='form'>
        <h1>Add Task</h1>
        <div>
          <label className="lbl">Task Name</label>
          <input className="txt" type={"text"} onChange={(e) => setTaskName(e.target.value)} />
        </div>
        <div>
          <label className="lbl">Task Description</label>
          <input className="txt"
            type={"text"}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="lbl">Task Prority</label>
          <input className="txt"
            type={"checkbox"}
            onChange={(e) => setTaskPrority(e.target.checked)}
          />
        </div>
        <div>
          <label className="lbl">Task Completion</label>
          <input className="txt"
            type={"checkbox"}
            onChange={(e) => setTaskCompletion(e.target.checked)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default AddTask;
