import { Action } from 'redux';

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string, P>(type: T, payload?: P): Action<T> | ActionWithPayload<T, P> {
  return { type, payload };
}

interface ActionsCreatorsMapObject {
  [actionCreator: string]: (...args: any[]) => any;
}

export type ActionUnion<A extends ActionsCreatorsMapObject> = ReturnType<A[keyof A]>;
