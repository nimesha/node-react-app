
export const userReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                user_id: action.id,
            }
        case 'REMOVE_USER':
            return {};
        default:
            return state;
    }
}