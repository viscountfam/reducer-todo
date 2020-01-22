

 export const initialState = { data: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }, 
{
    item: 'eat breakfast',
    completed: false,
    id: 789321560
}
]
 }

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'NEW_TO_DO':
            console.log("Current state.data", state.data)
            return { data: [...state.data, {
                item: action.payload,
                completed: false,
                id: Date.now()
            }]};
            
        case 'TO_DO_Completed':
            const newTodoList = { data:  state.data.map(task => {
                if(task.id === action.payload) {
                    return {...task,
                            completed: !task.completed
                        }
                } else {
                    return task
                }
            })}
        case 'FILTER_TO_DO':
            return state.data.filter(task =>
                task.completed === false);
        default:
            return state.data;
    }
};


 

