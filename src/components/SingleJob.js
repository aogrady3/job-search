import React from 'react'
import {connect} from 'react-redux'
import {getOneJob} from '../store/jobs'

class SingleJob extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const jobID = this.props.match.params.id
        this.props.getOneJob(jobID)
    }


    render () {
        const oneJob = this.props.selectedJob
        return (
            <div>
                <h1>{oneJob.company}</h1>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        selectedJob: state.jobs.selectedJob
    }
}

const mapDisptachToProps = dispatch => {
    return {
        getOneJob: (id) => dispatch(getOneJob(id))
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(SingleJob)
