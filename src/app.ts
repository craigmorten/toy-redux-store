import * as fromStore from './store';

const payload = { label: 'example_payload' }

/**
 * Initialise the reducers
 */

const reducers = {
    slices: fromStore.reducer
};

/**
 * Initialise the store with an initial state
 */

const store = new fromStore.Store(reducers);

/**
 * Dispatch an example add action
 */

store.dispatch(new fromStore.AddSlice(payload));

/**
 * Subscribe to the store
 */

const unsubscribe = store.subscribe((state) => {
    console.log(state);
});

/**
 * Dispatch an example remove action
 */

 store.dispatch(new fromStore.RemoveSlice(payload));

/**
 * Unsubscribe from the store
 */

unsubscribe();