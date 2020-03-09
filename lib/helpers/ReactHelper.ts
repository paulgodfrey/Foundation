const staticify = require('staticify')('./public')
const TITLE_FRAGMENT = ' | Foundation'

const ReactBundleWrapper = ({
  title,
  reactBundleName,
}: {
  title: string
  reactBundleName: string
}) => {
  const pageTitle = `${title}${TITLE_FRAGMENT}`
  const reactHydrateBundlePath = staticify.getVersionedPath(
    `/js/dist/${reactBundleName}.js`
  )

  return `
<!DOCTYPE html>
<html>
  <head>
    <title>${pageTitle}</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible", content="IE=edge">
    <meta name="viewport", content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body>
    <div id="react-root"></div>
    <script src="${reactHydrateBundlePath}"></script>
  </body>
</html>
`
}

export { ReactBundleWrapper }
