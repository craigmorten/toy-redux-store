import * as fromActions from './actions';

/**
 * initial state
 */
export const initialState = {
    loaded: false,
    loading: false,
    data: [],
};

/**
 * reducer for updating state based on action type
 * 
 * @param state 
 * @param action 
 */
export function reducer(
    state = initialState,
    action: { type?: string, payload?: any }
) {
    switch (action.type) {

        case fromActions.ADD_SLICE: {
            const payload = action.payload;
            const data = [...state.data, payload];
            return {
                ...state,
                data,
            };
        }

        case fromActions.REMOVE_SLICE: {
            const data = state.data.filter((slice) => {
                return (slice.label !== action.payload.label);
            });
            return {
                ...state,
                data,
            };
        }
    }

    return state;
}