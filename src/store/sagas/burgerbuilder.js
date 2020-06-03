import axios from '../../axios-orders';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* initIngredientsSaga(action){
    try{
        const response = yield axios.get( 'https://burgerbuilder-2dca4.firebaseio.com/.json' )
        yield put(actions.setIngredients(response.data));
    } catch(error){
        yield put(actions.fetchIngredientsFailed());
    }
  
}