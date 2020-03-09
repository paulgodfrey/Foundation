import { PageTitles } from '@shared/constants/RouteConstants'

const PAGE_TITLE_BRAND_SLUG = '- Foundation'

const setPageTitleByRouteUrl = ({ url }: { url: string }) => {
  document.title = `${PageTitles[url]} ${PAGE_TITLE_BRAND_SLUG}`
}

export { setPageTitleByRouteUrl }
