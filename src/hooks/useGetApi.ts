import { useEffect, useState } from 'react'

import { AxiosResponse } from 'axios'

const useGetApi = <Res>(
  getApi: () => Promise<AxiosResponse<Res>>
): Res | undefined => {
  const [data, setData] = useState<Res | undefined>(undefined)
  useEffect(() => {
    void getApi().then((res) => setData(res.data))
  }, [])

  return data
}
