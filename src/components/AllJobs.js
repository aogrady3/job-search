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
        console.log(this.props)
        const jobs = this.props.jobs
        return (
            <Job />
        )
    }
}

const mapStateToProps = state => {
    return {
      jobs: state.jobs,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getJobs: () => dispatch(getJobs()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AllJobs)
