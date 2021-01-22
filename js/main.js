function getEle(id) {
  return document.getElementById(id);
}

// Tạo đối lượng taskList từ Lớp đối tượng taskList
var taskList = new taskList();
var validation = new Validation();

getEle('date').innerHTML = Date();
getLocalStorage();

// Lay Du Lieu Nguoi Dung
function layDulieuTask() {
  var isValid = true;
  var _taskID = Math.random();
  var _taskName = getEle("newTask").value;
  var _taskStatus = "todo";

  isValid &= validation.checkEmpty(_taskName, "notiInput", 0) && validation.checkTrung(_taskName, "notiInput", 0, taskList.taskArray);

  if (isValid) {
    var taskItem = new task(_taskID, _taskName, _taskStatus);
    return taskItem;
  }
  return null;

}

// Add Task
function addTask() {
  var taskItem = layDulieuTask(); // Trả về 1 task do người dùng nhập vào gôm TaskID, taskName, taskStatus
  if (taskItem != null) {
    taskList.addTask(taskItem);
    console.log(taskList.taskArray);
    taoBangTodo(taskList.taskArray);
    setLocalStorage();
  }

}


// Delete Task
function deleteToDo(taskID) {
  taskList.deleteTask(taskID);
  taoBangTodo(taskList.taskArray);
  setLocalStorage();
}
function createTask(task) {
  return `
                   <li>
                   <span>${task.taskName}</span>
                   <div class="buttons">
                    <button class="remove" onclick="deleteToDo(${task.taskID})"><i class="fa fa-trash-alt"></i></button>
                    <button class="complete" onclick="changeStatus(${task.taskID})"><i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i></button>
                   </div>
                                     
                   </li>
                        
        `;
}
// Change Status Task
function changeStatus(taskID) {
  taskList.updateTask(taskID);
  taoBangTodo(taskList.taskArray);
  setLocalStorage()
}
// Tao Bang To Do
function taoBangTodo(taskArray) {
  var todo = "";
  var completed = "";
  for (i = 0; i < taskArray.length; i++) {
    if (taskArray[i].taskStatus === "completed") {
      completed += createTask(taskArray[i]);
      console.log(completed);

    } else {
      todo += createTask(taskArray[i]);
      console.log(todo);


    }
  }
  getEle("completed").innerHTML = completed;
  getEle("todo").innerHTML = todo;
}





//Lưu Task Xuống LocalStorage
// Chuyển Kiểu JSON --> string ( Sử Dụng Hàm JSON.stringfy())
function setLocalStorage() {
  var arrString = JSON.stringify(taskList.taskArray);

  //Lưu Xuống LocalStorage
  localStorage.setItem("TaskList", arrString);
}

//Lấy taskList từ localstorage
function getLocalStorage() {
  // chuyển từ string to JSON // Hàm lấy danh sách
  if (localStorage.getItem("tasklist")) {
    taskList.taskArray = JSON.parse(localStorage.getItem("tasklist"));
    taoBangTodo(taskList.taskArray);
  }
}
