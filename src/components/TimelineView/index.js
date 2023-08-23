// Write your code he
import './index.css'

import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLine = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="app-container">
      <h1 className="my-journey-heading">
        MY JOURNEY OF <br />
        <h1 className="ccbp-heading"> CCBP 4.0</h1>
      </h1>
      <div className="chrono-container">
        <Chrono
          theme={{
            secondary: 'white',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachItem => renderTimeLine(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
