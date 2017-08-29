import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	//console.log('Action received', action);
	//console.log(state);
	switch(action.type) {
	case FETCH_WEATHER:
		return state.concat([action.payload.data]);
		//console.log(FETCH_WEATHE);
		//return [ action.payload.data ]
	}

	return state;
}