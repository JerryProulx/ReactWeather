var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div className="row">
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ul>
        <li>
          <Link to="/?location=Montreal">Montreal</Link>
        </li>
        <li>
          <Link to="/?location=Philadelphia">Philadelphia</Link>
        </li>
      </ul>
    </div>
  )
}

module.exports = Examples;
