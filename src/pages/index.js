import React from 'react';
import Layout from '@theme/Layout';

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
      <div>
        <p>
          <Translate>Hi!</Translate>
          <br />
          <Translate id="homepage.intro.thisIs">This is Juanma López Portfolio.</Translate>
          <br />
          <Translate id="homepage.intro.iAm">I'm a Biomedical Engineer in love with Data Science</Translate>
        </p>
      </div>
    </Layout>
  );
}
