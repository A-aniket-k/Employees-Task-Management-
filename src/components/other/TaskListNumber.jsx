// import React from 'react'

// const TaskListNumber = ({data}) => {
//   return (
//     <div className='flex mt-10 justify-between gap-5 screen'>
//         <div className='bg-red-400 py-6 px-9 rounded-xl  w-[45%] ' >
//             <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
//             <h3 className='text-xl font-medium'>New Task</h3>
//         </div>
//         <div className='bg-green-400 py-6 px-9 rounded-xl  w-[45%] ' >
//             <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
//             <h3 className='text-xl font-medium'>Completed Task</h3>
//         </div>
//         <div className='bg-blue-400 py-6 px-9 rounded-xl  w-[45%] ' >
//             <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
//             <h3 className='text-xl font-medium'>Accepted Task</h3>
//         </div>
//         <div className='bg-yellow-400 py-6 px-9 rounded-xl  w-[45%] ' >
//             <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
//             <h3 className='text-xl font-medium'>Failed Task</h3>
//         </div>

      
//     </div>
//   )
// }

// export default TaskListNumber

import React from "react";

const TaskListNumber = ({ data }) => {
  const taskTypes = [
    { color: "yellow-400", count: data.taskCounts.newTask, label: "New Task" },
    { color: "blue-400", count: data.taskCounts.active, label: "Accepted Task" },
    { color: "green-400", count: data.taskCounts.completed, label: "Completed Task" },
    { color: "red-400", count: data.taskCounts.failed, label: "Failed Task" },
  ];

  return (
    <div className="grid  grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      {taskTypes.map((task, index) => (
        <div
          key={index}
          className={`bg-${task.color} py-6 px-4 sm:px-6 md:px-9 rounded-xl text-center`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            {task.count}
          </h2>
          <h3 className="text-lg sm:text-xl font-medium">{task.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumber;


// import React from "react";

// const TaskListNumber = ({data}) => {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
//       {["red-400", "green-400", "blue-400", "yellow-400"].map((color, index) => (
//         <div
//           key={index}
//           className={`bg-${color} py-6 px-4 md:px-9 rounded-xl`}
//         >
//           <h2 className="text-xl sm:text-3xl font-semibold">{data.taskCounts.newTask}</h2>
//           <h3 className="text-lg sm:text-xl font-medium">New Task</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TaskListNumber;
