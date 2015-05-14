(function (window) {
	'use strict';

	function Controller(model, view) {
		var that = this;
		that.model = model;
		that.view = view;

		that.view.bind('newTodo', function (title) {

		});
	}

	Controller.prototype.showAll = function () {
		var that = this;
		that.model.read(function (data) {
			that.view.render('showEntries', data);
		});
	};

	Controller.prototype.addItem = function (title) {
		var that = this;

		if (title.trim() === "") {
			return;
		}

		that.model.create(title, function () {
			that.view.render('clearNewTodo');
			that._filter(true);
		});
	};

	// Your starting point. Enjoy the ride!
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

})(window);

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
