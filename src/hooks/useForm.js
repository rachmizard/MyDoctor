import {useState} from 'react';

function useForm(initialValue = {}) {
  const [formControl, setFormControl] = useState(initialValue);
  const [errors, setErrors] = useState(
    Object.keys(initialValue).map(key => ({[key]: false})),
  );

  function setField(field, value) {
    setFormControl(state => {
      return {
        ...state,
        [field]: value,
      };
    });
  }

  function clearAllErrors() {
    setErrors(Object.keys(formControl).map(err => ({[err]: false})));
  }

  return [formControl, setField, errors, setErrors, clearAllErrors];
}

export default useForm;
