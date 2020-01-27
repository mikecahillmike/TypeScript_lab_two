var myTaskArray = [];
function addTask(task) {
    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the array.");
    var count = myTaskArray.length;
    return count;
}
function listAllTasks() {
    // for(let i = 0; i < myTaskArray.length; i++){
    // }
    console.log("List all items in array");
    myTaskArray.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = myTaskArray.indexOf(task);
    if (index > -1) {
        myTaskArray.splice(index);
        console.log("Element " + task + " remove from array");
    }
    else {
        console.log("Element " + task + " not in the array");
    }
    return myTaskArray.length;
}
addTask("Numner three");
addTask("Number two");
var elementCount = addTask("Number One");
console.log(elementCount);
listAllTasks();
var x = deleteTask("Number two");
console.log(x);
