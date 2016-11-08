const React = require('react')

const FlexPractice = React.createClass({
  render: function render () {
    return (
      <div className='flex-container'>
        <div className='left-view'>
          Left View
        </div>
        <div className='right-view'>
          <div className='right-top'>
            <div className='left-view'>
              Top-Left
            </div>
            <div className='right-view'>
              Top-Right
            </div>
          </div>
          <div className='right-bottom'>
            Bottom
          </div>
        </div>
      </div>
    )
  }
})

module.exports = FlexPractice
