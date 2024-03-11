import { type FC } from 'react';
import { useTheme } from 'hooks/useTheme';
import darkIcon from 'assets/dark.svg';
import lightIcon from 'assets/light.svg';
import style from './ToggleButton.module.css';

export const ToggleButton: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const darkStyle = theme === 'dark' ? style.dark : '';
  const icon = theme === 'light' ? darkIcon : lightIcon;
  return (
    <button onClick={toggleTheme} className={`${style.button} ${darkStyle}`}>
      <img src={icon} alt={'icon'} className={style.button_icon} />
    </button>
  );
};
