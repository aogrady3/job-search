import React from 'react' 
import {Link} from 'react-router-dom'

//import CSS
import '../css/Job.css'

const Job = (props) => {
    const job = props.job
    return (
        <div className ='full-job'>
            <div className = 'job-details'>
                <div className='job-title'>
                <Link 
                to={`/job/${job.id}`}>
                    <p>{job.title}</p> </Link>
                    <span>{job.company}</span><span> - {job.type}</span>              
                </div>
                <div className = 'job-info'>
                    <p>Location: {job.location}</p>
                    <p>Posted: {job.created_at}</p>
                </div>
            </div>
            
        </div>

    )
}

export default Job