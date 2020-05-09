import React from 'react'
import config from '../../../config'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
        </div>
        <div className='content has-text-centered'>
          <Link className='has-text-primary' to='/terms/terms'>
            Term and conditions
        </Link>
        </div>
        <div className='content has-text-centered'>
          <Link className='has-text-primary' to='/terms/privacy'>
            Privacy policy
        </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
