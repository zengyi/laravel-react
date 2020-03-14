export default (state, action) => {
    switch (action.type) {
        case "SET_TASKS":
            return {
                ...state,
                tasks: action.payload
            };
        case "REMOVE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.payload)
            };
        case "FILTER_TASKS":
            return {
                ...state,
                tasks: state.tasks.filter(
                    t => t.completion_date === action.payload + ""
                )
            };
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case "UPDATE_TASK":
            return {
                ...state,
                tasks: [
                    ...state.tasks.filter(t => t.id !== action.payload.id),
                    action.payload
                ]
            };
        default:
            return state;
    }
};
