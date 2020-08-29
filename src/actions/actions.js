export const SET_TASK = "SET_TASK";
export const SET_IMPORTANT = "SET_IMPORTANT";
export const SET_URGENT = "SET_URGENT";
export const DELETE = "DELETE";

export const set_task = (input) => {
    return {
        type:SET_TASK, input
};
}

export const set_important = (input) => {
    return {
        type: SET_IMPORTANT, input
};
}

export const set_urgent = (input) => {
    return {
        type: SET_URGENT, input
};
}

export const delete_task = (index) => {
    return {
        type: DELETE, index
    }
}

export default "";