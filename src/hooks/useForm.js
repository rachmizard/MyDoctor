import {useState} from 'react';

function useForm(initialValue = {}) {
  const [formControl, setFormControl] = useState(initialValue);

  function setField(field, value) {
    setFormControl(state => {
      return {
        ...state,
        [field]: value,
      };
    });
  }

  return [formControl, setField];
}

export default useForm;
