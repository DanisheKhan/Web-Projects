import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ContactCard = ({contact}) => {
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
                <FaEdit className="text-white text-xl" />
              </button>
              <button className="text-red-500">
                <MdDelete className="text-white text-xl" />
              </button>
            </div>
          </div>
    </div>
  )
}

export default ContactCard
