import React from 'react'
import ErrorPage from '../../../components/ErrorComponent'
import Error404 from "../../../asserts/images/Error.png"
const Error = () => {
  return (
    <div>
      <ErrorPage image={Error404} Heading="Page Not Found" subheading="OOPS! Looks like you followed a bad link. If you think this is a problem with us , please tell us." />
    </div>
  )
}

export default Error
