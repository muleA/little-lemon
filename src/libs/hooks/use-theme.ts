export const getCurrentTheme=()=> {
    const html = document.documentElement; // or document.body if you applied classes to the body element
    return html.classList.contains('dark-theme') ? 'dark' : 'light';
  }
  