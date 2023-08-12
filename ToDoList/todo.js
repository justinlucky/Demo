const addTask = () => {
    var task = document.getElementById('task');
    var taskLists = document.getElementById('taskLists');

    if(task.value !==''){
        var taskItem = document.createElement('li');
        taskItem.textContent = task.value;

        var removeList = document.createElement('button');
        removeList.textContent='Remove List';
        removeList.onclick = function () {
            taskLists.removeChild(taskItem)
        };
        taskItem.appendChild(removeList);
        taskLists.appendChild(taskItem);
        task.value = '';
    }
}