import { type FC } from 'react';
import { useTheme } from '../hooks/useTheme';
import { ToggleButton } from './ToggleButton';
import style from './Header.module.css';

export const Header: FC = () => {
  const { theme } = useTheme();
  const darkStyle = theme === 'dark' ? style.dark : '';
  return (
    <div className={`${style.container} ${darkStyle}`}>
      <h1>Tareas</h1>
      <ToggleButton />
    </div>
  );
};
