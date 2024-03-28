import React from 'react'
import ErrorPage from '../../../components/ErrorComponent'
import Maintain from "../../../asserts/images/maintainence.png"
const Maintaince = () => {
  return (
    <div>
      <ErrorPage image={Maintain} Heading="Under Maintaince" subheading="Sorry for inconvience but we're performing some Maintaince at the movement. We will'be back online shortly!" />
    </div>
  )
}

export default Maintaince
