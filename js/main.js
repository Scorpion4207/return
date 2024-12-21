import { ELEMENT_UI } from "./elements/elements.js";
import { render } from "./utilits/utilits.js";
import Cookies from 'js-cookie'
const {FORM, INPUT_DATE} = ELEMENT_UI

if(Cookies.get('date') !== undefined){
  render()
}

FORM.addEventListener('submit', (e) => {
  e.preventDefault()
  Cookies.set('date', INPUT_DATE.value, { expires: 9000 })
  render()
})






