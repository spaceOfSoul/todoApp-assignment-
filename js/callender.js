const day = new Date();
const calle = document.querySelector(".calle");
const yoil = ["월","화","수", "목", "금", "토", "일"];

calle.innerText = `${day.getFullYear()}년 ${day.getMonth()+1}월 ${day.getDate()}일 ${yoil[day.getDay()-1]}요일`;