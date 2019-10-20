import { createSelector } from 'reselect';


export const <%= name %>_storeSelector = createSelector(
    [
        (store) => store.<%= name %>,
    ],
    (<%= name %>) => {
        return <%= name %>;
    }
);