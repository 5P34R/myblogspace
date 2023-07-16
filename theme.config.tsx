import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>5P34R writeups</span>,
  project: {
    link: 'https://github.com/VishDroid-dev',
  },
  docsRepositoryBase: 'https://github.com/VishDroid-dev/myblogspace/tree/main',
  footer: {
    text: 'Made by VishDroid-dev 💗',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - 5P34R'
    }
  },
  search: {
    placeholder: 'Search Writeups',
  }
}



export default config
