import Giscus from '@giscus/react'
import * as React from 'react'

export function Comment() {
  return (
    <Giscus
      id='comments'
      repo='Cookiekira/notion-blog'
      repoId='R_kgDOJNNpnA'
      category='Announcements'
      categoryId='DIC_kwDOJNNpnM4CVFFt'
      mapping='pathname'
      term='Welcome to leave your comment!'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme='preferred_color_scheme'
      lang='zh-CN'
      loading='lazy'
    />
  )
}
