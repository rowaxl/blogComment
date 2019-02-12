import { combineReducers } from 'redux';

export default combineReducers({
    dummy: () => {
        return ([
            { id: 1, text: 'dummyText1' },
            { id: 2, text: 'dummyText2' },
            { id: 3, text: 'dummyText3' }
        ]);
    }
});