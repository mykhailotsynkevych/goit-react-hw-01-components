import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendEl from './FriendEl';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li
          className={s.item}
          key={friend.id}
          style={{backgroundColor: !friend.isOnline && 'rgba(255, 0, 0, 0.638)'}}>
          <FriendEl
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
