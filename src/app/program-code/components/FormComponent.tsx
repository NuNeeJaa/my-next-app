import React from 'react';

interface FormComponentProps {
  code: string;
  name: string;
  setCode: (code: string) => void;
  setName: (name: string) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ code, name, setCode, setName, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} >
      <div style={{ marginBottom: '1rem' , display: 'flex'}}>
        <label htmlFor="code" style={{ marginLeft: '1rem', width: '50px'}}>Code:</label>
        <input style={{ marginLeft: '1rem' }}
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </div>
      <div style={{ marginBottom: '1rem', display: 'flex' }}>
        <label htmlFor="name" style={{ marginLeft: '1rem',width: '50px' }}>Name:</label>
        <input style={{ marginLeft: '1rem' }}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button style={{ marginBottom: '1rem', marginLeft: '5rem'  }} type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;