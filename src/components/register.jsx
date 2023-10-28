
import React, { useState } from 'react';
import './registration.css'; 

const CookingConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    cuisine: [],
    comments: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, options } = e.target;

    if (name === 'cuisine') {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setFormData({
        ...formData,
        cuisine: selectedOptions,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!formData.phoneNumber.trim()) {
      validationErrors.phoneNumber = 'Phone Number is required';
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      validationErrors.phoneNumber = 'Invalid phone number format';
    }

    if (formData.cuisine.length === 0) {
      validationErrors.cuisine = 'Select at least one cuisine';
    }

    if (!formData.comments.trim()) {
      validationErrors.comments = 'Address is required';
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const isValidEmail = (email) => {
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form data submitted:', formData);
      alert("You have successfully Registered !!!");
    }
  };

  return (
    <div className="form-container1"> 
      <h2 className="form-header">Registration Form</h2>
      <marquee> Please Provide all the details Carefully!!</marquee>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder='Enter Name'
            onChange={handleChange}
            className="form-input"
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter Email'
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder='Enter PhoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input"
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cuisine" className="form-label">
            Preferred Cuisines (Hold Ctrl to select multiple):
          </label>
          <select
            id="cuisine"
            name="cuisine"
            multiple
            value={formData.cuisine}
            onChange={handleChange}
            className="form-input"
          >
            <option value="italian">Italian</option>
            <option value="indian">Indian</option>
            <option value="mexican">Mexican</option>
            <option value="chinese">Chinese</option>
            <option value="thai">Thai</option>
          </select>
          {errors.cuisine && <span className="error">{errors.cuisine}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="comments" className="form-label">
            Address:
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="form-textarea"
          />
          {errors.comments && <span className="error">{errors.comments}</span>}
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CookingConsultationForm;
