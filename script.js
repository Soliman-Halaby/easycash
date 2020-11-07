const firstVideoName = document.querySelector('.mainVideo')
const mainVideoSrc = document.querySelector('.mainVideoSrc')
const videoPlayer = document.querySelector('.videoPlayer')

console.log(firstVideoName)
console.log(videoPlayer)
firstVideoName.addEventListener('click', ()=>
{
    const createVideo = document.createElement("SOURCE")
    createVideo.src = `${firstVideoName.className}.mp4`
    videoPlayer.appendChild(createVideo)
    console.log(videoPlayer)
})

