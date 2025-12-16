import React from "react";
import NextLink, { type LinkProps } from "next/link";

// Forward the ref directly to Next.js Link (which forwards it to the underlying anchor)
const NextLinkBehavior = React.forwardRef<HTMLAnchorElement, LinkProps>(function NextLinkBehavior(
  props,
  ref
) {
  return <NextLink {...props} ref={ref} />;
});

NextLinkBehavior.displayName = "NextLinkBehavior";

export default NextLinkBehavior;
