import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return <section className="statistics">
        {/* <h2 className="title">Upload stats</h2> */}
        {title && <h2 className="title">Upload stats</h2>}

  <ul className="stat-list">
    {/* <li className="item" key={id}>
      <span className="label">.docx</span>
      <span className="percentage">4%</span>
    </li>
    <li className="item" key={id}>
      <span className="label">.mp3</span>
      <span className="percentage">14%</span>
    </li>
    <li className="item" key={id}>
      <span className="label">.pdf</span>
      <span className="percentage">{percentage}%</span>
    </li>
    <li className="item" key={id}>
      <span className="label">.mp4</span>
      <span className="percentage">{percentage}%</span>
            </li> */}
    {stats.map(el => (
        <li key={el.id}>
              <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
        </li>
    ))}
  </ul>
</section>
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

Statistics.propTypes = {
  el: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;