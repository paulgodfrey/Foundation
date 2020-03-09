import * as React from 'react'
import * as Loadable from 'react-loadable'

const LoadingApp = ({ isLoading, pastDelay, error }) => {
  if (isLoading && pastDelay) {
    return <div />
  } else if (error && !isLoading) {
    return <div>Error!</div>
  } else {
    return null
  }
}

const HomePage = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Home" */ '@root/pages/home/HomePage'),
  render(loaded, props) {
    let Component = loaded.HomePage
    return <Component {...props} />
  },
  loading: LoadingApp,
})

const AboutPage = Loadable({
  loader: () =>
    import(/* webpackChunkName: "About" */ '@root/pages/about/AboutPage'),
  render(loaded, props) {
    let Component = loaded.AboutPage
    return <Component {...props} />
  },
  loading: LoadingApp,
})

export { HomePage, AboutPage }
