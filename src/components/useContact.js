import { useState, useEffect } from 'react';

const useContact = (callback, validate) => {
  console.log('!!!!', callback);
  const [value, setValue] = useState({
    email: ''
  });
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleChange = e => {
    const { name, value } = e.target;
    setValue({
      ...value,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setError(validate(value));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      console.log('retre')
      if (Object.keys(error).length === 0 && isSubmitting) {
        console.log('dfsd');
        console.log(callback);
        callback();
      }
    },
  );

  return { handleChange, handleSubmit, value, error };
  
};

export default useContact;
