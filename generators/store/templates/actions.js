import { createAction } from 'redux-actions';
import _ from 'lodash';


export const <%= name %>_RESET = createAction('<%= name %>_RESET');
export const <%= name %>_UPDATE_STATE = createAction('<%= name %>_UPDATE_STATE');
export const <%= name %>_UPDATE_STATE_SHALLOW = createAction('<%= name %>_UPDATE_STATE_SHALLOW');
