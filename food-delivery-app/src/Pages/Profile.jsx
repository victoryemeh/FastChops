import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import "../Components/Dashboard/dashboard.css";
import avatar from "../assets/avatar.svg";

function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Victory",
    lastName: "Emeh",
    email: "victoryemeh98@gmail.com",
    phone: "+234 7046860345",
    profileImage: avatar,
  });

  const [formData, setFormData] = useState(profile);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      address: "123 Main St, Lagos, Nigeria",
      isDefault: true,
    },
    {
      id: 2,
      type: "Work",
      address: "456 Business Ave, Lagos, Nigeria",
      isDefault: false,
    },
  ]);

  const [preferences, setPreferences] = useState({
    vegetarian: false,
    glutenFree: false,
    spicyFood: true,
    notifications: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveProfile = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setPreferences({
      ...preferences,
      [name]: checked,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <DashboardLayout>
      <div className="profile-container">
        <h2>My Profile</h2>

        {/* Profile Information Section */}
        <div className="profile-section">
          <div className="section-header">
            <h3>Profile Information</h3>
            {!isEditing && (
              <button
                className="btn-edit"
                onClick={() => {
                  setIsEditing(true);
                  setFormData(profile);
                }}
              >
                Edit Profile
              </button>
            )}
          </div>

          {isEditing ? (
            <form className="profile-form">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter first name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter last name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-save"
                  onClick={handleSaveProfile}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="profile-info">
              <div className="profile-header">
                <img
                  src={profile.profileImage}
                  alt="Profile"
                  className="profile-avatar"
                />
                <div className="profile-details">
                  <p className="profile-name">
                    {profile.firstName} {profile.lastName}
                  </p>
                  <p className="profile-email">{profile.email}</p>
                  <p className="profile-phone">{profile.phone}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Saved Addresses Section */}
        <div className="profile-section">
          <div className="section-header">
            <h3>Saved Addresses</h3>
          </div>
          <div className="addresses-list">
            {addresses.map((addr) => (
              <div key={addr.id} className="address-card">
                <div className="address-content">
                  <h4>{addr.type}</h4>
                  <p>{addr.address}</p>
                  {addr.isDefault && (
                    <span className="badge-default">Default</span>
                  )}
                </div>
                <div className="address-actions">
                  <button className="btn-small">Edit</button>
                  <button className="btn-small btn-danger">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-add-address">+ Add New Address</button>
        </div>

        {/* Dietary Preferences Section */}
        <div className="profile-section">
          <div className="section-header">
            <h3>Dietary Preferences</h3>
          </div>
          <div className="preferences-list">
            <div className="preference-item">
              <input
                type="checkbox"
                id="vegetarian"
                name="vegetarian"
                checked={preferences.vegetarian}
                onChange={handlePreferenceChange}
              />
              <label htmlFor="vegetarian">Vegetarian</label>
            </div>
            <div className="preference-item">
              <input
                type="checkbox"
                id="glutenFree"
                name="glutenFree"
                checked={preferences.glutenFree}
                onChange={handlePreferenceChange}
              />
              <label htmlFor="glutenFree">Gluten Free</label>
            </div>
            <div className="preference-item">
              <input
                type="checkbox"
                id="spicyFood"
                name="spicyFood"
                checked={preferences.spicyFood}
                onChange={handlePreferenceChange}
              />
              <label htmlFor="spicyFood">Spicy Food</label>
            </div>
            <div className="preference-item">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={preferences.notifications}
                onChange={handlePreferenceChange}
              />
              <label htmlFor="notifications">Enable Notifications</label>
            </div>
          </div>
          <button className="btn-save-preferences">Save Preferences</button>
        </div>

        {/* Logout Section */}
        <div className="profile-section logout-section">
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
