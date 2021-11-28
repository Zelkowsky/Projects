import React from "react";


const ListItem = ({ task, index, onDelete}) => {

    const DeleteClick = () => {
        if(!(onDelete && index >= 0)) return;
        onDelete(index);
    }

    return (
        <div className="task_item">
            <li className="task_item" key={index}>{task}</li>
            <button onClick={DeleteClick}>Удалить</button>
        </div>

    )
}







export default ListItem;