import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_JOBS = 'GET_JOBS'

/**
 * ACTION CREATORS
 */
const getAllJobs = jobs => ({type: GET_JOBS}, jobs)

 /**
 * THUNK CREATORS
 */
export const getJobs = () => async dispatch => {
    try {
      const {data} = await axios.get('https://jobs.github.com/positions.json')
      dispatch(getAllJobs(data))
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
      default:
        return state
    }
  }