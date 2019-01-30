import request from '@/data-api/request';
import { AxiosResponse } from 'axios';

const cacheMap: Map<string, AxiosResponse | undefined> = new Map();
/**
 * @param url
 * @param query
 * @param callBack
 * @author Astlvk
 * 该函数直接通过请求的url获取缓存数据送至回调函数交由调用者自由使用。
 * http请求每次都会发起，请求成功后更新缓存然后调用传入的回调函数重新执行(用于更新缓存)。
 */
function getDataByCache(url: string, query: object, callBack: (res: AxiosResponse | undefined) => void): void {
  if (cacheMap.has(url)) {
    // 存在则直接调用回调函数设置数据
    callBack(cacheMap.get(url));
  }
  // 发起请求，更新缓存，调用回调
  request.get(url, {params: query}).then((res) => {
    cacheMap.set(url, res);
    callBack(cacheMap.get(url));
  });
}

export {
  cacheMap,
  getDataByCache,
};

