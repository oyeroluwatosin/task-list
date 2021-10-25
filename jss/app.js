// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

/* 
Event Listener is a procedure in Javascript that waits for an event to occur
Function to Load all event Listener
*/
loadEventListeners();

// Function creation for LoadEventListeners
function loadEventListeners(){
  // Add task form/event
  form.addEventListener('submit',addTask);
}

// Add Task function
function addTask(e) {
  if(taskInput.value === '')
  alert('Add a task');

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text mode abd append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class ="fa fa-trash"></i>';
  //Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
  //console.log(li);

  e.preventDefault(); // This prevent the button default which is submitting to happen
}