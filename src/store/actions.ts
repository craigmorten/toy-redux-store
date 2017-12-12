/**
 * action constants
 */

export const ADD_SLICE = '[SLICE] Add Slice'
export const REMOVE_SLICE = '[SLICE] Remove Slice'

/**
 * action creators
 */

export class AddSlice {
    readonly type = ADD_SLICE;
    payload: any
    constructor(private _payload: any) {
        this.payload = _payload;
    }
}

export class RemoveSlice {
    readonly type = REMOVE_SLICE;
    payload: any
    constructor(private _payload: any) {
        this.payload = _payload;
    }
}