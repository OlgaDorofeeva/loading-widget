import { useState } from 'react'
import { useTranslation } from 'contexts'
import { useFetchDataWidget, useStoreDataWidget } from 'state/widget/hooks'
import useInterval from 'hooks/useInterval'
import SomeConvenientWidget from 'components/SomeConvenientWidget'
import Spinner from 'components/Spinner'

const getTextLoader = (count: number) => {
  switch (count) {
    case 0:
      return 'Loading.First'
    case 1:
      return 'Loading.Second'
    case 2:
      return 'Loading.Third'
    default:
      return 'Loading.First'
  }
}

const LoadingWidget = () => {
  const { t } = useTranslation()
  const [count, setCount] = useState<number>(0)
  const DELAY = 2000
  const QUANTITY_LOAD_MESSAGES = 3

  useFetchDataWidget()
  const { isError, data } = useStoreDataWidget()

  useInterval(
    () => {
      setCount(count + 1)
    },
    count < QUANTITY_LOAD_MESSAGES ? DELAY : null,
  )

  return (
    <div style={{ marginTop: 50 }}>
      {((!data && !isError) || count < QUANTITY_LOAD_MESSAGES) && (
        <>
          <Spinner />
          <div>{t(getTextLoader(count))}</div>
        </>
      )}
      {isError && count === QUANTITY_LOAD_MESSAGES && <div>{t('Error.Timeout')}</div>}
      {data && count === QUANTITY_LOAD_MESSAGES && !isError && (
        <>
          <div>{t('Success.LoadingFinished')}</div>
          <SomeConvenientWidget />
        </>
      )}
    </div>
  )
}

export default LoadingWidget
