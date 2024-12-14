import React from "react";
import '../style/SettingPage.css';

const SettingsPage = () => {
  const settingsOptions = [
    { icon: "👤", label: "Account" },
    { icon: "🔔", label: "Notifications" },
    { icon: "👁️", label: "Appearance" },
    { icon: "🔒", label: "Privacy & Security" },
    { icon: "🎧", label: "Help and Support" },
    { icon: "ℹ️", label: "About" },
  ];

  return (
    <div className="settings-container">
      <div className="settings-header">
        <button className="back-button">←</button>
        <h2>Settings</h2>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for a setting..." />
      </div>
      <div className="settings-options">
        {settingsOptions.map((option, index) => (
          <div className="settings-option" key={index}>
            <span className="icon">{option.icon}</span>
            <span className="label">{option.label}</span>
            <span className="arrow">›</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
