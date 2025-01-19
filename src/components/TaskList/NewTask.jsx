import React from 'react';

const NewTask = ({ data, updateTaskStatus }) => {
  const acceptTask = () => {
    updateTaskStatus(data, 'active');
  };

  return (
    <div className="bg-yellow-400 p-5 flex-shrink-0 md:h-full w-[300px] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
      <div className='flex justify-between mt-6 '>
        <button onClick={acceptTask} className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;