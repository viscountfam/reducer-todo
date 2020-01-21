import React from 'react'

export default function task(props) {
    return (
        <div
            className={props.todo.completed ? 'completed' : 'incomplete'}
            onClick={() => props.toggleCompleted(props.todo.id)}>
            <p>{props.todo.item}</p>
        </div>
    )
}
