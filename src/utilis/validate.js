import React from 'react'

const validate = (formData) => {
     const errors = {
      name: "",
      email: "",
      phone: "",
    };
    if (formData.name.trim().length < 3) {
      errors.name = "Name must have 3 char atleast";
    }
    if (!formData.email.includes("@")) {
      errors.email = "Email must include @";
    }
    if (formData.phone.length < 11) {
      errors.phone = "Phone No. must have 11 numbers";
    }
   
   
    return errors;
  
}

export default validate