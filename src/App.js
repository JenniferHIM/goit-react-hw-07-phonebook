import React from 'react';
import { ToastContainer } from 'react-toastify';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />

      <div className="myPhonebook">
        <h2 className="bigHeader">My phonebook</h2>
        <ContactForm />
        <Filter />
        <h2 className="smallHeader">My contacts:</h2>
        <ContactList />
      </div>
    </div>
  );
};

export default App;