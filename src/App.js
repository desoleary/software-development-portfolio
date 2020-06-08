import WorkIcon from '@material-ui/icons/Work';
import TextAntd from 'antd/es/typography/Text';
import { element, string } from 'prop-types';
import React, { Component } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement as VerticalTimelineElementLib,
} from 'react-vertical-timeline-component';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import resumeData from './resumeData';

const Text = (props) => {
  const {children} = props;
  const styles = { fontSize: '12px' };
  return <TextAntd {...props} style={styles}>{children}</TextAntd>;
}

const VerticalTimelineElement = (props) => {
  const {companyName, role, date, summary, acquiredSkills} = props;

  return <VerticalTimelineElementLib
    className="vertical-timeline-element--work"
    date={date}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon/>}
  >
    <h3 className="vertical-timeline-element-title">{companyName}</h3>
    <h4 className="vertical-timeline-element-subtitle">{role}</h4>
    <p><Text>{summary}</Text></p>
    <p><Text strong>Acquired Skills: </Text><Text>{acquiredSkills}</Text></p>
  </VerticalTimelineElementLib>;
}

const companies = [{date: 'December 2018 - present', companyName: 'Trufla Technology', role: 'Senior Software Architect/Developer', summary: 'Architect and major contributor to a brand new feature packed product line that supports internal and external workflow APIs with completely different data models and implemented as a set of re-usable React components fueled by domain specific JSON Schemas.', acquiredSkills: 'React, Rails, ES6, Apollo & Ruby GraphQL, PostgreSQL, Ant Design, I18next, Google Places API, React JSON Schema Form, Storybook, Jest, Cypress, Rspec and more besides.'}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <VerticalTimeline>
          {companies.map((timelineProps) => <VerticalTimelineElement {...timelineProps} />)}
        </VerticalTimeline>
        {/*<Resume resumeData={resumeData}/>*/}
        {/*<Portfolio resumeData={resumeData}/>*/}
        {/*<Testimonials resumeData={resumeData}/>*/}
        {/*<ContactUs resumeData={resumeData}/>*/}
        {/*<Footer resumeData={resumeData}/>*/}
      </div>
    );
  }
}

export default App;

Text.propTypes = {
  children: element.isRequired
}

VerticalTimelineElement.propTypes = {
  acquiredSkills: string.isRequired,
  companyName: string.isRequired,
  date: string.isRequired,
  role: string.isRequired,
  summary: string.isRequired
}
