import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,
   Routes, 
   Route, 
   Navigate,
  Link,
Outlet, 
useParams, 
NavLink,
useNavigate,
useLocation} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/'element={<Home/>}  />
      <Route path='/myapps'element={<Navigate replace to="/learn"/>}  />
      <Route path='learn' element={<Learn/>} >
          <Route path='courses' element={<Courses/>} >
               <Route path=':courseid' element={<CoursesId/>} />
         </Route>
          <Route path='bundles' element={<Bundles/>} />
      </Route>
      <Route path='/dashboard' element={<Dashboard/>}   />
    </Routes>
  </Router>,
  document.getElementById('root')
);

function Home(){
  return (
    <div>
      <h1>Home router</h1>
    </div>
  )
}

function Learn(){
  return (
    <div>
      <h1>Learn router</h1>
      <h4>All courses are listed here</h4>
      <Link className='btn btn-success' to="/learn/courses">
        courses
      </Link>{" "}
      <Link className='btn btn-primary' to="/learn/bundles">
        bundle
      </Link>
      <Outlet/>
    </div>
  )
}

function Courses(){
  const courseList = ["React", "Angular", "Vue", "Nodejs"];
  const randomCourseName = courseList[Math.floor(Math.random()*courseList.length)];

  return (
    <div>
      <h1>Courses list</h1>
      <h4>Courses card</h4>
      <p>MOre test</p>
      <NavLink to={`/learn/courses/${randomCourseName}`} style={(isActive)=>{
        return {
          backgroundColor: isActive ? "pink": "yellow"
        }
      }}>
        {randomCourseName}
      </NavLink>&nbsp;
      <NavLink className='btn btn-light' to={`/learn/courses/tests`}>
        tests
      </NavLink>
      <Outlet/>
    </div>
  )
}

function CoursesId(){
  const navigate = useNavigate();
  const {courseid} = useParams()
  return (
    <div>
      <h1>URL params is : {courseid}</h1>
      <button onClick={()=>{
        navigate("/dashboard", {state: courseid})
      }}
      className='btn btn-warning'>Price
      </button>
      <Link to='/dashboard' state={'Djange'}>Test link</Link>
    </div>
  )
}
function Bundles(){
  return (
    <div>
      <h1>Bundle list</h1>
      <h4>Bundle card</h4>
    </div>
  )
}

function Dashboard(){
  const location = useLocation()
  return (
    <div>
      <h1>Info that i got here is -----------{location.state} </h1>
    </div>
  )
}
reportWebVitals();
