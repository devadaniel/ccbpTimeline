// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <div className="project-details-container">
      <div className="project-card">
        <img src={imageUrl} alt="project" className="image-url" />
        <div className="duration-project-title-container">
          <h1 className="project-title">{projectTitle}</h1>
          <div className="calender-duration-container">
            <AiFillCalendar className="calender-icon" />
            <p className="duration">{duration}</p>
          </div>
        </div>

        <p className="description">{description}</p>
        <a href={projectUrl} className="project-url-link">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
