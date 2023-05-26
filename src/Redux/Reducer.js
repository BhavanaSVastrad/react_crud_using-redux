import { ADD_USER, DELETE_USER, Decrement, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, Increment, MAKE_REQUEST, UPDATE_USER } from "./ActionType"

const initialstate = {
    loading: true,
    userlist: [],
    userobj: {},
    errmessage: '',
    count: 0
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_USER_LIST:
            return {
                loading: false,
                errmessage: '',
                userlist: action.payload,
                userobj: {}
            }
        case DELETE_USER:
            return {
                ...state,
                loading: false
            }
        case ADD_USER: return {
            ...state,
            loading: false
        }
        case UPDATE_USER: return {
            ...state,
            loading: false
        }
        case GET_USER_OBJ: return {
            ...state,
            loading: false,
            userobj: action.payload
        }
        default: return state
    }
}

export const CounterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case Increment: return {
            ...state,
            count: state.count + action.payload
        }
        case Decrement: return {
            ...state,
            count: state.count - action.payload
        }
        default: return state
    }
}
