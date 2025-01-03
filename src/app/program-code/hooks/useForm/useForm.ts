import { useState } from 'react';
import axios from 'axios';

const useForm = () => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      
      const response = await axios.post('/api/save', { code, name });
      console.log('Data saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return { code, name, setCode, setName, handleSubmit };
};

export default useForm;