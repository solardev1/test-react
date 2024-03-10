import { useTheme } from 'hooks/useTheme';
import { type SelectOption } from 'interfaces/select-option';

interface SelectProps {
  className?: string;
  label: string;
  options: SelectOption[];
  defaultValue?: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  className,
  label,
  options,
  defaultValue = 0,
  onChange,
}: SelectProps) => {
  const { theme } = useTheme();
  return (
    <>
      <p className={`${className} label ${theme}`}>{label}</p>
      <select
        className="control"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <option className="control" disabled value={0}>
          Selecciona una opción
        </option>
        {options.map((option) => (
          <option className="control" key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </>
  );
};
