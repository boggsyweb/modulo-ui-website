import React, { useState } from 'react';

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div onClick={toggleDropdown}>{trigger}</div>
      {isDropdownOpen && <div>{children}</div>}
    </div>
  );
};

export default Dropdown;
