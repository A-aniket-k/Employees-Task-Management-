// localStorage.clear();
const employees = [
  {
    id: 1,
    "firstName": "Arjun",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare Report",
        taskDescription: "Compile the monthly sales report.",
        taskDate: "2025-01-15",
        category: "Reports",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Participate in the weekly team sync-up.",
        taskDate: "2025-01-16",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Participate in the weekly team sync-up.",
        taskDate: "2025-01-16",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client Feedback",
        taskDescription: "Review and respond to client feedback.",
        taskDate: "2025-01-17",
        category: "Client Work",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update Inventory",
        taskDescription: "Ensure the inventory list is up-to-date.",
        taskDate: "2025-01-15",
        category: "Operations",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Inventory",
        taskDescription: "Ensure the inventory list is up-to-date.",
        taskDate: "2025-01-15",
        category: "Operations",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Onboarding",
        taskDescription: "Assist with the onboarding of new employees.",
        taskDate: "2025-01-16",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Kiran",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "System Maintenance",
        taskDescription: "Run routine system checks.",
        taskDate: "2025-01-15",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve reported issues in the software.",
        taskDate: "2025-01-14",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      
      {
        taskTitle: "Write Documentation",
        taskDescription: "Update the project documentation.",
        taskDate: "2025-01-18",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Write Documentation",
        taskDescription: "Update the project documentation.",
        taskDate: "2025-01-18",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for the quarterly review.",
        taskDate: "2025-01-15",
        category: "Reports",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for the quarterly review.",
        taskDate: "2025-01-30",
        category: "Reports",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Training",
        taskDescription: "Conduct training for the marketing team.",
        taskDate: "2025-01-16",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Social Media Strategy",
        taskDescription: "Plan a new social media campaign.",
        taskDate: "2025-01-17",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Ravi",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Market Research",
        taskDescription: "Analyze competitor strategies.",
        taskDate: "2025-01-15",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Customer Survey",
        taskDescription: "Collect feedback via surveys.",
        taskDate: "2025-01-16",
        category: "Customer Relations",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Market Research",
        taskDescription: "Analyze competitor strategies.",
        taskDate: "2025-01-15",
        category: "Research",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Customer Survey",
        taskDescription: "Collect feedback via surveys.",
        taskDate: "2025-01-16",
        category: "Customer Relations",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Budget Planning",
        taskDescription: "Draft the department's annual budget.",
        taskDate: "2025-01-17",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
  },
];

  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
//   console.log(employees);
//   console.log(admin);
  
export const setLocalStorage = () => {
    
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  // console.log(employees, admin);
  return { employees, admin };
  // const data = localStorage.getItem("employees")
  // console.log(JSON.parse(data))
     
}


// Highlighted: New utility functions added
/**
 * Update employee data in localStorage
 * @param {function} updateFn - A function that takes current data and returns updated data.
 */
export const updateLocalStorage = (updateFn) => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const updatedEmployees = updateFn(employees);
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
};