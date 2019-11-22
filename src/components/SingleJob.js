import React from 'react'
import {connect} from 'react-redux'
import {getOneJob} from '../store/jobs'

//style
import '../css/OneJob.css'

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
            <div className='one-job'>
                <img src={oneJob.company_logo} />
                <h1>{oneJob.company}</h1>
                <h2>Posted: {oneJob.created_at}</h2>
                <h2>{oneJob.title}</h2>
                <h3>{oneJob.location}</h3>
                <h3>{oneJob.type}</h3>
                <h2>Description</h2>
                <div dangerouslySetInnerHTML={{__html: oneJob.description}} />
                <h2>How to Apply</h2>
                <div dangerouslySetInnerHTML={{__html: oneJob.how_to_apply}} />
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
