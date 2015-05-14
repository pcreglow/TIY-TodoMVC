(function (window) {
	'use strict';

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
	});

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
