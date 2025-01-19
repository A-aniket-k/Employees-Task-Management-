import React from 'react';

const AcceptTask = ({ data, updateTaskStatus, resetTaskStatus }) => {
  const markAsCompleted = () => {
    updateTaskStatus(data, 'completed');
  };

  const markAsFailed = () => {
    updateTaskStatus(data, 'failed');
  };

  const resetTask = () => {
    resetTaskStatus(data, 'newTask');
  };

  return (
    <div className={`p-5 flex-shrink-0 md:h-full w-[300px] rounded-xl ${data.completed ? 'bg-green-400' : data.failed ? 'bg-red-400' : 'bg-blue-400'}`}>
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
      <div className='flex justify-between mt-6 '>
        <button onClick={markAsCompleted} className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
        <button onClick={markAsFailed} className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
      </div>
      <button onClick={resetTask} className='bg-gray-500 text-white py-1 px-2 rounded mt-4'>Back</button>
    </div>
  );
};

export default AcceptTask;