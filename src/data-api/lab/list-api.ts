import request from '../request';
import { getDataByCache as GetDataByCache } from '@/utils/httpCache';
import { AxiosPromise, AxiosResponse } from 'axios';

export function getList(query: any): AxiosPromise {
  return request.get('lab/list', { params: query });
}

export function getListByCache(query: object, callBack: (res: AxiosResponse | undefined) => void) {
  GetDataByCache('lab/list', query, callBack);
}
