import styles from './css/CheckRole.module.css';
import React from 'react';

const CheckMasterRole = () => {
    const [checked, setChecked] = React.useState(false);

  const handleChangeCheck = () => {
    setChecked(!checked);
  };

  const Checkbox = ({ label, value, onChange }) => {
    return (
        <label className={styles.textFormat}>
          <input type="checkbox" checked={value} onChange={onChange}/>
          {label}
        </label>
      );
    };


    return (
      <div className={styles.checkBoxContainer}>
        <p className={styles.textFormat}>¿Eres el presidente de tu comunidad?</p>
        <div className={styles.checkBox}>
          <Checkbox
          label="Sí!"
          value={checked}
          onChange={handleChangeCheck}
        />
        <p>Is "My Value" checked? {checked.toString()}</p>
        </div>
      </div>
      );
  };

export default CheckMasterRole