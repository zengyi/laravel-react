import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import TaskContext from "../../context/Task/TaskContext";

const Search = () => {
    const { filterTasks, getTasks } = useContext(TaskContext);
    const [state, setState] = useState({});
    const handleSearch = e => {
        e.preventDefault();
        filterTasks(state.completion_date);
    };
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    return (
        <Form
            inline
            className="p-5 d-flex justify-content-end"
            onSubmit={handleSearch}
        >
            <Form.Group className="pr-5">
                <Form.Label className="pl-5 pr-2">
                    Search by date of completion
                </Form.Label>
                <Form.Control
                    size="sm"
                    name="completion_date"
                    type="date"
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" className="pl-5 pr-5" type="submit">
                Search
            </Button>
        </Form>
    );
};

export default Search;
