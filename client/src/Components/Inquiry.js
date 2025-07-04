import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Inquiry.css';
import axios from 'axios';
import Popup from 'reactjs-popup';

const Inquiry = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    query: '',
    qty: '',
    size: '',
    material: '',
    brand: '',
    type: '',
    model: '',
    Query: ''
  });
  const [errors, setErrors] = useState({});
  const [queryText, setQueryText] = useState('');
  const [showQueryField, setShowQueryField] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/UmangEngineeringServices' || path === '/spares') {
      setShowQueryField(false);
      setQueryText(
        'Please give me a quote for sawing of _____qty of ____ size (mm) of ____ material.'
      );
    } else if (path === '/singular') {
      setShowQueryField(false);
      setQueryText(
        'Maximum size of material I want to cut is __ mm in diameter of ___ material. Please suggest the best machine suitable.'
      );
    } else if (path === '/UmangMarktingService') {
      setShowQueryField(false);
      setQueryText(
        'Please give me a quote for Brand_____ and Type____ , Model _____'
      );
    } else {
      setShowQueryField(true);
      setQueryText('');
    }
  }, [location.pathname]);

  const handleInquiryClick = () => {
    setShowForm((prevState) => !prevState);
    setShowThankYou(false);
  };

  const handleCloseClick = () => {
    setShowForm(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    // Clear the error for this field when the user starts typing
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (!/^[a-zA-Z\s]+$/.test(formData.name)) newErrors.name = 'Name should contain only letters';
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.category) newErrors.category = 'Category is required';
    
    if (showQueryField && !formData.query.trim()) {
      newErrors.query = 'Query is required';
    } else if (!showQueryField) {
      if (location.pathname === '/UmangEngineeringServices' || location.pathname === '/spares') {
        if (!formData.qty.trim()) newErrors.qty = 'Quantity is required';
        else if (!/^\d+$/.test(formData.qty)) newErrors.qty = 'Quantity should be a number';
        
        if (!formData.size.trim()) newErrors.size = 'Size is required';
        else if (!/^\d+$/.test(formData.size)) newErrors.size = 'Size should be a number';
        
        if (!formData.material.trim()) newErrors.material = 'Material is required';
        else if (!/^[a-zA-Z\s]+$/.test(formData.material)) newErrors.material = 'Material should contain only letters';
      } else if (location.pathname === '/singular') {
        if (!formData.size.trim()) newErrors.size = 'Size is required';
        else if (!/^\d+$/.test(formData.size)) newErrors.size = 'Size should be a number';
        
        if (!formData.material.trim()) newErrors.material = 'Material is required';
        else if (!/^[a-zA-Z\s]+$/.test(formData.material)) newErrors.material = 'Material should contain only letters';
      } else if (location.pathname === '/UmangMarktingService') {
        if (!formData.brand.trim()) newErrors.brand = 'Brand is required';
        if (!formData.type.trim()) newErrors.type = 'Type is required';
        if (!formData.model.trim()) newErrors.model = 'Model is required';
        if (!formData.serviceDetails.trim()) newErrors.serviceDetails = 'Service details are required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    let queryString = formData.query;
    if (!showQueryField) {
      if (location.pathname === '/UmangEngineeringServices' || location.pathname === '/spares') {
        queryString = `Qty: ${formData.qty}, Size: ${formData.size}, Material: ${formData.material}`;
      } else if (location.pathname === '/singular') {
        queryString = `Size: ${formData.size}, Material: ${formData.material}`;
      } else if (location.pathname === '/UmangMarktingService') {
        queryString = `Brand: ${formData.brand}, Type: ${formData.type}, Model: ${formData.model}`;
      }
    }

    const data = {
      ...formData,
      query: queryString
    };

    try {
      const response = await axios.post('/api/inquiry', data);

      if (response.status === 200) {
        setShowForm(false);
        setShowThankYou(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          category: '',
          query: '',
          qty: '',
          size: '',
          material: '',
          brand: '',
          type: '',
          model: '',
         
        });
      } else {
        alert('Failed to send inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the inquiry.');
    }
  };

  return (
    <div>
      <button className="inquiry-btn" onClick={handleInquiryClick}>
        <i className="fas fa-envelope"></i> Inquiry
      </button>

      {showForm && (
        <div className="form-container">
          <button className="close-btn" onClick={handleCloseClick}>
            &times;
          </button>
          <h2>Inquiry</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Enter your company name"
              />
              {errors.company && <span className="error">{errors.company}</span>}
            </div>

            <div className="form-group">
              <select 
                name="category" 
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select Category</option>
                <option value="Wikus">Wikus</option>
                <option value="Tenryu">Tenryu</option>
                <option value="Singular">Singular</option>
                <option value="Solar">Solar</option>
                <option value="Others">Others</option>
              </select>
              {errors.category && <span className="error">{errors.category}</span>}
            </div>

            {showQueryField ? (
              <div className="form-group">
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleInputChange}
                  placeholder="Write your query"
                />
                {errors.query && <span className="error">{errors.query}</span>}
              </div>
            ) : (
              <div className="form-group">
                <div className="static-text large-text">
                  {queryText}
                </div>
                <div className="input-fields">
                  {location.pathname === '/UmangEngineeringServices' || location.pathname === '/spares' ? (
                    <>
                      <input
                        type="text"
                        name="qty"
                        placeholder="Quantity"
                        value={formData.qty}
                        onChange={handleInputChange}
                      />
                      {errors.qty && <span className="error">{errors.qty}</span>}
                      <input
                        type="text"
                        name="size"
                        placeholder="Size"
                        value={formData.size}
                        onChange={handleInputChange}
                      />
                      {errors.size && <span className="error">{errors.size}</span>}
                      <input
                        type="text"
                        name="material"
                        placeholder="Material"
                        value={formData.material}
                        onChange={handleInputChange}
                      />
                      {errors.material && <span className="error">{errors.material}</span>}
                    </>
                  ) : location.pathname === '/singular' ? (
                    <>
                      <input
                        type="text"
                        name="size"
                        placeholder="Size (mm in diameter)"
                        value={formData.size}
                        onChange={handleInputChange}
                      />
                      {errors.size && <span className="error">{errors.size}</span>}
                      <input
                        type="text"
                        name="material"
                        placeholder="Material"
                        value={formData.material}
                        onChange={handleInputChange}
                      />
                      {errors.material && <span className="error">{errors.material}</span>}
                    </>
                  ) : location.pathname === '/UmangMarktingService' ? (
                    <>
                      <input
                        type="text"
                        name="brand"
                        placeholder="Brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                      />
                      {errors.brand && <span className="error">{errors.brand}</span>}
                      <input
                        type="text"
                        name="type"
                        placeholder="Type"
                        value={formData.type}
                        onChange={handleInputChange}
                      />
                      {errors.type && <span className="error">{errors.type}</span>}
                      <input
                        type="text"
                        name="model"
                        placeholder="Model"
                        value={formData.model}
                        onChange={handleInputChange}
                      />
                      {errors.model && <span className="error">{errors.model}</span>}
                      {/* <input
                        type="text"
                        name="Query"
                        placeholder="Query"
                        value={formData.Query}
                        onChange={handleInputChange}
                      />
                      {errors.Query && <span className="error">{errors.Query}</span>} */}
                    </>
                  ) : null}
                </div>
              </div>
            )}

            <div className="form-group">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      <Popup open={showThankYou} closeOnDocumentClick onClose={() => setShowThankYou(false)}>
        <div className="thank-you-popup">
          <h2>Thank You!</h2>
          <p>Your inquiry has been successfully submitted. We will get back to you shortly.</p>
          <button onClick={() => setShowThankYou(false)}>Close</button>
        </div>
      </Popup>
    </div>
  );
};

export default Inquiry;