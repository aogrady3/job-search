import React from 'react'
import {connect} from 'react-redux'
import {getJobs} from '../store/jobs'

import Job from './Job'

class AllJobs extends React.Component {
    constructor(props) {
        super(props)
      }

    render() {
        console.log(this.state)
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
