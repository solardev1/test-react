import { render, fireEvent } from '@testing-library/react';
import TaskModal from '../../src/components/TaskModal';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../../src/redux/taskSlice';

describe('TaskModal', () => {
    test('Se actualizan los campos correctamente y se llama a la función addTaskModal', () => {
        const store = configureStore({
            reducer: taskReducer
        });

        // Mock para la función closeModal
        const closeModal = jest.fn();

        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <TaskModal showModal={true} closeModal={closeModal} />
            </Provider>
        );

        // Simular cambios en los campos del formulario
        fireEvent.change(getByLabelText('Título de la tarea'), { target: { value: 'Tarea de prueba' } });
        fireEvent.change(getByLabelText('Descripción de la tarea'), { target: { value: 'Esta es una descripción de prueba' } });
        fireEvent.change(getByLabelText('Prioridad'), { target: { value: 'Alta' } });

        // Verificar que los campos se actualizan correctamente
        expect(getByLabelText('Título de la tarea').value).toBe('Tarea de prueba');
        expect(getByLabelText('Descripción de la tarea').value).toBe('Esta es una descripción de prueba');
        expect(getByLabelText('Prioridad').value).toBe('Alta');


        // Simular clic en el botón "Agregar"
        fireEvent.click(getByText('Agregar'));

        // Verificar que se llama a la función addTaskModal
        expect(closeModal).toHaveBeenCalled();
    });
});
