import React, {type ReactNode, useState} from 'react';
import clsx from 'clsx';
import {ThemeClassNames, useWindowSize} from '@docusaurus/theme-common';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';
import DocSidebarItems from '@theme/DocSidebarItems';
import type {PropSidebarItem} from '@docusaurus/plugin-content-docs';
import type {Props} from '@theme/DocRoot/Layout/Main';

import styles from './styles.module.css';

function MobileDocNavigation(): ReactNode {
  const windowSize = useWindowSize();
  const sidebar = useDocsSidebar();
  const {pathname} = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  if (windowSize !== 'mobile' || !sidebar) {
    return null;
  }

  return (
    <nav className={styles.mobileSidebar} aria-label="Docs navigation">
      <button
        type="button"
        className={styles.mobileSidebarButton}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}>
        <span>Browse docs</span>
        <span className={styles.mobileSidebarIcon} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className={styles.mobileSidebarPanel}>
          <ul
            className={clsx(
              ThemeClassNames.docs.docSidebarMenu,
              'menu__list',
              styles.mobileSidebarList,
            )}>
            <DocSidebarItems
              items={sidebar.items}
              activePath={pathname}
              onItemClick={(item: PropSidebarItem) => {
                if (item.type === 'link' || (item.type === 'category' && item.href)) {
                  setIsOpen(false);
                }
              }}
              level={1}
            />
          </ul>
        </div>
      )}
    </nav>
  );
}

export default function DocRootLayoutMain({
  hiddenSidebarContainer,
  children,
}: Props): ReactNode {
  const sidebar = useDocsSidebar();

  return (
    <main
      className={clsx(
        styles.docMainContainer,
        (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced,
      )}>
      <div
        className={clsx(
          'container padding-top--md padding-bottom--lg',
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced,
        )}>
        <MobileDocNavigation />
        {children}
      </div>
    </main>
  );
}
