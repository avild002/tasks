
// TODO - Tengo que revisar como pintar los aobjetos del array sin usar los 
export function listTask (orderedTaskList) {
    const listTask = document.getElementById("task-list");
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="container py-2 text-center mb-8">
        <div class ="container py-2 p-3 mb-2 bg-light text-dark">
            <strong>Tarea :</strong> <input type="text" value = ${orderedTaskList[0].name} disabled>
            <strong>prioridad :</strong> <input type="text" value = ${orderedTaskList[0].priority} disabled> 
            <strong>Estado :</strong> <input class="form-check-input" type="checkbox" value=""> ${orderedTaskList[0].state}
        <div><br>
        <button type="button" class="btn btn-info">Editar</button>
        <button type="button" class="btn btn-danger">Eliminar</button>
    </div>`;
    listTask.appendChild(element);

}