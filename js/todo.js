// var chai = require('chai'),
//  expect = chai.expect;

//var expect = require('chai').expect;

// I can list my tasks...
/*var taskList = ["Rember the milk", "Take out the trash",
                "Clean the bathroom"]; */
var taskList = [ ];

// I can list my tasks...
function listTasks(taskList) {
  return taskList;
}

/*console.log(taskList);

var newList = taskList.push("Feed the dog", "Get the mail");

console.log(taskList);

var removeTask = taskList.pop();

console.log(taskList);
*/




// I can add a task to my list
function addTaskToList(task, list){
  // what is the task? @param task
  // where is the task going? @param list
  // what order / priority? on the bottom
    return list.push({
      text: task, completed: false
    });
}

/*function removeTaskToList(task, list){


    return list.pop(task);
}

function priorityTaskToList(task, list){

    return list.slice(task, task);
}
*/

/*expect(taskList.length).to.equal(0);
addTaskToList("Remember the milk", taskList);
expect(taskList[0].text).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);

// expect what?
expect(taskList.length).to.equal(1);
addTaskToList("Take out the trash", taskList);
expect(taskList[1].text).to.equal("Take out the trash");
expect(taskList.length).to.equal(2);

expect(taskList.length).to.equal(2);
addTaskToList("Clean the bathroom", taskList);
expect(taskList[2].text).to.equal("Clean the bathroom");
expect(taskList.length).to.equal(3);

expect(taskList.length).to.equal(3);
addTaskToList("Feed the dog", taskList);
expect(taskList[3].text).to.equal("Feed the dog");
expect(taskList.length).to.equal(4);

expect(taskList.length).to.equal(4);
addTaskToList("Get the mail", taskList);
expect(taskList[4].text).to.equal("Get the mail");
expect(taskList.length).to.equal(5);*/

// expect(taskList[1]).to.not.be.completed?
// console.log(taskList);



/*taskList.prototype.move = function (old_list, new_list) {
    while (old_list < 0) {
        old_list +- taskList.length;
    }
    while (new_list < 0) {
      new_list + taskList.length;
    }
    if (new_list >= taskList.length) {
      var k = new_index - taskList.length;
      while ((k--) + 1) {
        taskList.push(undefined);
     }
   }
taskList.splice(new_list, 0, taskList.splice(old_list, 1)[0]);
return taskList;
};

/*Array.prototype.move = function(from, to) {
  taskList.splice(to, 0, taskList.splice(from, 1)[0]);
};*/


// expectt what now?
/*console.log(taskList[0]);
console.log(taskList[1]);
console.log(taskList[2]);
console.log(taskList[3]);
console.log(taskList[4]);
*/
// testing git add, commit and push
