import React from 'react'
import PageLayout from './src/templates/page-layout'
export const wrapPageElement = ({ element }) => {
  return <PageLayout>{element}</PageLayout>
}
