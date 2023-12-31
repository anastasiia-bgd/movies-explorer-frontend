import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({ onFilter, isShortMovies }) => {
  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input
          className="filter-checkbox__input"
          type="checkbox"
          checked={isShortMovies}
          onChange={onFilter}
        />
        <span className="filter-checkbox__slider filter-checkbox__slider_type_round"></span>
      </label>
      <p className="filter-checkbox__text">
        <span>Короткометражки</span>
      </p>
    </div>
  );
};

export default FilterCheckbox;