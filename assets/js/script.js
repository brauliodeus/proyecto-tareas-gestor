document.getElementById('formulariotareas').addEventListener('submit', function(e) {
    e.preventDefault();
    const description = document.getElementById('descripcion').value;
    const dueDate = document.getElementById('fecha').value;
    const prioridad = document.getElementById('prioridad').value;

    const itemTarea = document.createElement('li');
    itemTarea.innerHTML = `<div class="tarea-pendiente"><strong>${description}</strong><span> Vence el: ${dueDate}</span><span> Prioridad: ${prioridad.charAt(0).toUpperCase() + prioridad.slice(1)}</span><div class="btn-container">
            <button class="btn-mover" id="mover-btn-progreso">Mover a Progreso</button> 
            <button class="btn-eliminar" id="eliminar-tarea">Eliminar</button>
        </div>`;
    document.getElementById('pendientes-container').appendChild(itemTarea);
    document.getElementById('c-pendiente').textContent = parseInt(document.getElementById('c-pendiente').textContent) + 1;
    this.reset();

    itemTarea.querySelector('#eliminar-tarea').addEventListener('click', function() {
        itemTarea.remove();
        document.getElementById('c-pendiente').textContent = parseInt(document.getElementById('c-pendiente').textContent) - 1;
    });

    itemTarea.querySelector('#mover-btn-progreso').addEventListener('click', function() {
        const tareaEnProgreso = document.createElement('li');
        tareaEnProgreso.innerHTML = `<div class="tarea-progreso"><strong>${description}</strong><span> Vence el: ${dueDate}</span><span> Prioridad: ${prioridad.charAt(0).toUpperCase() + prioridad.slice(1)}</span><div class="btn-container"><button class="btn-mover" id="mover-btn-completada">Mover a Completada</button><button class="btn-eliminar" id="eliminar-tarea-progreso">Eliminar</button></div></div>`;
        document.getElementById('en-progreso-container').appendChild(tareaEnProgreso);
        document.getElementById('c-pendiente').textContent = parseInt(document.getElementById('c-pendiente').textContent) - 1;
        document.getElementById('c-progreso').textContent = parseInt(document.getElementById('c-progreso').textContent) + 1;
        itemTarea.remove();
        
        tareaEnProgreso.querySelector('#eliminar-tarea-progreso').addEventListener('click', function() {
            tareaEnProgreso.remove();
            document.getElementById('c-progreso').textContent = parseInt(document.getElementById('c-progreso').textContent) - 1;
        });
        
        tareaEnProgreso.querySelector('#mover-btn-completada').addEventListener('click', function() {
            const tareaCompletada = document.createElement('li');
            tareaCompletada.innerHTML = `<div class="tarea-completado"><strong>${description}</strong><span> Vence el: ${dueDate}</span><span> Prioridad: ${prioridad.charAt(0).toUpperCase() + prioridad.slice(1)}</span><div class="btn-container"><button class="btn-eliminar" id="eliminar-tarea-completada">Eliminar</button></div></div>`;
            document.getElementById('completadas-container').appendChild(tareaCompletada);
            document.getElementById('c-progreso').textContent = parseInt(document.getElementById('c-progreso').textContent) - 1;
            document.getElementById('c-completadas').textContent = parseInt(document.getElementById('c-completadas').textContent) + 1;
            tareaEnProgreso.remove();
            
            tareaCompletada.querySelector('#eliminar-tarea-completada').addEventListener('click', function() {
                tareaCompletada.remove();
                document.getElementById('c-completadas').textContent = parseInt(document.getElementById('c-completadas').textContent) - 1;
            });
        });
    });
});