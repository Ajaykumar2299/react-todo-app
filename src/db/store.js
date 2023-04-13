 import { toast } from "react-toastify";


 let contacts =JSON.parse(localStorage.getItem('contacts')) ||[];

 //update the value in localstorage

 const UpdateStorage = (data) => {
    localStorage.setItem('contacts',JSON.stringify(data))
 }

 //store logic
 export const createContact = (contact) => {
    // check if email exists in dp or not 
    let exEmail = contacts.find((item) => item.email===contact.email);
    //check if mobile exists in dp or not 
    let exMobile = contacts.find((item) => item.mobile===contact.mobile);

    if(exEmail) {
        toast.warning('User Email already registered');
    } else if (exMobile){
        toast.warning('User mobile number already registered.');
    }else {
        //if mobile and email not exits -> store new contactb data in local storage

        contacts.push(contact);
        UpdateStorage(contacts);
        toast.success('new contact created successfully');
        window.location.href ="/";
    }
 };

 // all contacts read logic
 export const readcontacts = () => {
    return contacts;
 }

 //return singn contact

 export const readcontact = (id) => {
    let extContact = contacts.find((item) => item.id == id)
    return extContact;
 }

 // to update data
   export const UpdateContact = (id,contect) =>{
      let extIndex = contacts.findIndex((item) => item.id == id);
      let data ={
         id:Number(id),
         ...contect
      };

      contacts. splice(extIndex,1,data)
      UpdateStorage(contacts)
      toast.success('successfully updated');
      window.location.href ="/";
   }

   //delete

   export const deleteContact = (id) => {
      let extIndex = contacts.findIndex((item) => item.id ==id)
      contacts.splice(extIndex,1)
      UpdateStorage(contacts)
      toast.success('contact deleted successfully');
      window.location.href = "/";
   }