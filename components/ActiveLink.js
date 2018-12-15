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
          color: ${router.pathname === href ? 'var(--primary)' : 'var(--light-text)'};
        }
        a:hover {
          color: var(--primary);
        }
      `}</style>
    </a>
  </Link>
)

export default withRouter(ActiveLink)