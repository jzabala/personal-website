import { useMemo } from 'react'

import useI18n from '../hooks/use-i18n'

function useLocalizedDateString(date) {
  const { langKey } = useI18n()
  const localizedDateString = useMemo(
    () => new Date(date).toLocaleDateString(langKey, localizedDateOptions),
    [langKey, date]
  )
  return localizedDateString
}

const localizedDateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

export default useLocalizedDateString
