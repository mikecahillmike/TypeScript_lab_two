import {tasksInterface}from './interface';

class MyTaskManager implements tasksInterface{

    myTaskArray: Array<string> = [];

    constructor(){ }

    addTask(task:string):number{ // adding an element to the array
        this.myTaskArray.push(task);
        console.log("Item " + task+" has been added to the array.");
        let count:number = this.myTaskArray.length;
        return count;
    }
    listAllTasks():void{
        console.log("List all items in array");
        this.myTaskArray.forEach(function(task){
            console.log(task);
        })
    }
    deleteTask(task:string):number{ // deleting an element from the array
        let index:number = this.myTaskArray.indexOf(task);
        if(index > -1){
            this.myTaskArray.splice(index);
            console.log("Element " + task+" remove from array");
        }
        else{
            console.log("Element " + task+" not in the array");
        }
        return this.myTaskArray.length;
    }
}
let MyTaskManager1 = new MyTaskManager();
MyTaskManager1.addTask("item one");
MyTaskManager1.addTask("item two");
//MyTaskManager1.addTask("item three");
MyTaskManager1.listAllTasks();
