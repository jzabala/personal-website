import { useContext } from 'react'

import { I18nContext } from '../components/i18n-context'

function useI18n() {
  return useContext(I18nContext)
}

export default useI18n
