const { languages, defaultLanguage } = require('../utils/i18n')

function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent)
    const { fileName, langKey } = getMetaFromFileName(fileNode.name)
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
  }
}

function getMetaFromFileName(name) {
  const [fileName, fileLangKey] = name.split('.')
  return {
    fileName,
    langKey: languages.some(lang => lang === fileLangKey)
      ? fileLangKey
      : defaultLanguage,
  }
}

function getUrl(langKey, name) {
  const lang = langKey === defaultLanguage ? '' : `/${langKey}`
  return `${lang}/blog/${name}/`
}

module.exports = onCreateNode
