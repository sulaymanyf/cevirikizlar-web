import request from '@/utils/request';

export async function getMetinList(params) {
  return request('/api/ceviri-kizlar/v1/metin', {
    method: 'POST',
    data: params,
  });
}
