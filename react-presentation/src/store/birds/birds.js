/*
* Import function combineReduces from redux
* */
import { combineReducers } from 'redux';
const ADD_BIRD = 'ADD_BIRD';
const INCREMENT_BIRD = 'INCREMENT_BIRD';

/*Next step is to create function with type and bird as a field
* to pass*/
export function addBird(bird) {
    return {
        type: ADD_BIRD,
        bird,
    }
}
/*Using same logic we will create another function to increment birds views counter*/
export function incrementBird(bird) {
    return {
        type: INCREMENT_BIRD,
        bird
    }
}

/*
* After that we create a placeholder defaultBirds to have
* data to show on our page*/
const defaultBirds = [
    {
        name: 'robin',
        views: 1,
    }
];

/*
* Next step is to create reducer function called birds
* create switch case based on action
* and add the logic to show different output based on action type*/
function birds(state=defaultBirds, action) {
    switch (action.type) {
        case ADD_BIRD:
            return [
                ...state,
                {
                    name: action.bird,
                    views: 1
                }
            ];
        case INCREMENT_BIRD:
            const bird = state.find(b => action.bird === b.name);
            const birds = state.filter(b => action.bird !== b.name);
            return [
                ...birds,
                {
                    ...bird,
                    views: bird.views + 1
                }
            ];
        default:
            return state;
    }
}
/*
* create a combineReducer to call birds function*/
const birdApp = combineReducers({
    birds
});

export default birdApp;