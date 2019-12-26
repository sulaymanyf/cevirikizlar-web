import {getMetinList} from '@/services/metin';

const MetinModel = {
  namespace: 'metin',
  state: {},
  effects: {
    * fetch(_, {call, put}) {
      const response = yield call(getMetinList);
      yield put({
        type: 'metinList',
        payload: response,
      });
    },

  },
  reducers: {
    saveCurrentUser(state, action) {
      return {...state, currentUser: action.payload || {}};
    },

    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
export default MetinModel;
