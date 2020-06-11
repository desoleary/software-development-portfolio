import pick from 'lodash-es/pick';
import { any, arrayOf, shape, string } from 'prop-types';
import React from 'react';
import ImageGallery from 'react-image-gallery';

import ProjectContent from './ProjectContent';

const ProjectsCarousel = (props) => {
  const items = props.items.map((project) => {
    const { key, ...rest } = project;
    const otherProps = pick(rest, ['originalClass', 'original', 'thumbnail']);
    const renderItem = () => (
      <ProjectContent
        {...rest}
        key={`${key}-contents`}
        name={key}
        styles={{ display: 'block', margin: 'auto', maxWidth: '800px' }}
      />
    );

    return { renderItem, ...otherProps };
  });
  return (
    <>
      <ImageGallery items={items} additionalClass='sdp-image-gallery' />
    </>
  );
};

ProjectsCarousel.propTypes = {
  items: arrayOf(
    shape({
      key: string,
      title: string,
      original: any,
      thumbnail: any,
      problem: arrayOf(string),
      majorFindings: arrayOf(string),
      outcomes: arrayOf(string)
    })
  )
};

export default ProjectsCarousel;
