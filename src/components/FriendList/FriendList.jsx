import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return  <ul className={s.friendList}>
    {friends.map(friend => (
      <li className={s.item} key={friend.id} style={{ backgroundColor: !friend.isOnline && "rgba(255, 0, 0, 0.638)" }}>
        <span className="status">{friend.isOnline}</span>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={s.name}>{friend.name}</p>
      </li>
    ))}
  </ul>;


};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
