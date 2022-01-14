import { useEffect, useState } from 'react'
import dataInputs from 'src/const/dataInputs.json'

export const useDataInputs = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    initData()
  }, [])

  async function initData() {
    const preData = JSON.stringify(dataInputs)
    const dataParcer = await JSON.parse(preData)
    setData(dataParcer)
  }

  return {
    list: data,
  }
}
