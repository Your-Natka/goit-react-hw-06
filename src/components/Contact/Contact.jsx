import { FiPhone, FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.item}>
      <div className={css.info}>
        <p className={css.name}>
          <FiUser className={css.icon} /> {name}
        </p>
        <p className={css.number}>
          <FiPhone className={css.icon} /> {number}
        </p>
      </div>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
