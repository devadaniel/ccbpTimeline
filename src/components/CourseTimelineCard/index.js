// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails
  return (
    <div className="course-details-container">
      <div className="heading-days-container">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="days-container">
          <AiFillClockCircle className="time-icon" />
          <p className="days">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tag-list-item">
        {tagsList.map(eachTagItem => (
          <li key={eachTagItem.id}>
            <p className="each-tag-item">{eachTagItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
