import React from 'react';
import FormComponent from '../components/FormComponent';
import useForm from '../hooks/useForm/useForm';

const FormContainer: React.FC = () => {
  const { code, name, setCode, setName, handleSubmit } = useForm();

  return (
    <FormComponent
      code={code}
      name={name}
      setCode={setCode}
      setName={setName}
      handleSubmit={handleSubmit}
    />
  );
};

export default FormContainer;