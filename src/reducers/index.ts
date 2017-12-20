import { combineReducers } from 'redux';
import filter from './filter';

export interface IFilter {
    year?: number;
    description?: string;
}

export default combineReducers({filter});
