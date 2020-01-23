import React from 'react'
import '../App'

export default function task(props) {
    return (
        <div
            className={props.todo.completed ? 'completed' : 'incomplete'}
            onClick={() => props.dispatch({type: 'TO_DO_COMPLETED', payload: props.todo.id})}>
            <p>{props.todo.item}</p>
        </div>
    )
}
