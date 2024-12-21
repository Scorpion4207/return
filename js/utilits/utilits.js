import { formatDuration, format, intervalToDuration } from "date-fns";
import { ELEMENT_UI } from "../elements/elements.js";
import Cookies from 'js-cookie'

const { OUT} = ELEMENT_UI;

function millisecondDifference(){
  return Math.ceil((new Date(Cookies.get('date')).getTime() - (new Date().getTime() - (new Date().getTimezoneOffset() * 60 * 1000 ) )))
}

function daysLeft(){
  const days = format(new Date(millisecondDifference()), "D", { useAdditionalDayOfYearTokens: true })
  return days
}

function yearsAndHoursLeft(){
  const result = intervalToDuration({
    start: new Date().getTime() - (new Date().getTimezoneOffset() * 60 * 1000 ),
    end: new Date(Cookies.get('date'))
  });
  return result
}

export function render(){
  try{
    if(millisecondDifference() < 0){
      throw new Error('Выбери актуальную дату')
    }
    const years = formatDuration({ years: yearsAndHoursLeft().years})
    const hours = formatDuration({ hours: yearsAndHoursLeft().hours})
    const days = formatDuration({ days: daysLeft()})
    return OUT.textContent = `${years} ${days} ${hours}`
  } catch (error){
    return alert(error)
  }
}

