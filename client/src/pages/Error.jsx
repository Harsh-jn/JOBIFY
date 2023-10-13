import React from 'react'
import { Link,useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  if(error.status === 404){
      return <Wrapper>
        <div>
          <img src={img} alt="not found"/>
          <h3>Ohh! Page not found</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to={"/Dashboard"}>Back Home</Link>
        </div>
      </Wrapper>
  }
  return (
    <Wrapper>
      <div>
          <h1>Error</h1>

      </div>
      <Link to={"/"}>Back Home</Link>
    </Wrapper>
  )
}

export default Error