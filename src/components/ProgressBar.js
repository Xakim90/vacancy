import React from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'antd'

const ProgressBar = ({ percentage }) => {
  return (
    <div>
      <Progress percent={percentage} />
    </div>
  )
}

// ProgressBar.propTypes = {
//   percentage: PropTypes.number.isRequired
// }

export default ProgressBar