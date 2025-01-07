import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const getContactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(getContactsRef);
        const contactsLists = contactsSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setContacts(contactsLists);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <div className="max-w-[400px] mx-auto">
      <Navbar />

      <div>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default App;
