function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  var signUpButton = document.getElementById("myButton"); // Заменете "myButton" со точниот ID на вашето копче

// Додајте event listener за кликнување на копчето
signUpButton.addEventListener("click", function() {
    // Пренасочете ја страницата на "contact.html"
    window.location.href = "zapocni.html";
});

function redirectToNewPage() {
  // Пренасочете на корисникот на новата страница
  window.location.href = 'zapocni.html';
}
// Селектирајте копчето
const startButton = document.getElementById("startButton");

// Додајте event listener за клик на копчето
startButton.addEventListener("click", function () {
  // Префрли се на новата страница
 // window.location.href = "zapocni.html"; // Заменете со URL-то на вашата нова страница
 window.location.href = "file:///C:/Users/38975/OneDrive/Десктоп/вежба%20друга%20за%20курс/zapocni.html";

});


//zapocni delot
function showContent(contentId) {
  const contentElements = document.querySelectorAll('.content');
  contentElements.forEach(element => {
      element.style.display = 'none';
  });

  const selectedContent = document.getElementById(contentId);
  selectedContent.style.display = 'block';
}

function showModule(moduleId) {
  const moduleElements = document.querySelectorAll('.module-content');
  moduleElements.forEach(element => {
      element.style.display = 'none';
  });

  const selectedModule = document.getElementById(moduleId);
  selectedModule.style.display = 'block';
}

//Povrzuvanje so firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi0MdHo11fsJyvyEXx9ClA6VldOMxDWhs",
  authDomain: "courses-ab116.firebaseapp.com",
  projectId: "courses-ab116",
  storageBucket: "courses-ab116.appspot.com",
  messagingSenderId: "324094800812",
  appId: "1:324094800812:web:96e0ea75c76786a5a80009",
  measurementId: "G-J5BDKVZWNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getDatabase(app);
//document.getElementById("submit").addEventListener('click',function(e))
 //{

//set(ref(db), 'user/'+ documentElementById("username").value) , {
  //  username: document.documentElementById("username").value ,
  //  password:document.documentElementById("password").value 
//}
//}
// Иницијализација на Firebase


// Додавање event listener на копчето "submit"
document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault(); // Овој ред може да спречи стандардното однесување на формата

    set(ref(db), 'user/'+ documentElementById("username").value) , {

      username: document.documentElementById("username").value ,
      password:document.documentElementById("password").value 
    }
});
//Ова го поправува кодот за да го иницијализира Firebase, добие вредности од влезните полиња и ги додаде во базата на податоци. Треба да забележите дека вашиот код користи Firebase Realtime Database, па треба да се осигурате дека Firebase е правилно конфигуриран во вашиот проект.





