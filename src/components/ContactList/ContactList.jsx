import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import { Contacts } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <ContactItem
      key={id}
      name={name}
      number={number}
      onDeleteContact={() => onDeleteContact(id)}
    />
  ));

  return (
    <Contacts>
      <ul>{elements}</ul>
    </Contacts>
  );
};

ContactList.defauitProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
