import React from 'react'
import PropTypes from 'prop-types'

const conditions = ({ listItems }) => (
  <div>
    {listItems.map((list, id) => (
      <article className='message' key={id}>
        <div className='message-body'>
          {list.item}
        </div>
      </article>
    ))}
  </div>
)

conditions.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
    }),
  ),
}

export default conditions
