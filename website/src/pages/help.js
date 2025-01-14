import React from 'react';
import Layout from '@theme/Layout';

import clsx from 'clsx';

import styles from '../../static/css/modules.css';

const Help = (props) => {
  const supportLinks = [
    {
      content: 'Learn more using the ',
      title: 'Browse Docs',
      link: 'documentation on this site.',
      href: 'docs',
    },
    {
      content: 'Ask questions about the documentation and project in our ',
      title: 'Join the community',
      link: 'Slack.',
      href: 'https://react-native-elements-slack.herokuapp.com',
    },
    {
      content: `Find out what's new for each release by checking the `,
      title: 'Stay up to date',
      link: 'releases tab on the GitHub repo.',
      href:
        'https://github.com/react-native-elements/react-native-elements/releases',
    },
  ];

  const FeatureHeading = (props) => {
    return (
      <div className="row">
        {supportLinks.map((link) => {
          return (
            <div className="col">
              <h2 className={clsx(styles.featureHeading)}>{link.title}</h2>
              <p className="padding-horiz--md">
                {link.content} <a href={link.href}>{link.link}</a>
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Layout className="mainContainer documentContainer postContainer">
      <div className="container margin-vert--xl">
        <header className="postHeader">
          <h2>Need help?</h2>
        </header>
        <p>
          Even with the great documentation, you're likely to get stuck at some
          point. If you've encountered a bug with React Native Elements, please{' '}
          <a
            href="https://github.com/react-native-elements/react-native-elements/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            post an issue
          </a>{' '}
          and one of our maintainers will happily reach out to you. No
          question's too silly to ask but we recommend checking the
          documentation and{' '}
          <a
            href="https://github.com/react-native-elements/react-native-elements/issues?utf8=✓&q="
            target="_blank"
            rel="noopener noreferrer"
          >
            existing issues
          </a>{' '}
          before opening and a new one.
        </p>
        <div className={styles.section}>
          <div className="container text--center margin-bottom--xl">
            <FeatureHeading />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
