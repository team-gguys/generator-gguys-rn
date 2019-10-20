import { handleActions } from 'redux-actions';
import { fromJS } from 'sota-immutable';
import _ from 'lodash';


const defaultState = {

};


export const reducer = handleActions({
    <%= name %>_RESET: (state, { payload }) => {
        return {
            ..._.cloneDeep(defaultState),
            ...payload,
        };
    },

    <%= name %>_UPDATE_STATE: (state, { payload }) => {
        return fromJS(state)
            .mergeDeep(payload)
            .toJS();
    },

    <%= name %>_UPDATE_STATE_SHALLOW: (state, { payload }) => {
        return fromJS(state)
            .merge(payload)
            .toJS();
    },
}, defaultState);


export default reducer;
