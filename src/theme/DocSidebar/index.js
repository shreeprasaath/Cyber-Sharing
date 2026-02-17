import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import AdComponent from '@site/src/components/AdComponent';

export default function DocSidebarWrapper(props) {
  return (
    <>
      <DocSidebar {...props} />
      <AdComponent type="sidebar" />
    </>
  );
}
