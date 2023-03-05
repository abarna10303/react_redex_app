import React, { useState } from "react";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { removedTask, updateTask } from "../Slice/Slice";
import "../Header/style.scss";
const Home = () => {
  let homestate = useSelector(({ sample }) => sample);
  let dispatch = useDispatch();
  let [prorityFilter, setProrityFilter] = useState(false);
  let [completionFilter, setCompletionFilter] = useState(false);
  var removeTask = (index) => {
    let task2 = [...homestate.tasks];
    task2.splice(index, 1);

    dispatch(removedTask(task2));
  };
  var displayTask = [];
  if (prorityFilter === true && completionFilter === true) {
    displayTask = homestate.tasks.filter((value, index) => {
      return value.taskPrority === true && value.taskCompletion === true;
    });
  } else if (prorityFilter === true && completionFilter === false) {
    displayTask = homestate.tasks.filter((value, index) => {
      return value.taskPrority === true;
    });
  } else if (prorityFilter === false && completionFilter === true) {
    displayTask = homestate.tasks.filter((value, index) => {
      return value.taskCompletion === true;
    });
  } else {
    displayTask = homestate.tasks;
  }

  return (
    <div className="addtask-container">
      <Header />
      <div className="container">
        <div className="title">
          <div>
          <label>Task Prority</label>
          <input
            type={"checkbox"}
            onChange={(e) => setProrityFilter(e.target.checked)}
          />
          </div>
          <div>
          <label>Task Completion</label>
          <input
            type={"checkbox"}
            onChange={(e) => setCompletionFilter(e.target.checked)}
          />
          </div>
        </div>
        <div className="row">
        {displayTask.map((value, index) => {
          return (
            <div key={index} className='col'>
              <p>Task Name : {value.taskName}</p>
              <p>Task Description : {value.taskDescription}</p>
              <p>
                Task Prority :{" "}
                <input
                  type={"checkbox"}
                  checked={value.taskPrority}
                  onChange={(e) =>
                    dispatch(
                      updateTask({
                        event: e.target.checked,
                        index,
                        key: "taskPrority",
                      })
                    )
                  }
                />
              </p>
              <p>
                Task Completion :{" "}
                <input
                  type={"checkbox"}
                  checked={value.taskCompletion}
                  onChange={(e) =>
                    dispatch(
                      updateTask({
                        event: e.target.checked,
                        index,
                        key: "taskCompletion",
                      })
                    )
                  }
                />
              </p>
              <button onClick={() => removeTask(index)}>Delete</button>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Home;
