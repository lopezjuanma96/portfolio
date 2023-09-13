import React from 'react';
import Layout from '@theme/Layout';

import Presentation from './_presentation';
import Skillset from './_skillset';

import styles from './index.module.css';

import Translate, {translate} from '@docusaurus/Translate';
/* 
from https://docusaurus.io/docs/i18n/tutorial#translate-your-react-code

Locate all text labels in your React code that will be visible to your users, and mark them with the translation APIs. There are two kinds of APIs:

The <Translate> component wraps a string as a JSX element;
The translate() callback takes a message and returns a string.

Use the one that better fits the context semantically. For example, the <Translate> can be used as React children, while for props that expect a string, the callback can be used.
*/

export default function Hello() {
  return (
    <Layout title="Juanma López" description="Juanma López Portfolio">
      <Presentation></Presentation>
      <Skillset></Skillset>
    </Layout>
  );
}
