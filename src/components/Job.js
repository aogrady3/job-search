import React from 'react' 
import {Link} from 'react-router-dom'

//import CSS
import '../css/Job.css'

const Job = (props) => {
    const job = props.job
    return (
        <Link 
        to={`/job/${job.id}`}>
        <div className = 'single-job-post'>
            <img src={job.company_logo} />
            <h3>{job.company}</h3>
            <h4>{job.title}</h4>
            <h4>Location: {job.location}</h4>
            <h4>Type: {job.type}</h4>
            <h6>Posted: {job.created_at}</h6>
        </div>
        </Link>
    )
}

export default Job