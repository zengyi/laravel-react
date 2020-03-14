import React, { useReducer } from "react";
import axios from "axios";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

const TaskProvider = props => {
    const initialState = {
        tasks: []
    };

    const getTasks = async () => {
        try {
            const res = await axios.get("http://localhost:8000/task");
            const data = res.data;
            dispatch({ type: "SET_TASKS", payload: data });
        } catch (err) {
            console.log(err);
        }
    };

    const filterTasks = async data => {
        try {
            dispatch({ type: "FILTER_TASKS", payload: data });
        } catch (err) {
            console.log(err);
        }
    };

    const removeTask = async id => {
        try {
            await axios.delete(`http://localhost:8000/task/${id}`);
            dispatch({ type: "REMOVE_TASK", payload: id });
        } catch (err) {
            console.log(err);
        }
    };

    const toggleTask = async data => {
        try {
            data = { ...data, archived: data.archived === "0" ? "1" : "0" };
            await axios.patch(`http://localhost:8000/task/${data.id}`, data);
            dispatch({ type: "UPDATE_TASK", payload: data });
        } catch (err) {
            console.log(err);
        }
    };

    const updateTask = async data => {
        try {
            await axios.patch(`http://localhost:8000/task/${data.id}`, data);
            dispatch({ type: "UPDATE_TASK", payload: data });
        } catch (err) {
            console.log(err);
        }
    };

    const addTask = async data => {
        try {
            const task = await axios.post("http://localhost:8000/task", data);
            dispatch({ type: "ADD_TASK", payload: task.data });
        } catch (err) {
            console.log(err);
        }
    };

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                getTasks,
                filterTasks,
                addTask,
                updateTask,
                removeTask,
                toggleTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
