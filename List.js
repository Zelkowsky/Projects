import React from "react";
import ListItem from "./ListItem";



    const List = () => {

        const [tasks, setTask] = React.useState([]);

        const addNewTask = (event) => {
            event.preventDefault();
            const newTask = event.target.task.value;

            setTask((tasks) => [...tasks, newTask])
        }


    const taskDelete = (index) => {
        setTask(tasks => [...tasks.slice(0, index), ...tasks.slice(index + 1)]);
    }




    return (
        <div className="container">
            <form onSubmit={addNewTask} className="add-task">
                <input type="text" name="task" className="add_input"></input>
                <button className="add_button">Жмяк</button>
            </form>
            <h3 className="task_name">Список</h3>
            <ul className="t_list">


                {Array.isArray(tasks) && tasks.map((task, index) => <ListItem onDelete={taskDelete} index={index} key={index} task={task} />)}

            </ul>
        </div>

    )
}

export default List;