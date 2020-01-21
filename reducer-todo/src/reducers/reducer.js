

 export const initialState = [{
    item: 'Learn about reducers',
    completed: true,
    id: 3892987589
},
    {
        item: 'Learn to ice skate',
        completed: false,
        id: 23487521
    }
]


export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'NEW_TO_DO':
            return [ ...state, {
                item: action.payload,
                completed: false,
                id: Date.now()
            } ];
        default:
            return state;
    }
};


 

