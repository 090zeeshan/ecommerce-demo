import {store} from 'src/store';
import {rootReducer} from 'src/store/store';

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
