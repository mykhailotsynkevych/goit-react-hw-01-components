import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendEl = ({ isOnline, avatar, name }) => {
  return (
    <li
      className={s.item}
      style={{ backgroundColor: !isOnline && 'rgba(255, 0, 0, 0.638)' }}
    >
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendEl.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendEl;
