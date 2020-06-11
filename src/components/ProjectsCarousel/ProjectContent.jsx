import Title from 'antd/es/typography/Title';
import { arrayOf, object, string } from 'prop-types';
import React from 'react';
import ProjectContentListItems from './ProjectContentListItems';

const ProjectContent = (props) => {
  const {
    title,
    problem,
    original: image,
    majorFindings,
    outcomes,
    styles
  } = props;

  return (
    <div style={styles}>
      <Title level={1}>{title}</Title>
      <ProjectContentListItems title='Problem' items={problem} />
      <img style={{ maxWidth: '750px' }} src={image} alt={title} />
      <ProjectContentListItems
        title='Major findings'
        items={majorFindings}
        styles={{ marginTop: '14px' }}
      />
      <ProjectContentListItems title='Outcomes' items={outcomes} />
    </div>
  );
};

ProjectContent.propTypes = {
  original: string,
  majorFindings: arrayOf(string),
  outcomes: arrayOf(string),
  problem: arrayOf(string),
  styles: object,
  title: string
};

export default ProjectContent;
