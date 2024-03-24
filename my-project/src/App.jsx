import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";


const router=createBrowserRouter(
  createRoutesFromElements<Route />
)

function App() {
  return (
    <>
      <Navbar />
      <Title />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
}

export default App;
