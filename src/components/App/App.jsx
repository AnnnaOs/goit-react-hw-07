import { RiContactsBook3Line } from 'react-icons/ri';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

const App = () => {
  return (
    <section className={css.phonebook}>
      <div className={css.container}>
        <h1 className={css.mainTitle}>
          <RiContactsBook3Line className={css.mainIcon} />
          Phonebook
        </h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </section>
  );
};

export default App;
