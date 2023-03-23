import { useDarkMode } from '@/lib/use-dark-mode'
import Giscus from '@giscus/react'
import * as React from 'react'

export function Comment() {
  const { isDarkMode } = useDarkMode()
  const theme = isDarkMode ? 'dark_dimmed' : 'light'
  return (
    <>
      <hr
        style={{
          margin: '50px 0 50px 0',
          border: 0,
          borderTop: '1px solid var(--fg-color-1)',
          width: '100%'
        }}
      />
      <Giscus
        id='comments'
        repo='Cookiekira/notion-blog'
        repoId='R_kgDOJNNpnA'
        category='Announcements'
        categoryId='DIC_kwDOJNNpnM4CVFFt'
        mapping='title'
        term='Welcome to leave your comment!'
        reactionsEnabled='1'
        emitMetadata='0'
        inputPosition='top'
        theme={theme}
        lang='zh-CN'
        loading='lazy'
      />
    </>
  )
}
