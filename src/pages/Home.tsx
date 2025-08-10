import React from 'react'
import { Header } from '../ui/organisms/Header'
import { Hero } from '../ui/organisms/Hero'
import { HighlightModule } from '../modules/HighlightModule'
import { ArticleModule } from '../modules/ArticleModule'
import { Footer } from '../ui/organisms/Footer'

export const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <HighlightModule />
        <ArticleModule />
        <Footer />
    </div>
  )
}
