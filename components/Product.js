import React from 'react'
import ReactDOM from 'react-dom'

class Product extends React.Component {
  render() {
    return (
      <div className = 'product'>
        <ul>
          <li>{ this.props.name }</li>
          <li>{ this.props.producer }</li>
          <li>{ this.props.hasWatermark }</li>
          <li>{ this.props.color }</li>
          <li>{ this.props.weight }</li>
        </ul>
      </div>
    )
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function (props, propName, component) {
    if (props[propName] === undefined) {
      return new Error('Invalid weight!')
    } else if (isNaN(props[propName])) {
      return new Error('Invalid weight number!')
    } else if (props[propName] < 80 || props[propName] > 300) {
      return new Error('Invalid weight.')
    }
  }
}


// var emailPropType = function (props, propName, component) {
//   if (!isEmail(props[propName])) {
//     return new Error('Invalid email!');
//   }
// };

Product.defaultProps = {
  hasWatermark: false
}
module.exports = Product;
