import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import classNames from 'classnames/bind';
import classnames from 'classnames';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

const cx = classNames.bind(styles);

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, index) => {
        if (!onTodoClick) return;
        onTodoClick(todo, index);
    }

    return (
        <ul className={cx('todo-list')}>
            {todoList.map((todo, index) => (
                <li 
                key={todo.id}
                className={classnames({
                    'todo-item':true,
                    completed: todo.status === 'completed'
                })}
                onClick={() => handleTodoClick(todo,index)}
                >{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;