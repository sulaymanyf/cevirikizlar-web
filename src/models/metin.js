import {getMetinList} from '@/services/metin';

const MetinModel = {
  namespace: 'metin',
  state: {
    'res': "",
  },
  effects: {
    * fetch(payload, {call, put}) {
      const response = yield call(getMetinList);
      yield put({
        type: 'metinList',
        payload: response,
      });
    },

  },

};
export default MetinModel;
