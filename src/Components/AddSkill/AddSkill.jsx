import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AddSkill = ({ skills, setSkills, formData, setFormData }) => {
  const [inputValue, setInputValue] = useState("");

  const addSkill = () => {
    if (inputValue.trim() !== "") {
      const newSkill = inputValue.trim();
      // Check if the skill already exists before adding it
      if (!skills.includes(newSkill)) {
        setSkills([...skills, newSkill]);
        setFormData({
          ...formData,
          skills: [...formData.skills, newSkill] // Update formData with new skill
        });
        // Clear the input field
        setInputValue("");
      }
    }
  };

  const removeSkill = (skillToRemove) => {
    const newSkills = skills.filter((skill) => skill !== skillToRemove);
    setSkills(newSkills);
    setFormData({
      ...formData,
      skills: newSkills // Update formData with new skills list after removing skill
    });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    } else if (
      e.key === "Backspace" &&
      inputValue === "" &&
      skills.length > 0
    ) {
      const lastSkill = skills[skills.length - 1];
      removeSkill(lastSkill);
    }
  };

  return (
    <div className="max-w-[48%] w-full mt-5">
         <label htmlFor="#" className="px-1 text-base font-medium text-[#151D48]">Skills</label>
      <input
        className="border bg-white  mt-1 rounded-lg focus:shadow-lg w-full py-3 px-3 focus:border-[#6750a4] outline-none focus:outline-none placeholder:text-[#49454F] text-base"
        type="text"
        placeholder="Add Skills"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
     

      <div className="tag-list flex flex-wrap gap-2 mt-2">
        {skills?.map((skill, index) => (
          <span
            key={skill + index}
            className="flex items-center gap-2 rounded-2xl shadow-md px-2 py-1 bg-white"
          >
            {skill}
            <span className="remove-skill" onClick={() => removeSkill(skill)}>
              <RxCross2 className="text-sm font-medium text-[#151D48]" />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default AddSkill;
