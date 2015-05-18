(function(window) { //IIFE: Immediately Invoked Function Expression
  'use strict';
  // Your starting point. Enjoy the ride!
  // CONTROLLER: I can add a task to my list...t
  //1. What event should I be listening for? keydown, keyup, keypress
  //2. What element makes sense to listen for that event? input.new-todo
  //3. What do I need to do when that event fires? See below TO ADD A NEW TASK

  // Add task code refactored during class demo and during Saturday group session.

  // Given an HTML element <input class ='new-todo'>
  var newTodoInput = document.querySelector('input.new-todo')
  var todoCountElement = document.querySelector('span.todo-count')
    // WHEN the user types a task
  newTodoInput.addEventListener('keyup', function addTodoController(event) {

    if (event.keyCode !== 13 || newTodoInput.value == "") return; // AND presses the "Enter" key
    // SAVE the thing to remember (task) to the list of things to remember (taskList)
    var task = newTodoInput.value; //,
    //todoCount = document.querySelector('span.todo-count');
    todos.addTaskToList(task, todos.taskList);
    // REMOVE the thing to remember from the "What needs tp be done?" box (input.new-todo)

		newTodoInput.value = "";

    todos.footerCount(todoCountElement);

    todoCountElement.text = todoCountElement;


    document.querySelector('ul.todo-list').innerHTML += ("<li><div><input class='toggle' type='checkbox'><label>" + task + "<button class='destroy'>")

    console.log(todos.taskList);
    console.log(todos.taskList.length);


    // THEN:

    // ADD a new task (ul.todo-list > li)to the list of tasks _in the display_ (ul.todo-list)

  });

  // CONTROLLER FOR: I can delete a task from my list...
  // 1. What event should I be listening for?  Click on the X
  // 2. What element makes sense to listen for that event? ('li')
  // 3. What do I need to do when that event fires?
  // Delete Task from Where it is saved
  // Needs to delete the field/li that the todo-list lives on
  // Update number of tasks in footer or deleting footer if number of tasks is 0
  //var deleteTask = document.querySelectorAll('ul.todo-list')
  var deleteTaskButtons = document.querySelectorAll('button.destroy')

  /*deleteTaskButtons.addEventListener('click', function(event) {

    todos.deleteTask(task, todos.taskList);

    document.querySelector('li.todo-list').innetHTML +=()
  });

  var editTask = document.querySelectorAll('li');*/

  //_.forEach(list, function(element){
  //element.addEventListener('click', function(event){
  //if (event.target.tagName === "BUTTON" && event.target.className === "destroy")
  //console.log('hello');
  //});
  //});

  _.forEach(deleteTaskButtons, function(element, index, deleteTaskButtons) {
    element.addEventListener('click', function() {
      console.log('goodbye');
    });
  });

  _.forEach(editTask, function(element, index, editTask) {
    element.addEventListener('dblclick', function() {
      console.log('edit me');
    });
  });

})(window);


// CONTROLLER FOR: I can edit a task on my list...
// 1. What event should I be listening for?
// 2. What element makes sense to listen for that event?
// 3. What do I need to do when that event fires?

// CONTROLLER FOR: I can complete a task on my list...
// 1. What event should I be listening for? (double click, keyup [Enter, tab, esc])
// 2. What element makes sense to listen for that event? ('ul.todo-list')
// 3. What do I need to do when that event fires?

// CONTROLLER FOR: I can view the list...
// 1. What event should I be listening for?
// 2. What element makes sense to listen for that event?
// 3. What do I need to do when that event fires?





/*document.head.parentElement.className = "js";

	var elements = document.querySelectorAll('ul');
	var nestedElements = document.querySelectorAll('li');


	_.forEach(elements, function(element, index, elements){
	  element.addEventListener('view', function(){
	    //console.log(elements, index, element)
	    elements[index].parentElement.classList.toggle('todo-list');
	  });
	});

	_.forEach(nestedElements, function(element, index, elements){
	    element.addEventListener('view', function(){
	        element.parentElement.classList.toggle('todo-list');
	    });
	});*/


/*elements[0].addEventListener('click', function(){
	elements[0].parentElement.classList.toggle('cbp-ntopen');
	});*/

/*for ( var index = 0; index < elements.length; index++ ){
	var element = elements[index]
	element.addEventListener('click', function(){
		console.log(elements, index, elements[index])
		elements[index].parentElement.classList.toggle('cbp-ntopen');
	});

	}
	console.log(index);*/
