import 'antd/dist/antd.css';
import React from 'react';

import '../assets/scss/image-gallery-with-overrides.scss';
import ProjectsCarousel from '../components/ProjectsCarousel';

import trufla from '../projects/trufla';

const App = () => <ProjectsCarousel items={trufla} />;

export default {
  title: 'Project Details',
  component: App
};

export const ToStorybook = () => <App />;

ToStorybook.story = {
  name: 'to Storybook'
};
