import Title from 'antd/es/typography/Title';
import kebabCase from 'lodash-es/kebabCase';
import { arrayOf, object, string } from 'prop-types';
import React from 'react';

const ProjectContentListItems = (props) => {
  const { title, items, styles } = props;
  const liPrefix = kebabCase(title.slice(0, 8));

  return (
    <div style={styles}>
      <Title level={4}>{title}</Title>
      <ul>
        {items.map((content, index) => {
          const key = `li-${liPrefix}-${index}`;
          return <li key={key}>{content}</li>;
        })}
      </ul>
    </div>
  );
};

ProjectContentListItems.defaultProps = {
  styles: {}
};

ProjectContentListItems.propTypes = {
  items: arrayOf(string),
  styles: object,
  title: string
};

export default ProjectContentListItems;
