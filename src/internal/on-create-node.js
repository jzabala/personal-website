const { languages, defaultLanguage } = require('../utils/i18n')

function onCreateNode({ node, actions }) {
  const { createNodeField } = actions
  //eslint-disable-next-line default-case
  switch (node.internal.type) {
    case 'Mdx': {
      const { fileName, langKey } = getMetaFromFilePath(node.fileAbsolutePath)
      createNodeField({
        node,
        name: 'langKey',
        value: langKey,
      })
      createNodeField({
        node,
        name: 'url',
        value: getUrl(langKey, fileName),
      })
      break
    }
  }
}

function getMetaFromFilePath(path) {
  const tokens = path.split(/.*\//)
  const fullFileName = tokens[tokens.length - 1]
  const [fileName, langKey] = fullFileName.split('.')
  return {
    fileName,
    langKey: languages.some(lang => lang === langKey)
      ? langKey
      : defaultLanguage,
  }
}

function getUrl(langKey, name) {
  const lang = langKey === defaultLanguage ? '' : `/${langKey}`
  return `${lang}/blog/${name}/`
}

module.exports = onCreateNode
