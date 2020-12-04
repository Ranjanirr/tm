class task {
    constructor() {
        this.id = 1
        this.text = "item-1";
        this.project = 'inbox';
        this.schedule = new Date()//try using moment?
        this.labels = ""
        this.priority = "p1"
    }
}


// use cases 

// data structure ( list | map )
const tasks = []
let idCount = 0
function addNewTask(name) {
    //...
    let task1 = new task()
    task1.text = name
    task1.id = idCount
    idCount += 1
    tasks.push(task1)
    

}

function editTask(id, name, project, priority) {
    //...
    const found = tasks.find(element => element.id == id);
    const index = tasks.indexOf(found);
    tasks[index].text = name
    tasks[index].project = project
    tasks[index].priority = priority
    console.log(tasks[index])
}

function viewTasks(taskList) {
 taskList.forEach(element => console.log(element.text));
}

function searchTasks(subname) {
 let anotherGroup = tasks.map((x) => x);
 let thing =  anotherGroup.filter(element => element.text.toLowerCase().search(subname) != -1)
  viewTasks(thing)
}

addNewTask("Program")
addNewTask("Eat")
addNewTask("Sleep")
//viewTasks(tasks)
searchTasks("e")
viewTasks(tasks)
editTask(2, "Nap", "Health", "p3")

export {idCount}