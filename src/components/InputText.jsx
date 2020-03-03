import React, { useState } from 'react';

const InputText = ({ ...rest }) => {
  const [value, setValue] = useState('');
  const [isFocus, setFocus] = useState(false);
  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);
  const handleChange = e => setValue(e.target.value);
  const isBlank = value === '';
  const isValid = /^[-]?(\d+)[.]?(\d+)?$/.test(value);
  const displayValue = (() => {
    if (isFocus || !isValid) {
      return value;
    }
    if (isValid) {
      return (+value).toLocaleString();
    }
    return '';
  })();
  const displayStyle = {
    textAlign: 'right',
    backgroundColor: isValid || isBlank ? '#FFF' : '#FFBEDA'
  }

  return (
    <input
      {...rest}
      type="text"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      value={displayValue}
      style={displayStyle}
    />
  );
}

export default InputText;
