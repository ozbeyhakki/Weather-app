var React = require('react');
var {Link} =require('react-router')

var Examples = (props) => {
  return (
    <div>
      <h1 className='text-center'> Examples</h1>
      <p>Here a few location</p>
      <ol>
        <li>
          <Link to= '/?location=London'>London</Link>
        </li>
        <li>
          <Link to= '/?location=Istanbul'>Istanbul</Link>
        </li>
      </ol> 
    </div>
  )
};

module.exports = Examples;
