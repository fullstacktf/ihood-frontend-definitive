import styles from './CheckRole.module.css';
import React from 'react';

const CheckMasterRole = () => {
    const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
          <input type="checkbox" checked={value} onChange={onChange}/>
          {label}
        </label>
      );
    };


    return (
      <div className={styles.checkBoxContainer}>
        <p>¿Eres el presidente de tu comunidad?</p>
        <div className={styles.checkBox}>
          <Checkbox
          label="Sí!"
          value={checked}
          onChange={handleChange}
        />
        {/* <p>Is "My Value" checked? {checked.toString()}</p> */}
        </div>
      </div>
      );
  };

export default CheckMasterRole