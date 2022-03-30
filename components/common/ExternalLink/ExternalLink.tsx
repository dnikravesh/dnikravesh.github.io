import * as React from 'react';

export type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ExternalLink = React.forwardRef<HTMLAnchorElement, ExternalLinkProps>(({ children, ...props }, ref) => {
  return (
    <a className='external' ref={ref} rel='noopener noreferrer' target='_blank' {...props}>
      {children}
    </a>
  );
});

ExternalLink.displayName = 'ExternalLink';
