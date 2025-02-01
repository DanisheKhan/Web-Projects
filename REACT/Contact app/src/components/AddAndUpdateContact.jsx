import React from "react";
import Model from "./Model";
import { Field, Formik, Form } from "formik";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"; // Ensure Firestore is correctly installed
import { db } from "../config/firebase"; 
import { toast } from "react-toastify";
import * as yup from "yup";

const contactSchemaValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

const AddAndUpdateContact = ({ isOpen, onClose, contact, isUpdate }) => {
  const addContact = async (contact) => {
    try {
      const ContactRef = collection(db, "contacts");
      await addDoc(ContactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  

  const updateContact  = async (contact, id) => {
    try {
      const ContactRef = doc(db, "contacts",id);
      await updateDoc(ContactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Model isOpen={isOpen} onClick={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={isUpdate ? {
            name: contact.name,
            email: contact.email,
          } : {
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) :
            addContact(values);

          }}
        >
          {() => (
            <Form className="flex flex-col gap-4 p-5">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="name">Name</label>
                <Field
                  className="bg-transparent py-2 border rounded-md px-2"
                  type="text"
                  name="name"
                  id="name"
                />
                
              </div>
              <div className="flex gap-2 flex-col">
                <label htmlFor="email">Email</label>
                <Field
                  className="bg-transparent py-2 border rounded-md px-2"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex border rounded-md py-2 items-center justify-center">
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </Model>
    </div>
  );
};

export default AddAndUpdateContact;
