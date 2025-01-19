import React,{useContext,useState} from 'react'
import { AuthContext } from '../../context/Authenticate';
// Highlighted: Import the new utility function
import { updateLocalStorage } from '../../utils/localStorage'; // Correct import path


const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
      e.preventDefault()

      const newTask = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }
      // setNewTask(newTask)

      // const data = userData

      // data.forEach(function (elem) {
      //     if (assignTo == elem.firstName) {
      //         elem.tasks.push(newTask)
      //         elem.taskCounts.newTask = elem.taskCounts.newTask + 1
      //     }
      // })
      // setUserData(data)
      
      const updatedData = userData.map((employee) => {
        if (employee.firstName === assignTo) {
          employee.tasks.push(newTask);
          employee.taskCounts.newTask += 1;
        }
        return employee;
      });
  
      setUserData(updatedData);
      // console.log(data);

            // Update local storage
            // localStorage.setItem('loggedInUser', JSON.stringify({ data }));

                // Highlighted: Update localStorage using the new utility function
    updateLocalStorage((currentEmployees) =>
      currentEmployees.map((employee) => {
        if (employee.firstName === assignTo) {
          employee.tasks.push(newTask);
          employee.taskCounts.newTask += 1;
        }
        return employee;
      })
    );

     // Clear form fields
    setTaskTitle('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setTaskDescription('')

    console.log(updatedData);

  }

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
    <form onSubmit={(e) => {
      submitHandler(e)}}
      className="md:flex flex-wrap w-full items-start justify-center"
      action=""
    >
    <div className=" md:w-1/2">
      <div>
        <h3 ClassName=" text-sm text-gray-300 mb-0.5">Task Title</h3>
        <input
        value={taskTitle}
        onChange={(e) =>{ 
          setTaskTitle(e.target.value)
        }}
          className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
          type="text"
          placeholder="Make a UI design"
        />
      </div>
      <div>
        <h3 ClassName="text-sm text-gray-300 mb-0.5">Date</h3>
        <input
                value={taskDate}
                onChange={(e) =>{ 
                  setTaskDate(e.target.value)
                }}
          className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
          type="date"
        />
      </div>
      <div>
        <h3 ClassName="text-sm text-gray-300 mb-0.5">Assign To</h3>
        <input
                value={assignTo}
                onChange={(e) =>{ 
                  setAssignTo(e.target.value)
                }}
          className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
          type="text"
          placeholder="employee name"
        />
      </div>
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
        <input
                value={category}
                onChange={(e) =>{ 
                  setCategory(e.target.value)
                }}
          className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
          type="text"
          placeholder="design, dev, etc"
        />
      </div>
    </div>

    <div className="md:w-2/5 flex flex-col items-start">
      <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
      <textarea
              value={taskDescription}
              onChange={(e) =>{ 
                setTaskDescription(e.target.value)
              }}
        className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
        name=""
        id=""
      ></textarea>
      <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"> Create Task
      </button>
    </div>
    </form>
  </div>
  )
}

export default CreateTask
