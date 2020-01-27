let myTaskArray: Array<string> = [];

function addTask(task:string):number{ // adding an element to the array
    myTaskArray.push(task);
    console.log("Item " + task+" has been added to the array.");
    let count:number =  myTaskArray.length;
    return count;
}

function listAllTasks():void{

    // for(let i = 0; i < myTaskArray.length; i++){

    // }
    console.log("List all items in array");
    myTaskArray.forEach(function(task){
        console.log(task);
    })
}

function deleteTask(task:string):number{ // deleting an element from the array
    let index:number = myTaskArray.indexOf(task);
    if(index > -1){
        myTaskArray.splice(index);
        console.log("Element " + task+" remove from array");
    }
    else{
        console.log("Element " + task+" not in the array");
    }
    return myTaskArray.length;
}

addTask("Numner three")
addTask("Number two");
let elementCount:number = addTask("Number One");
console.log(elementCount);

listAllTasks();
let x:number = deleteTask("Number two");
console.log(x);