/**
 * Tạo ra : Lớp Đối Tượng Task Có Tham Số Truyền Vào Gồm taskID, taskName, taskStatus
 */

function task(taskID, taskName, taskStatus) {

    //Property 
    this.taskID = taskID;
    this.taskName = taskName;
    this.taskStatus = taskStatus;
}