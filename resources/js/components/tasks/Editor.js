import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import TaskContext from "../../context/Task/TaskContext";
const Editor = ({ task }) => {
    const { addTask, updateTask } = useContext(TaskContext);
    const [state, setState] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = e => {
        e.preventDefault();
        const payload = {
            name: state.name || task.name,
            completion_date: state.completion_date || task.completion_date,
            archived: "0"
        };
        !!task.id ? updateTask({ ...task, ...payload }) : addTask(payload);

        setShow(false);
    };
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Button
                variant="primary"
                onClick={handleShow}
                className={task.id ? "pl-1 pr-1 m-2" : ""}
            >
                {task.id ? "Edit" : "Add New Task"}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Task Editor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Task description</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="name"
                                defaultValue={task.name}
                                onChange={handleChange}
                            />
                            <Form.Label>Date for completion</Form.Label>
                            <Form.Control
                                size="sm"
                                name="completion_date"
                                type="date"
                                defaultValue={task.completion_date}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Editor;
