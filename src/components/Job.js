import React from 'react' 

//import CSS
import '../css/Job.css'

const Job = (props) => {
    const job = props.job
    return (
        <div className = 'single-job-post'>
            <img src={job.company_logo} />
            <h3>{job.company}</h3>
        </div>
    )
}

export default Job