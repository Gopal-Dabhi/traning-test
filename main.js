window.addEventListener('load', () => {
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#box');
    const myTask = document.querySelector('#tasks');

    form.addEventListener('submit', (a) => {
        a.preventDefault();

        const task = input.value;
        const abc = document.createElement("div");
        abc.classList.add("task");
        
        const taskValue = document.createElement("div");
        taskValue.classList.add("content");

        abc.appendChild(taskValue);


        const taskList = document.createElement("input");
        taskList.classList.add("text");
        taskList.type = "text";
        taskList.value = task;
        taskList.setAttribute("readonly", "readonly");
        taskList.setAttribute("disabled", "disabled");

        taskValue.appendChild(taskList);
        const xyz = document.createElement("div");
        xyz.classList.add("actions");



        const taskEdit = document.createElement("button");
        taskEdit.classList.add("edit");
        taskEdit.innerHTML = "Edit";


        const taskDelete = document.createElement("button");
        taskDelete.classList.add("delete");
        taskDelete.innerHTML = "Delete";

        xyz.appendChild(taskEdit);
        xyz.appendChild(taskDelete);

        abc.appendChild(xyz);

        myTask.appendChild(abc);
        input.value = "";


        taskEdit.addEventListener('click', () => {
            if (taskEdit.innerText.toLowerCase() == "edit"){
                taskList.removeAttribute("readonly");
                taskList.removeAttribute("disabled");
                taskList.focus();
                taskEdit.innerText = "Save";
            }else {
                taskList.setAttribute("readonly", "readonly");
                taskList.setAttribute("disabled", "disabled");
                taskEdit.innerText = "Edit";
            }
        });
        taskDelete.addEventListener('click', () => {
            myTask.removeChild(abc);
        });
    })
});

