const initialState = [
    { id: 0, name: "Ashab", email: "ashab654@gmail.com", phone: 1234567890 },
    { id: 1, name: "Harun", email: "hrun45@gmail.com", phone: 4567891230 },
    { id: 2, name: "Asif", email: "asif455@gmail.com", phone: 4567891230 },
    { id: 3, name: "Mahabub", email: "mahabub45@gmail.com", phone: 4567891230 },
    { id: 4, name: "Arif", email: "arif455@gmail.com", phone: 4567891230 },
  ];
  
  export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        return state;
      case "UPDATE_CONTACT":
        const contactUpdate = state.filter((contact) =>
          contact.id === action.payload.id
            ? Object.assign(contact, action.payload)
            : contact
        );
        state = contactUpdate;
        return state;
      case "RESET_CONTACT":
        state = [{ name: null, email: null, phone: null }];
        return state;
      default:
        return state;
    }
  };
  