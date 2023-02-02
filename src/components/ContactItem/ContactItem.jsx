import PropTypes from 'prop-types';
import { Contact } from './ContactItem.styled';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <Contact>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDeleteContact}>Delete</button>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
