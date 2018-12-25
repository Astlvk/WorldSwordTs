import request from '../request';
import { AxiosPromise } from 'axios';

export function getList(query: any): AxiosPromise {
  return request.get('lab/list', { params: query });
}
