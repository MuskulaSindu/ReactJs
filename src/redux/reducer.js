import {COMMENTS} from '../Components/Comments';
import {PROMOTIONS} from '../Components/Promotions';
import {LEADERS} from '../Components/Leaders';
import {DISHES} from '../Components/Dishes';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};