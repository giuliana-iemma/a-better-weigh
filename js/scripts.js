'use strict';

//Target date for the countdown
let present = new Date();
let targetDate = new Date("June 13, 2024 21:00:00");
let difference = targetDate.getTime() - present.getTime();

//Variables for calculation of time
let seconds = 1000, //miliseconds in a second
    minutes = seconds * 60, //seconds in a minute
    hours = minutes * 60, //minutes in an hour
    days = hours * 24; //hours in a day

const convertTimes = (milliseconds) =>{
    //Milliseconds / hours in a day using MathFloor to round the number to the nearest integer
    //Getting the total days
    let d = Math.floor (milliseconds / days);
    

    //Getting the remaining hours
    //Leftover milliseconds after dividing by total milliseconds in a day. Then convertion to hours
    let h = Math.floor ((milliseconds % days) / hours);

    //Getting the remaining minutes
    //Leftover milliseconds after dividing by total millseconds in an hour. Then convertion to minutes
    let m = Math.floor((milliseconds % hours) / minutes);

    //Getting the remaining seconds
    //Leftover milliseconds after dividing by total milliseconds in a minute. Then convertion to seconds
    let s = Math.floor ((milliseconds % minutes) / seconds);

    //return an array so that later I can build up the HTML by iterating over it
    return [d, h, m, s];
}

let countdownContainer = document.getElementById ('countdown-list');
let daysItem =  document.getElementById ('days');
let hoursItem = document.getElementById ('hours');
let minutesItem =  document.getElementById ('minutes');
let secondsItem =  document.getElementById ('seconds');

const setCountdown = () => {

    showCountdown(convertTimes(difference));
    
    let timer = setInterval (()=>{
        //Update the present date every 1000 milliseconds (1second)
        let present = new Date();

        //Difference between present and target
        let actualDifference = targetDate.getTime() - present.getTime(); //Milliseconds resting before getting to the target day

       /*  console.log('dif', difference);
 */
      /*   console.log(convertTimes(difference)); */

        showCountdown(convertTimes(actualDifference));
    }, 1000)
}

const showCountdown = (arrayTimes) =>{
    let lastDaysValue = null; 
    let daysLeft = arrayTimes[0];
    
    if (lastDaysValue !== daysLeft){
        daysItem.innerHTML = ""; 
        //The last days value has changed and we need to show the new one
        daysItem.innerText = arrayTimes[0];
    }

    let lastHoursValue = null;
    let hoursLeft = arrayTimes[1];

    if (lastHoursValue !== hoursLeft){
        hoursItem.innerHTML = ""; 
        //The last days value has changed and we need to show the new one
        hoursItem.innerText = arrayTimes[1];
    }

    let lastMinutesValue = null;
    let minutesLeft = arrayTimes[2];

    if (lastMinutesValue !== minutesLeft){
        minutesItem.innerHTML = ""; 
        //The last days value has changed and we need to show the new one
        minutesItem.innerText = arrayTimes[2];
    }

    let lastSecondsValue = null;
    let secondsLeft = arrayTimes[3];

    if (lastSecondsValue !== secondsLeft){
        secondsItem.innerHTML = ""; 
        //The last days value has changed and we need to show the new one
        secondsItem.innerText = arrayTimes[3];
    }
}

setCountdown();

const dropdownMenu = function(){
    //Selection of all the buttons "See more"
/*     let dropdownButtons = document.querySelectorAll ('.see-more-button');

    //
    dropdownButtons.forEach (button => {
        button.addEventListener ('click', function() {
            let faqItem = this.closest ('.faq-item');

            faqItem.classList.toggle ('active');
        })
    }) */
    let faqItems = document.querySelectorAll ('.faq-item');

    //Show or hide info when clicking the question
    faqItems.forEach (item  => {
        item.querySelector ('.question-container').addEventListener ('click', function() {
            //Verify if the clicked item is active
            let isActive = item.classList.contains ('active');

            //Close all
            faqItems.forEach (faq => faq.classList.remove('active'));

            //Show the clicked one if it's not active. 
            if (!isActive){
                item.classList.add ('active');
            }
        })
    }) 
    
    //Hide info when clicking other question
    
}

dropdownMenu();

const menuResponsive = function (){
    document.addEventListener('DOMContentLoaded', function() {
        const openMenu = document.querySelector('#burger li:first-child a');
        const nav = document.querySelector ('nav');
        
        openMenu.addEventListener('click', function() {
        
            const menuBar = document.getElementById ('bar');
            menuBar.classList.toggle ('active');
            nav.classList.toggle ('active');
        });

    });
}

menuResponsive();