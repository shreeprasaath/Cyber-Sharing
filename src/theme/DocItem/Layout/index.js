import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import AdComponent from '@site/src/components/AdComponent';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <AdComponent type="content" />
    </>
  );
}
