import {getMetinList} from '@/services/metin';

export default {
  namespace: 'metin',
  state: {
    metins: {},
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/orijinalmetin') {
          dispatch({
            type: 'fetch',
          });
        }
      });
    },
  },
  reducers: {
    // 上面的方法返回后放在reducers
    setMetinList(state, action) {
      console.log(action);
      return { ...state, metins: action.payload };
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      const response = yield call(getMetinList, {});
      console.log(response);
      yield put({
        type: 'setMetinList',
        payload: response,
      });
    },
  },
};
// export default MetinModel;
