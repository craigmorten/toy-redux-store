export class Store {
    private subscribers: Function[];
    private reducers: { [key: string]: Function };
    private state: { [key: string]: any };

    constructor(reducers = {}, initialState = {}) {
        this.reducers = reducers;
        this.state = this.reduce(initialState, {});
    }

    /**
     * get the state from the store
     */
    get value(): { [key: string]: any } {
        return this.state;
    }

    /**
     * subscribe to the store
     * 
     * @param fn 
     */
    subscribe(fn: Function) {
        this.subscribers = [...this.subscribers, fn];
        this.notify();
        // Return a function to unsubscribe
        return () => {
            this.subscribers = this.subscribers.filter((sub) => {
                return sub !== fn;
            });
        }
    }

    /**
     * dispatch an action
     * 
     * @param action 
     */
    dispatch(action: { type?: string, payload?: any }) {
        this.state = this.reduce(this.state, action);
        this.notify();
    }

    /**
     * notify all subscribers
     */
    private notify() {
        this.subscribers.forEach((fn: Function) => {
            return fn(this.value);
        })
    }

    /**
     * update the store's state
     * 
     * @param state 
     * @param action 
     */
    private reduce(state, action: { type?: string, payload?: any }) {
        const newState = {};
        for (const prop in this.reducers) {
            newState[prop] = this.reducers[prop](state[prop], action);
        }
        return newState;
    }
}
