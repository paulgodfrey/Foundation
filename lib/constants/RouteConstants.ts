enum Pages {
  HOME_URL = '/',
  ABOUT_URL = '/about',
}

const PageTitles: { [T in Pages]: string } = {
  [Pages.HOME_URL]: 'Home',
  [Pages.ABOUT_URL]: 'About',
}

export { Pages, PageTitles }
