// src/redux/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: [
        { id: 1, title: "Lista de Tareas", description: "Mostrar todas las tareas agregadas, con la opción de marcarlas como completadas y eliminarlas.", priority: "Media", completed: false },
        { id: 2, title: "Agregar Tarea", description: "Permitir al usuario agregar nuevas tareas a la lista. Cada tarea debe incluir un título, una descripción y una prioridad.", priority: "Alta", completed: false },
        { id: 3, title: "Filtrar por Prioridad", description: "Permitir al usuario filtrar las tareas por su prioridad (alta, media, baja)", priority: "Baja", completed: false }

    ],
    reducers: {
        addTask: (state, action) => {
            state.push({ ...action.payload, completed: false });
        },
        completeTask: (state, action) => {
            const { id, completed } = action.payload;
            const task = state.find((t) => t.id === id);
            if (task) {
                task.completed = completed;
            }
        },
        removeTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },
    },
});

export const { addTask, completeTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
