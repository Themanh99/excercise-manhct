import { useState } from "react";
import TodoList from "../components/TodoList"

function TodoFeature(props) {
    const inittodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        }, {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        }, {
            id: 3,
            title: 'Code',
            status: 'new'
        }, {
            id: 4,
            title: 'Drink',
            status: 'new'
        }
    ]
    const [todoList, setTodoList] = useState(inittodoList);
    const [filter, setFilter] = useState('');
    const handleTodoClick = (todo, index) => {
        const newtodoList = [...todoList];
        newtodoList[index] = {
            ...newtodoList[index],
            status: newtodoList[index].status === 'new' ? 'completed' : 'new'
        };
        setTodoList(newtodoList); //
    }
    const handleShowAllClick = () => {
        setFilter('all');
    }
    const handleShowCompletedClick = () => {
        setFilter('completed');
    }
    const handleShowNewClick = () => {
        setFilter('new');
    }
    const renderTodoList = todoList.filter(todo => filter === 'all' || filter === todo.status);
    return (
        <div>
            <h2>To do List</h2>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    )
}

export default TodoFeature;