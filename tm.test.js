const task = require('./task.js') 

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
   
}

function viewTasks(taskList) {
 const viewArray = []
 taskList.forEach(element => viewArray.push(element.text));
 return viewArray;
}

function searchTasks(subname) {
 let anotherGroup = tasks.map((x) => x);
 let groupReturned =  anotherGroup.filter(element => element.text.toLowerCase().search(subname) != -1)
  return viewTasks(groupReturned)
}

addNewTask("Program")
addNewTask("Eat")
addNewTask("Sleep")
//viewTasks(tasks)

viewTasks(tasks)
editTask(2, "protest", "Activism", "p3")


it ("should be three", () => {
	expect(idCount).toBe(3)
})

it ("viewTasks in right format", () => {
	expect(viewTasks(tasks)[1]).toBe("Eat")
})
it ("edited task properly", () => {
	expect(tasks[2].text).toBe("protest")
})
it ("searches a substring properly", () => {
    expect(searchTasks("pro").length).toBe(2)
})
