import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Editor from "./Editor";

import TaskContext from "../../context/Task/TaskContext";

const Item = ({ task }) => {
    const { removeTask, toggleTask } = useContext(TaskContext);

    return (
        <div className="row justify-content-between  border-bottom border-gray">
            <div className="col-md-7 my-auto">{task.name}</div>
            <div className="col-md-2 my-auto">{task.completion_date}</div>
            <div className="col-md-3 my-auto d-flex justify-content-end">
                {task.archived === "0" && <Editor task={task}></Editor>}

                <Button
                    variant="warning btn-sm"
                    className="pl-1 pr-1 m-2"
                    type="button"
                    onClick={() => toggleTask(task)}
                >
                    {task.archived === "0" ? "Archive" : "Unarchive"}
                </Button>
                {task.archived === "0" && (
                    <Button
                        variant="danger btn-sm"
                        className="pl-1 pr-1 m-2"
                        type="button"
                        onClick={() => removeTask(task.id)}
                    >
                        Delete
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Item;
