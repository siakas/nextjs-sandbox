import axios, { AxiosResponse } from 'axios'

// https://www.gaji.jp/blog/2022/11/15/12095/
export const api = async <Res>(
  method: string,
  query?: unknown
): Promise<AxiosResponse<Res>> => {
  const instance = axios.create({ baseURL: '/api/' })

  return await instance.get(method, {
    params: query,
  })
}
