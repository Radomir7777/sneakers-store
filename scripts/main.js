function currentTime(){
    let date = new Date()
    let hour = plusZero(date.getHours()) 
    let min = plusZero( date.getMinutes()) 
    let sec = plusZero( date.getSeconds() )
    // console.log(hour, min, sec)
    document.getElementById("time").innerText = hour + ":" + min + ":" + sec
    setTimeout(currentTime, 1000)
}

const video = document.getElementById("myVideo")
const btnPlay = document.getElementById("play")
const btnMute = document.getElementById("mute")
const playList = ["video1", "video2"]
let number = 0

function play() {
    if(video.paused){
        video.play()
        btnPlay.innerText = "pause"
    } else{
        video.pause()
        btnPlay.innerText = "play"
    }
}

function mute() {
    if(video.muted){
        video.muted = false
        btnMute.innerText = "off"
    } else{
        video.muted = true
        btnMute.innerText = "on"
    }
}

function next(){
    if(number < playList.length - 1){
        number++//number = number + 1
    }
    else{
        number = 0
    }
    video.src = `/videos/${playList[number]}.mp4`

}

function prev(){
    if(number != 0){
        number--//number = number - 1
    }
    else{
        number =  playList.length - 1
    }
    video.src = `/videos/${playList[number]}.mp4`
}

