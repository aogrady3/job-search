import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_JOBS = 'GET_JOBS'
const GET_SINGLE_JOB = 'GET_SINGLE_JOB'

/**
 * ACTION CREATORS
 */
const gotAllJobs = jobs => ({type: GET_JOBS, jobs})
const gotOneJob = job => ({type: GET_SINGLE_JOB, job})

 /**
 * THUNK CREATORS
 */
export const getJobs = () => async dispatch => {
    try {
      const {data} = await axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json')
      dispatch(gotAllJobs(data))
    } catch (err) {
      console.error(err)
    }
  }

  export const getOneJob = (id) => async dispatch => {
    try {
      const {data} = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
      dispatch(gotOneJob(data))
    } catch (err) {
      console.error(err)
    }
  }

 /**
 * INITAL STATE
 */

const defaultJobs = {
    jobs: [],
    selectedJob: [{}]
  }
  
 /**
 * REDUCER
 */
export default function(state = defaultJobs, action) {
    switch (action.type) {
      case GET_JOBS:
        return {...state, jobs: action.jobs}
      case GET_SINGLE_JOB:
        return {...state, selectedJob: action.job}
      default:
        return state
    }
  }