import React, { useState, useEffect } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState(data.tasks);
  const [originalTasks, setOriginalTasks] = useState(data.tasks);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setTasks(userData.data.tasks);
      setOriginalTasks(userData.data.tasks);
    }
  }, []);

  const updateTaskStatus = (task, status) => {
    const updatedTasks = tasks.map(t => {
      if (t === task) {
        if (status === 'completed') {
          t.active = false;
          t.completed = true;
        } else if (status === 'failed') {
          t.active = false;
          t.failed = true;
        } else if (status === 'active') {
          t.newTask = false;
          t.active = true;
        }
      }
      return t;
    });

    setTasks(updatedTasks);

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      userData.data.tasks = updatedTasks;

      // Update task counts
      if (status === 'active') {
        userData.data.taskCounts.newTask -= 1;
        userData.data.taskCounts.active += 1;
      }

      localStorage.setItem('loggedInUser', JSON.stringify(userData));
    }
  };

  const resetTaskStatus = (task, status) => {
    const updatedTasks = tasks.map(t => {
      if (t === task) {
        if (status === 'newTask') {
          t.newTask = true;
          t.active = false;
          t.completed = false;
          t.failed = false;
        } else if (status === 'active') {
          t.newTask = false;
          t.active = true;
          t.completed = false;
          t.failed = false;
        }
      }
      return t;
    });

    setTasks(updatedTasks);

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      userData.data.tasks = updatedTasks;

      // Update task counts
      if (status === 'newTask') {
        userData.data.taskCounts.newTask += 1;
        userData.data.taskCounts.active -= 1;
      } else if (status === 'active') {
        userData.data.taskCounts.active += 1;
        userData.data.taskCounts.completed -= 1;
      }

      localStorage.setItem('loggedInUser', JSON.stringify(userData));
    }
  };

  const sortedTasks = tasks.sort((a, b) => {
    if (a.newTask) return -1;
    if (b.newTask) return 1;
    if (a.active) return -1;
    if (b.active) return 1;
    if (a.completed) return -1;
    if (b.completed) return 1;
    if (a.failed) return -1;
    if (b.failed) return 1;
    return 0;
  });

  return (
    <div
      id="tasklist"
      className="flex flex-col md:flex-row items-center md:items-start justify-start gap-5 overflow-auto h-[55%] w-full py-5 mt-10"
    >
      {sortedTasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} updateTaskStatus={updateTaskStatus} />;
        }
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} updateTaskStatus={updateTaskStatus} resetTaskStatus={resetTaskStatus} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} resetTaskStatus={resetTaskStatus} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} resetTaskStatus={resetTaskStatus} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;