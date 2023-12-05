"use strict"
const arr  = [
    "Stimulate your mind as you test your typing speed with this standard English paragraph typing test",
    
    "You must be a person who is trying to up there typing skills",
    
    "I'm trying to do the same thing as well",
    
    "Let's see if you can type this random story I made, and if somethings are spelled wrong, my mistake",
    
    "ONCE upon a time, there was a beautiful puppet who wished to be a frog",
    
    "He has always wanted to be a frog and jump everywhere and roam free",
    
    "Well, one day a frog came by and said to the puppet, \"Why do you look so sad?\"",
    
    "The puppet just stood there and pointed at the frog because he couldn't speak",
    
    "The frog thought that he was pointing and laughing at him because the puppet had a round nose"
]

const typedWords = document.getElementById("words")
const button = document.getElementById("button")
const message = document.getElementById("msg")
let startTime , endTime;

const playGame = ()=>{
    var num = Math.floor(Math.random() * 100);
    var index = num % (arr.length);
    message.innerHTML = arr[index]
    let date = new Date()
    startTime = date.getSeconds()
}


const checkWords = (str)=>{
    let arr1 = str.split(' ')
    let arr2 = message.innerHTML.split(' ')
    let count = 0;
    arr1.forEach((element,index) => {
        if(element == arr2[index])
            count++
    });
    return [count,arr1.length];
}


const endGame = () => {
    let date = new Date()
    endTime = date.getSeconds()
    let totalTime = (endTime -startTime)
    let totalStr = typedWords.value
    let [wordCount,totalWords] = checkWords(totalStr)
    let speed = Math.round(totalWords/totalTime)*60
    message.innerHTML = `You wrote at a speed of ${speed} words per minute.
                         ${wordCount} correct out of ${totalWords} and total number of errors are ${totalWords - wordCount}
                        `
    typedWords.value= ''
}

button.addEventListener('click', () => {
    if(button.innerHTML == 'Start'){
        typedWords.disabled = false
        playGame()
        button.innerHTML = 'Done'
    }else{
        typedWords.disabled = true
        button.innerText = 'Start'
        endGame()
    }
})