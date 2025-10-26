type InputType = 'text' | 'number' | 'date' | 'url' | 'email';

interface FormInputProps {
  children: string;
  type: InputType;
  placeholder: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Option {
  value: string;
  name: string;
}

interface FormSelectProps {
  children: string;
  name: string;
  value: string;
  options: Option[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FormInput = ({
  children,
  type,
  placeholder,
  name,
  value,
  handleChange,
}: FormInputProps) => {
  return (
    <div className="field">
      <label className="field__label" htmlFor={name}>
        {children}
      </label>
      <input
        className="field__input"
        type={type}
        id={name}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export const FormSelect = ({ children, name, value, options, handleChange }: FormSelectProps) => {
  return (
    <div className="field">
      <label className="field__label" htmlFor={name}>
        {children}
      </label>
      <select className="field__input" id={name} name={name} value={value} onChange={handleChange}>
        <option className="field__option" value="">
          Vyberte
        </option>
        {options.map(option => (
          <option key={option.name} className="field__option" value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
