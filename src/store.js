import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {fromJS} from 'immutable';
import createReducer from './reducers';

//Create middleware for sagas.
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // shouldHotReload: false
                deserializeState: (state) => {
                    return Object.keys(state).reduce(function (previous, current) {
                        previous[current] = fromJS(state[current]);
                        return previous;
                    }, {});
                },
            }) : compose;

    const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

    //Creating the redux-store from reducers and enhancers.
    const store = createStore(createReducer(), enhancer);

    //Run each saga
    // Async reducer registry
    store.asyncReducers = {};
    return store;
}
