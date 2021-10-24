// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Create function to Load all event listeners
function loadEventListeners() {
  // Add task Event
  form.addEventListener('submit',addTask);
  /*
    The addEventListener() method is an inbuilt function of JavaScript. We can add multiple event handlers to a particular element without overwriting the existing event handlers.

    Syntax
  element.addEventListener(event, function, useCapture);  
  Although it has three parameters, the parameters event and function are widely used. The third parameter is optional to define. The values of this function are defined as follows.

  Parameter Values
  event: It is a required parameter. It can be defined as a string that specifies the event's name.

  function: It is also a required parameter. It is a JavaScript function which responds to the event occur.

  useCapture: It is an optional parameter. It is a Boolean type value that specifies whether the event is executed in the bubbling or capturing phase. Its possible values are true and false. When it is set to true, the event handler executes in the capturing phase. When it is set to false, the handler executes in the bubbling phase. Its default value is false.

  */
}

// Add Task
function addTask(e){
  // e is an event object
  if(taskInput.value === ''){
    alert('Add a task');
  }
    // Create li element
    const li = documnet.createElement('li');
    //Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content'; // In materalize if you want something to the right side of the page you must make use of secondary-content
    
    // Add the icon html
    link.innerHTML = '<i class = "fa fa-remove"></li>';

    // Append the link to the li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
console.log(li)
  e.preventDefault();
}