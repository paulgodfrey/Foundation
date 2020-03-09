import { ReactBundleWrapper } from '@lib/helpers/ReactHelper'
import { WebpackBundleName } from '@lib/constants/WebpackConstants'

const getIndex = async (req, res, next) => {
  try {
    const payload = ReactBundleWrapper({
      title: 'Home',
      reactBundleName: WebpackBundleName.HOME_PAGE,
    })

    return res.send(payload)
  } catch (err) {
    console.error('Error while trying to create assessment', err)
    return next(err)
  }
}

const getAbout = async (req, res, next) => {
  try {
    const payload = ReactBundleWrapper({
      title: 'About',
      reactBundleName: WebpackBundleName.ABOUT_PAGE,
    })

    return res.send(payload)
  } catch (err) {
    console.error('Error while trying to create assessment', err)
    return next(err)
  }
}

export { getIndex, getAbout }
