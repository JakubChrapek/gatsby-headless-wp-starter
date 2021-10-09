import React from 'react'
import PageLayout from './src/templates/page-layout'
import '@fontsource/spectral/300.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'

export const wrapPageElement = ({ element }) => {
  return <PageLayout>{element}</PageLayout>
}
