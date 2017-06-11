var React = require('react');

var About = (props) => {
  return (
    <div className="row">
      <h1 className="text-center page-title">About</h1>
      <p>React Weather is an app to know what is the current weather of a city. Juste use the search box, enter a city of your choice and let the app give you the info you need</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a></li> - This was the Javascript framework used.
        <li><a href="http://openweathermap.org">Open Weather Map</a></li> - I used open weather map to search weather data by city name.
      </ul>
    </div>
  )
};

module.exports = About;
