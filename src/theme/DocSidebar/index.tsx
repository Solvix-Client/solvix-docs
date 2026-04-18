import React, {type ReactNode} from 'react';
import {useWindowSize} from '@docusaurus/theme-common';
import DocSidebarDesktop from '@theme/DocSidebar/Desktop';
import type {Props} from '@theme/DocSidebar';

export default function DocSidebar(props: Props): ReactNode {
  const windowSize = useWindowSize();

  if (windowSize === 'mobile') {
    return null;
  }

  return <DocSidebarDesktop {...props} />;
}
