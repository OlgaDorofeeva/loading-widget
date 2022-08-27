import { useEffect } from 'react'
import { useDispatch, useSelector } from 'state'
import { fetchDataWidget } from '.'
import { GlobalState } from '../types'

export const useStoreDataWidget = () => useSelector((state: GlobalState) => state.widget)

export const useFetchDataWidget = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    void dispatch(fetchDataWidget())
  }, [dispatch])
}
