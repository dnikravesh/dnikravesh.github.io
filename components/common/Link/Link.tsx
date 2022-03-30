import * as React from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { ExternalLink } from '@/components/common';

export interface LinkProps extends NextLinkProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Link = React.memo<LinkProps>(
  ({ children, href, as, replace, scroll, shallow, prefetch, locale, ...rest }) => {
    const isExternal = href.trim().startsWith('http') || href.trim().endsWith('.pdf') || false;
    const isAnchor = /^#/.test(href.trim());

    if (isExternal) {
      return (
        <ExternalLink href={href.trim()} {...rest}>
          {children}
        </ExternalLink>
      );
    }

    if (isAnchor) {
      return (
        <a href={href.trim()} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <NextLink
        as={as}
        href={href.trim()}
        locale={locale}
        passHref
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a {...rest}>{children}</a>
      </NextLink>
    );
  },
);

Link.displayName = 'Link';
