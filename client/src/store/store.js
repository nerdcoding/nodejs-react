import configureStore from './storeConfiguration';

const initialState = typeof window !== 'undefined' ? window.__INITIAL_STATE__: undefined;
const store = configureStore(initialState);

export default store;
