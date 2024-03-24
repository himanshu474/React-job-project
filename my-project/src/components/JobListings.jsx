import {useState,useEffect} from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';


const JobListings = ({isHome=false}) => {
    const[jobs,setJobs]=useState([]);
  return (
<section className=' bg-blue-100 px-4 py-10'>
    <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
            {isHome?'RecentJobs':}
        </h2>

    </div>

</section>
  )
}

export default JobListings