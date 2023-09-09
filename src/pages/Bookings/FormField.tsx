import React, { ReactNode } from 'react';

interface FormFieldProps {
  children: ReactNode;
  label: string;
  htmlFor: string;
  hasError: boolean;
  errorMessage?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  children,
  label,
  htmlFor,
  hasError,
  errorMessage,
}) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {hasError && errorMessage ? (
        <p data-testid="error-message">{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default FormField;
