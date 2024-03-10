import React from 'react';
import ReactDOM from 'react-dom/client';
import { TaskManager } from './TaskManagerApp';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './redux/taskSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './styles.css';

const store = configureStore({
    reducer: {
        task: taskSlice
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <TaskManager />
        </Provider>
    </React.StrictMode>,
)
