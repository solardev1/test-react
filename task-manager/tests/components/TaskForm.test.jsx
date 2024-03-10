import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskForm from '../../src/components/TaskForm';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../../src/redux/taskSlice';

describe('TaskForm', () => {
    test('Abre el modal al hacer clic en el botón "Agregar Tarea"', () => {
        // Renderiza el componente dentro del Provider con el store de Redux
        const store = configureStore({
            reducer: {
                task: taskReducer
            }
        });
        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <TaskForm />
            </Provider>
        );

        // Verifica que el modal no esté presente inicialmente
        expect(() => getByTestId('modal')).toThrow();

        // Obtén el botón "Agregar Tarea" y haz clic en él
        const addButton = getByTestId('add-task-button');
        fireEvent.click(addButton);

        // // Verifica que un elemento dentro del modal esté presente después de hacer clic en el botón
        expect(getByTestId('modal-title')).toBeInTheDocument();
        expect(getByTestId('modal-close-button')).toBeInTheDocument();
    });
});
