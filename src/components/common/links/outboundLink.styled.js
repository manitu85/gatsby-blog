import React from 'react'
import { string, node } from 'prop-types'

const OutboundLink = ({ to, from, target, children, className }) => (
  <a
    href={to}
    target={target}
    className={className}
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

OutboundLink.propTypes = {
  to: string.isRequired,
  from: string.isRequired,
  target: string,
  children: node.isRequired,
  className: string,
}

OutboundLink.defaultProps = {
  target: ``,
  className: ``,
}

export default OutboundLink