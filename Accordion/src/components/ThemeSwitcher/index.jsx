import useLocalStorage from './useLocalStorage'
import './style.css'

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')
  
    const handleChangeTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }

    console.log(theme)
    return (
    <div className='main-wrapper' data-theme={theme}>
      <div className='container'>
        <h1>Hello World!</h1>
        <button onClick={handleChangeTheme}>Change theme</button>
      </div>
    </div>
  )
}

export default LightDarkMode
