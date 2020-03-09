import * as React from 'react'
import * as classNames from 'classnames'
import { Link } from '@reach/router'

interface IRouterLink {
  className?: string
  activeClassName: string
  href: string
  text: string
}

const RouterLink = (props: IRouterLink) => {
  const { href, text, className, activeClassName } = props

  const linkClassNames = classNames(className)

  return (
    <Link
      to={href}
      getProps={({ isCurrent }) => {
        return {
          className: isCurrent
            ? classNames(linkClassNames, activeClassName)
            : linkClassNames,
        }
      }}
    >
      {text}
    </Link>
  )
}

export { RouterLink }
