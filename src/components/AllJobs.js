import React from 'react'
import {connect} from 'react-redux'
import {getJobs} from '../store/jobs'

import Job from './Job'

import '../css/AllJobs.css'

class AllJobs extends React.Component {
    constructor(props) {
        super(props)
      }

      componentDidMount() {
          this.props.getJobs();
      }

    render() {
        const jobs = this.props.jobs
           return (
               <div className = 'all-jobs'>
                 <h1>All Jobs</h1>
                 <hr />
                   {jobs.map(job => {
                       return (
                           <Job job={job} key={job.id}/>
                       )
                   })}
               </div>
           )
    }
}

const mapStateToProps = state => {
    return {
      jobs: state.jobs.jobs,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getJobs: () => dispatch(getJobs()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs)
