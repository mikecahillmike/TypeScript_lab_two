"use strict";
exports.__esModule = true;
var MyTaskManager = /** @class */ (function () {
    function MyTaskManager() {
        this.myTaskArray = [];
    }
    MyTaskManager.prototype.addTask = function (task) {
        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the array.");
        var count = this.myTaskArray.length;
        return count;
    };
    MyTaskManager.prototype.listAllTasks = function () {
        console.log("List all items in array");
        this.myTaskArray.forEach(function (task) {
            console.log(task);
        });
    };
    MyTaskManager.prototype.deleteTask = function (task) {
        var index = this.myTaskArray.indexOf(task);
        if (index > -1) {
            this.myTaskArray.splice(index);
            console.log("Element " + task + " remove from array");
        }
        else {
            console.log("Element " + task + " not in the array");
        }
        return this.myTaskArray.length;
    };
    return MyTaskManager;
}());
var MyTaskManager1 = new MyTaskManager();
MyTaskManager1.addTask("item one");
MyTaskManager1.addTask("item two");
//MyTaskManager1.addTask("item three");
MyTaskManager1.listAllTasks();
