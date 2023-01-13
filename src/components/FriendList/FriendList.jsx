import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendEl from './FriendEl';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({id, ...rest}) => (
        <FriendEl key={id} {...rest} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rest: PropTypes.shape.isRequired,
    })
  ),
};

export default FriendList;
