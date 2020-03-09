import * as React from 'react'

/* Managers */
import { StateProvider } from '@root/managers/StateManager'

/* Reducers */
import {
  AppReducerReducerInitialState,
  AppReducer,
} from '@root/reducers/AppReducer'

/* Helpers */
import { setPageTitleByRouteUrl } from '@root/Helpers/RouterHelper'

/* Constants */
import { Pages } from '@shared/constants/RouteConstants'

const AboutPage = () => {
  setPageTitleByRouteUrl({ url: Pages.ABOUT_URL })

  return (
    <StateProvider
      initialState={AppReducerReducerInitialState}
      reducer={AppReducer}
    >
      <div className="px-5 py-5">About Page</div>
    </StateProvider>
  )
}

export { AboutPage }
