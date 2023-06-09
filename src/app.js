import { list } from "./task.js";
import { createTask } from './create.js';
import { editTask, updateTask } from './edit.js';
import { printTask } from "./print.js";
   
   
document.getElementById("task-form").addEventListener("submit", function (e) {
   
      // obtengo los valores del formulario
      const name = document.getElementById("fnameTask").value
      const priority = document.getElementById("priority").value
   
      // invoco la función crear.
      createTask(name, priority);
      document.getElementById("fnameTask").value = "";
      document.getElementById("priority").value = "";
      e.preventDefault();
   
});
   
   
document.getElementById("task-list").addEventListener("click", (e) => {
   
      editTask(e.target);
      e.preventDefault();
   
});
   
document.getElementById("task-list").addEventListener("click", (e) => {
   
      updateTask(e.target, list);
      e.preventDefault();
   
});
   
   
document.getElementById("ordered").addEventListener("click", (e) => {
   
      if (list.length >= 0) {
         list.sort((a, b) => b.getPriority() - a.getPriority());
      }
   
      printTask(list);
      e.preventDefault();
   
   
});