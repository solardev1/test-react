import { render } from '@testing-library/react';
import { TaskManager } from '../src/TaskManagerApp';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../src/redux/taskSlice';

describe('Componente TaskManager', () => {
    test('Se renderiza de manera correcta el TaskManager', () => {
        const store = configureStore({
            reducer: {
                task: taskReducer
            }
        });
        render(
            <Provider store={store}>
                <TaskManager />
            </Provider>
        );
    });

});