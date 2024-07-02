import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOption(selected || null);
  };

  return (
    <select value={selectedOption?.value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value} className="bg-blue-300">
          T {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

// export const BasicDropdown: StoryObj<typeof DropdownMenu> = {
//     render: () => (
//
// };
