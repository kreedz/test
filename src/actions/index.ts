import {Dispatch} from 'redux';
import {createAction} from 'redux-actions';


const incFilterAction = createAction(
    'INC_FILTER'
);

export const incFilter = () =>
    (dispatch: Dispatch<void>) => dispatch(
        incFilterAction()
    );
