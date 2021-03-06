import { withRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = ({ children, router, href }) => (
  <Link href={href} prefetch>
    <a>
      {children}

      <style jsx>{`
        a {
          font-size: var(--text-normal);
          text-decoration: none;
          transition: color 0.2s ease;
          color: ${router.pathname === href ? 'var(--light-text)' : 'var(--hint-light)'};
        }
        a:hover {
          color: var(--light-text);
        }
      `}</style>
    </a>
  </Link>
)

export default withRouter(ActiveLink)