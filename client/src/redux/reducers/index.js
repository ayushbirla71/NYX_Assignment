import {combineReducers} from 'redux';
import OnChangeRecordDetails from './recordInputs';
import homeRecordData from './homeRecordData';
import detailsRecordData from './detailsRecordData';
import buttonControllers from './buttonControllers';

const rootReducer = combineReducers({
    OnChangeRecordDetails,
    homeRecordData,
    detailsRecordData,
    buttonControllers
})

export default rootReducer;