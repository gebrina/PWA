// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./service-worker.js').then((res)=>{
    console.log('registerd')
  }).catch(err=>console.error(err))
}