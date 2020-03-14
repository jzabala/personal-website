const { languages, defaultLanguage } = require('../utils/i18n')

function onCreatePage({ page, actions }) {
  const { createPage } = actions
  // Create pages for languages.
  languages.forEach(langKey => {
    const localizedPage = localizePage({ langKey, page })
    // Create 404 page only for default language
    if (is404Page(page.path)) {
      isDefaultLang(langKey) && createPage(localizedPage)
    } else {
      createPage(localizedPage)
    }
  })
}

function is404Page(path) {
  return /^\/404/.test(path)
}

function localizePage({ langKey, page }) {
  return {
    ...page,
    path: isDefaultLang(langKey) ? page.path : `/${langKey}${page.path}`,
    context: {
      ...page.context,
      langKey,
    },
  }
}

function isDefaultLang(lang) {
  return lang === defaultLanguage
}

module.exports = onCreatePage
