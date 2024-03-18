import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TaskList from "./TaskList";

const mockStore = configureStore([]);

describe("TaskList", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      tasks: [
        { id: 1, text: "Tarea 1", priority: "high", completed: false },
        { id: 2, text: "Tarea 2", priority: "medium", completed: true },
      ],
      filter: "all",
    });
  });

  test("renders all tasks by default", () => {
    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    const taskItems = screen.getAllByRole("listitem");
    expect(taskItems).toHaveLength(2);
  });

  test("filters tasks by priority", () => {
    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    const filterSelect = screen.getByLabelText("Filtrar por prioridad:");
    fireEvent.change(filterSelect, { target: { value: "Alta" } });

    const taskItems = screen.getAllByRole("listitem");
    expect(taskItems).toHaveLength(1);
    expect(taskItems[0]).toHaveTextContent("Eliminar");
  });
});
