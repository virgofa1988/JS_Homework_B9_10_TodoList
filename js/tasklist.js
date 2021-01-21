function taskList() {
  this.taskArray = [];

  // Method
  // Add Task
  this.addTask = function (taskItem) {
    this.taskArray.push(taskItem);
  };
  //Find IDindex
  this.findIndex = function (taskID) {
    var idIndex = -1;
    for (i = 0; i < this.taskArray.length; i++) {
      if (this.taskArray[i].taskID === taskID) {
        idIndex = i;
        break;
      }
    }
    return idIndex;
  };

  //Delete Task
  this.deleteTask = function (taskID) {
    var indexID = this.findIndex(taskID);
    if (indexID !== -1) {
      this.taskArray.splice(indexID, 1);
    }
  };


  //getTaskbyID
  this.getTaskbyID = function (taskID) {
    var idIndex = this.findIndex(taskID);

    return this.taskArray[idIndex];
  };

  //updateTask
  this.updateTask = function (taskID) {
    var indexID = this.findIndex(taskID);

    if (this.taskArray[indexID].taskStatus === "todo") {
      this.taskArray[indexID].taskStatus = "completed";
    } else {
      this.taskArray[indexID].taskStatus = "todo";
    }
    return this.taskArray;
  };
}
