import {handleActions} from 'redux-actions';

import {IFilter} from 'models';


const initialState: IFilter = {year: 2011, description: 'init-description'};

export default handleActions<IFilter>({
    INC_FILTER: (state: IFilter): IFilter => ({...state, year: state.year + 1})
}, initialState);
