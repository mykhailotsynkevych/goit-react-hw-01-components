import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendEl = ({
  id,
  isOnline,
  avatar,
  name,
}) => {
  return (
    <li
          className={s.item}
          key={id}
          style={{backgroundColor: !isOnline && 'rgba(255, 0, 0, 0.638)'}}>
      <span className="status">{isOnline}</span>
      <img
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{name}</p>
        </li>
  );
};

FriendEl.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendEl;
