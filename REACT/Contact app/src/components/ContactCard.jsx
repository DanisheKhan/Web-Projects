import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        key={contact.id}
        className="flex items-center justify-between p-5 border mt-4 rounded-3xl "
      >
        <div>
          <div className="flex items-center gap-4">
            <FaUserCircle />
            <h1 className="font-bold">{contact.name}</h1>
          </div>
          <div className="flex items-center gap-4">
            <MdEmail />
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-red-500">
            <FaEdit onClick={onOpen} className="text-white text-xl" />
          </button>
          <button className="text-red-500">
            <MdDelete
              onClick={() => deleteContact(contact.id)}
              className="text-white text-xl"
            />
          </button>
        </div>
      </div>
      <AddAndUpdateContact
        isUpdate
        contact={contact}
        onClose={onClose}
        isOpen={isOpen}
      />
    </div>
  );
};

export default ContactCard;
