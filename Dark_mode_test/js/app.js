import { lightMode } from './Functions/LightMode.js';
import { darkMode } from './Functions/DarkMode.js';

//Dark & light mod buttons
const buttonLight = document.getElementById("toggleLight")
buttonLight.addEventListener('click', lightMode);

const buttonDark = document.getElementById("toggleDark")
buttonDark.addEventListener('click', darkMode);
