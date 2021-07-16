export const getContacts = state => state.phoneBook.contacts;
export const getFilter = state => state.phoneBook.filter;
// export const getContactsLoading = state => state.phoneBook.loading;

export const getVisibleContacts = state => {
  const arr = getContacts(state);
  const filterArr = getFilter(state);

  return arr.filter(el =>
    el.contactName.toLowerCase().includes(filterArr.toLowerCase()),
  );
};



