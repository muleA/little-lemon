import { FaMoon, FaSun } from 'react-icons/fa';

function getCurrentTheme(): 'dark' | 'light' {
  const html = document.documentElement;
  return html.classList.contains('dark') ? 'dark' : 'light';
}

export const ToggleTheme = () => {
  const currentTheme: 'dark' | 'light' = getCurrentTheme();
   console.log("currentTheme",currentTheme)
  const toggleTheme = () => {
    const html = document.documentElement;
    if (currentTheme === 'light') {
      html.classList.remove('light');
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  };

  return (
    <div>
      <button className="mr-5 mt-1 text-primary-900" onClick={toggleTheme}>
        {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};
