(function (window) { //IIFE: Immediately Invoked Function Expression
	'use strict';

// CONTROLLER: I can add a task to my list...t
//I. What event should I be listening for? keydown, keyup, keypress
//2. What element makes sense to listen for that event? input.new-todo
//3. What do I need to do when that event fires? See below TO ADD A NEW TASK

	// Given an HTML element <input class ='new-todo'>
	var newTodoInput = document.querySelector('input.new-todo')

	// WHEN the user types a task
	newTodoInput.addEventListener('keyup', function addTodoController(event){

			if (event.keyCode === 13){ // AND presses the "Enter" key
	// SAVE the thing to remember (task) to the list of things to remember (taskList)
				var task = document.querySelector('input.new-todo').value;
				todos.taskList.push(task);
	// Remove the thing to remember from the "What needs tp be done?" box (input.new-todo)



				document.querySelector('input.new-todo').value = "";


	// Update the number of tasks in the footer
				if (todos.taskList.length === 1) {

					(document.querySelector('span.todo-count').textContent = (todos.taskList.length + ' Item Left'));

				} else {

					(document.querySelector('span.todo-count').textContent = (todos.taskList.length + ' Items Left'));

				};

				//document.querySeletor('ul.todo-list').textContent = todos.taskList

				document.querySelector('ul.todo-list > li').textContent = todos.taskList;

				console.log(todos.taskList);
				console.log(todos.taskList.length);


			// THEN:

			// 7.TODO Add a new task (ul.todo-list > li)to the list of tasks _in the display_ (ul.todo-list)


			}

		});

})(window);


	/* Your starting point. Enjoy the ride!
	document.head.parentElement.className = "js";

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
