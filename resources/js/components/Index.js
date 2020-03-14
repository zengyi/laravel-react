import React, { useState, useEffect, useContext } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";

import List from "./tasks/List";
import Editor from "./tasks/Editor";
import Search from "./tasks/Search";

import TaskContext from "../context/Task/TaskContext";

function Index() {
    const { tasks, getTasks } = useContext(TaskContext);

    useEffect(() => {
        getTasks();
    }, []);

    const currentTasks = tasks.filter(task => !parseInt(task.archived)) || [];
    const archivedTasks = tasks.filter(task => !!parseInt(task.archived)) || [];

    return (
        <Container className="container pt-5">
            <Search></Search>
            <Tabs defaultActiveKey="current" id="uncontrolled-tab-example">
                <Tab eventKey="current" title="current tasks">
                    <div className="row justify-content-center pt-lg-5">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header">current tasks</div>
                                <div className="card-body">
                                    <Editor
                                        className="flex-end"
                                        task={{}}
                                    ></Editor>
                                    <List tasks={currentTasks}></List>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="archived" title="archived tasks">
                    <div className="row justify-content-center pt-lg-5">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header">
                                    archived tasks
                                </div>

                                <div className="card-body">
                                    <List tasks={archivedTasks}></List>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default Index;
