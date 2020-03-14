import React from "react";

import Item from "./Item";

const List = ({ tasks }) => {
    console.log("tasks", tasks);
    return (
        <div>
            {tasks.map((task, index) => (
                <Item task={task} key={index}></Item>
            ))}
        </div>
    );
};

export default List;
