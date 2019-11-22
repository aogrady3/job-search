import React from 'react'
import {connect} from 'react-redux'
import {getJobs} from '../store/jobs'

import Job from './Job'

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
               <div>
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
