

// console.log(" let work on javascript part of spotify music player ")

// let currentsong = new Audio(); 
// let songs;
// let mainsonglist;

// // function for converting the seconds into meinute : second



// function convertSecondsToMinSec(seconds) {
//     // Ensure the input is an integer
//     seconds = parseInt(seconds, 10);

//     // Calculate minutes and seconds
//     let minutes = Math.floor(seconds / 60);
//     let remainingSeconds = seconds % 60;

//     // Add leading zero to seconds if necessary
//     remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    
//     // Return the result in minute:second format
//     return `${minutes}:${remainingSeconds}`;
// }



// async function getsongs ()
// {
// let a = await  fetch("http://127.0.0.1:3000/songs/")
// let response = await a.text();

// let div = document.createElement("div")
// div.innerHTML = response;

// let as= div.getElementsByTagName("a");

//  songs =[]; // creating arry of songs 

// for(let index =0;index<as.length;index++)
// {   
//     // console.log(index)
//     const element = as[index];
//     // console.log(element.href)
//     if(element.href.endsWith(".mp3"))
//     {
//         songs.push(element.href.split("/songs/")[1])
//     }
// }
// return songs


// }
// // currentsong is declared globaly at top 
// const playMusic = (track ,pause=false)=>{
//     // let audio =new Audio("/songs/"+track)
//     currentsong.src=("/songs/"+track)
//     if(!pause)
//     {
//         currentsong.play();
//         mainplay.src="pause.svg";

//     }
//     document.querySelector(".songinformation").innerHTML= decodeURI(track);
//     document.querySelector(".songtime").innerHTML="00:00 / 00:00";

// }
// // as this is a promise so make it in async function calling  as promises are must be called in another async functions 
// async function main ()

// {
//     // variable showing the current song 
//     // getting the lists of all songs
     
//     songs = await getsongs();
//     mainsonglist=songs;
//  console.log(songs);
//  playMusic(songs[0],true)

//  // Replace all occurrences of %20 with a space
//  for (let i = 0; i < songs.length; i++) {
//     songs[i] = songs[i].replace(/%20/g, " ");
// }

// //  now addding the all songs in  the playlist1 

// let songUL  = document.querySelector(".playlist1").getElementsByTagName('ul')[0]
// for (let i=0;i<songs.length;i++)
// {
// // songs[i].replaceALL("%20"," ");
// songUL.innerHTML=songUL.innerHTML + ` <li> 
//                             <img class="invert" src="music.svg" alt="">
//                             <div class="songinfo">
//                                 <div>${songs[i]}</div>
                            
//                             </div>
//                             <div class="playnow">
//                                 <span>play now</span>
//                             <img class="invert" src="playnow.svg" alt="">
//                             </div>
// </li>`;
// }

// //  // plaing the first song 
// //  var audio = new Audio(songs[1]);
// // // audio.play();
// // // showing the duration of song

// // audio.addEventListener("loadeddata", () => {
// //     let duration = audio.duration;
// //     console.log(duration);
// // });



// // ${songs[i].split("-")[1]}





// // event listioner to listen the  current song song from liberary  

// Array.from(document.querySelector(".playlist1").getElementsByTagName("li")).forEach(e => {

//     e.addEventListener("click",element=>{
//         console.log(e.querySelector(".songinfo").firstElementChild.innerHTML);
//         playMusic(e.querySelector(".songinfo").firstElementChild.innerHTML.trim())
//         // where   --   e  --   is representing songs in list tags
//     })
    
// });

// // attaching event listner for previousplay   , mainplay  , nextplay  

// mainplay.addEventListener("click", () => {
//     if (currentsong.paused) {
//         currentsong.play();
//         mainplay.src = "pause.svg";
//         // document.querySelector("#mainplay").src="pause.svg";
//     } else {
//         currentsong.pause();
//         mainplay.src = "mainplay.svg";
//         // document.querySelector("#mainplay").src="mainplay.svg";
//     }
// });

// // eventlisten for timeupdate

// // currentsong.addEventListener( "timeupdate", ()=>{
// //     console.log(currentsong.currentTime,currentsong.duration);
// //     document.querySelector(".songtime").innerHTML= ${ convertSecondsToMinSec(currentsong.currentTime)} / ${
// //         convertSecondsToMinSec(currentsong.duration)}
// //         document.querySelector(".seekcircle").style.left= (currentsong.currentTime/currentsong.duration)*100 +"%";
// // })

// currentsong.addEventListener("timeupdate", () => {
//     // Ensure the duration is loaded and not NaN this is to avoid the Nan behaviour on changing the songs 
//     if (!isNaN(currentsong.duration)) {
//         // console.log(currentsong.currentTime, currentsong.duration);
//         document.querySelector(".songtime").innerHTML = `${convertSecondsToMinSec(currentsong.currentTime)} / ${convertSecondsToMinSec(currentsong.duration)}`;
//         document.querySelector(".seekcircle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
//     }
// });



// // event listner for seekcircle inside seekbar to move it on the the seekbar 
// document.querySelector(".seekbar").addEventListener( "click", e=>{
// let movepercent=(e.offsetX/e.target.getBoundingClientRect().width)*100;
//     document.querySelector(".seekcircle").style.left = movepercent +"%";
//     // updating current time of current song dynamically using movepercent
//     currentsong.currentTime =  (( currentsong.duration)*movepercent )/100;

// })

// // adding event listener for hamburger
// document.querySelector(".hamburger").addEventListener("click", ()=>{
//     document.querySelector(".left").style.left="0";
// })

// // adding event listener for close button for hamburger
// document.querySelector(".close").addEventListener("click", ()=>{
//     document.querySelector(".left").style.left="-100%";
// })





// // add event listner for previou and next song buttons 



// previousplay.addEventListener( "click",()=>{
//     console.log(songs);

//     let currentSongName =currentsong.src.split("/").slice(-1)[0].replace(/%20/g, " ")
//     let index = songs.indexOf(currentSongName);
//     console.log("Index found is : ---", index);
//     console.log(index);
//     if( (index)>0)
//     {
//         playMusic(songs[index -1]);
//         console.log( "  index in previous button ",index);
//     }
//     else
// {
//     index = songs.length-1;
//     console.log(" agan playing hte end of songs in list of song ")
//     playMusic(songs[index]);

// }

    
// })

// nextplay.addEventListener( "click",()=>{
//     // console.log(mainsonglist);
// console.log("here we are starting ")
// console.log(currentsong.src);
// console.log("thisnis too")
//     console.log(currentsong.src.split("/").slice(-1)[0]);
    
// // let index=songs.indexOf(currentsong.src.split("/").slice(-1)[0]) ;
// console.log("hellow 1")
// console.log(songs);
// console.log("hellow let try it -----")
// let currentSongName =currentsong.src.split("/").slice(-1)[0].replace(/%20/g, " ")

// let index = songs.indexOf(currentSongName);
// console.log("Index found is : ---", index);

// // console.log("hellow 1")
// // console.log(index);
// // console.log("hellow 55")
// // console.log(currentsong);
// // console.log("hellow 1")
// // console.log(songs.length);
// // console.log("hellow 1")

// if( (index) <songs.length -1)
//     {
//         console.log(songs.length)
//         index=index+1;
//         playMusic(songs[index]);
//         console.log(index);
// }
// else
// {
//     index = 0;
//     console.log(" agan playing hte satrt song ")
//     playMusic(songs[index]);

// }

// })

// // adding event listner for volume 
// document.querySelector(".volumerange").getElementsByTagName("input")[0].addEventListener("input", (e) => {
//     console.log("Volume is setting at", e.target.value, "/100");

//     currentsong.volume = parseInt(e.target.value) / 100;
//     if ( currentsong.volume ==0 )
//     {
//         volumeimg.src="mutevolume.svg"
//     }
//     else{
//         volumeimg.src="volume.svg";
//     }
// });


// }


// main();

 




    

// // new modifies javascript   ----

// console.log("Let's work on the JavaScript part of the Spotify music player");

// let currentsong = new Audio(); 
// let songs;
// let mainsonglist;

// // Function for converting the seconds into minute:second
// function convertSecondsToMinSec(seconds) {
//     seconds = parseInt(seconds, 10);
//     let minutes = Math.floor(seconds / 60);
//     let remainingSeconds = seconds % 60;
//     remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
//     return `${minutes}:${remainingSeconds}`;
// }

// async function getsongs(folder) {
//     let response = await fetch(`http://127.0.0.1:3000/songs/${folder}`);
//     let text = await response.text();
//     let div = document.createElement("div");
//     div.innerHTML = text;
//     let as = div.getElementsByTagName("a");
//     let folderSongs = [];
//     for (let index = 0; index < as.length; index++) {   
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             folderSongs.push(element.href.split("/songs/")[1]);
//         }
//     }
//     return folderSongs;
// }

// const playMusic = (track, pause = false) => {
//     currentsong.src = "/songs/" + track;
//     if (!pause) {
//         currentsong.play();
//         mainplay.src = "pause.svg";
//     }
//     document.querySelector(".songinformation").innerHTML = decodeURI(track);
//     document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
// }

// async function main() {
//     songs = await getsongs("");
//     mainsonglist = songs;
//     console.log(" THIS IS SHOWING YOU THE SONGS" ,songs);
//     playMusic(songs[0], true);

//     for (let i = 0; i < songs.length; i++) {
//         songs[i] = songs[i].replace(/%20/g, " ");
//     }



//     let songUL = document.querySelector(".playlist1 ul");
//     for (let i = 0; i < songs.length; i++) {
//         songUL.innerHTML += `<li>
//                                 <img class="invert" src="music.svg" alt="">
//                                 <div class="songinfo">
//                                     <div>${songs[i]}</div>
//                                 </div>
//                                 <div class="playnow">
//                                     <span>play now</span>
//                                     <img class="invert" src="playnow.svg" alt="">
//                                 </div>
//                              </li>`;
//     }

//     Array.from(document.querySelector(".playlist1").getElementsByTagName("li")).forEach(e => {
//         e.addEventListener("click", element => {
//             console.log(e.querySelector(".songinfo").firstElementChild.innerHTML);
//             playMusic(e.querySelector(".songinfo").firstElementChild.innerHTML.trim());
//         });
//     });

//     mainplay.addEventListener("click", () => {
//         if (currentsong.paused) {
//             currentsong.play();
//             mainplay.src = "pause.svg";
//         } else {
//             currentsong.pause();
//             mainplay.src = "mainplay.svg";
//         }
//     });

//     currentsong.addEventListener("timeupdate", () => {
//         if (!isNaN(currentsong.duration)) {
//             document.querySelector(".songtime").innerHTML = `${convertSecondsToMinSec(currentsong.currentTime)} / ${convertSecondsToMinSec(currentsong.duration)}`;
//             document.querySelector(".seekcircle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
//         }
//     });

//     document.querySelector(".seekbar").addEventListener("click", e => {
//         let movepercent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
//         document.querySelector(".seekcircle").style.left = movepercent + "%";
//         currentsong.currentTime = (currentsong.duration * movepercent) / 100;
//     });

//     document.querySelector(".hamburger").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "0";
//     });

//     document.querySelector(".close").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "-100%";
//     });

//     previousplay.addEventListener("click", () => {
//         let currentSongName = currentsong.src.split("/").slice(-1)[0].replace(/%20/g, " ");
//         let index = songs.indexOf(currentSongName);
//         if (index > 0) {
//             playMusic(songs[index - 1]);
//         } else {
//             index = songs.length - 1;
//             playMusic(songs[index]);
//         }
//     });

//     nextplay.addEventListener("click", () => {
//         let currentSongName = currentsong.src.split("/").slice(-1)[0].replace(/%20/g, " ");
//         let index = songs.indexOf(currentSongName);
//         if (index < songs.length - 1) {
//             playMusic(songs[index + 1]);
//         } else {
//             index = 0;
//             playMusic(songs[index]);
//         }
//     });

//     // adding event listner for volume 
// document.querySelector(".volumerange").getElementsByTagName("input")[0].addEventListener("input", (e) => {
//     console.log("Volume is setting at", e.target.value, "/100");

//     currentsong.volume = parseInt(e.target.value) / 100;
//     if ( currentsong.volume == 0 )
//     {
//         volumeimg.src="mutevolume.svg"
//     }
//     else{
//         volumeimg.src="volume.svg";
//     }
// });
//     // Adding event listeners to cards to display songs in the playlist
//     document.querySelectorAll('.card').forEach(card => {
//         card.addEventListener('click', async function() {
//             let folder = this.dataset.folder;
//             let cardSongs = await getsongs(folder);
//             let songUL = document.querySelector(".playlist1 ul");
//             songUL.innerHTML = ''; // Clear previous songs
//             cardSongs.sort();
//             // playMusic(cardSongs[0]);
//             cardSongs.forEach(song => {
//                 song = song.replace(/%20/g, " ").split('/')[1];
                
//                 songUL.innerHTML += `<li>
//                                         <img class="invert" src="music.svg" alt="">
//                                         <div class="songinfo">
//                                             <div>${song}</div>
//                                         </div>
//                                         <div class="playnow">
//                                             <span>play now</span>
//                                             <img class="invert" src="playnow.svg" alt="">
//                                         </div>
//                                      </li>`;
//             });
            


//             // Add event listener for the new list items
//             Array.from(songUL.getElementsByTagName("li")).forEach(e => {
//                 e.addEventListener("click", element => {
//                     playMusic(e.querySelector(".songinfo").firstElementChild.innerHTML.trim());
//                 });
//             });
//         });
//         // playMusic(song[0]);
//         return songs;
    
//     });





    
//     // adding event listner for volumeimage




// //     document.querySelector("#volumeimg").addEventListener( "click",  e=>{
// // // console.log(e.target.src.split('/'));

// // console.log(e.target.src);
// // if(e.target.src.includes("volume.svg"))
// // {

// //   e.target.src = e.target.src.replace("volume.svg" ,"mutevolume.svg");
// // currentsong.volume = 0.0;
// //     document.querySelector(".volumerange").getElementsByTagName("input")[0].value=0;
// //     console.log(e.target.src)
// // }
// // else 

// // {
// //     console.log(e.target.src)
// //      e.target.src = e.target.src.replace("mutevolume.svg" ,"volume.svg");
    
// //     // currentsong.volume = 0.3;
// //     document.querySelector(".volumerange").getElementsByTagName("input")[0].value=30;
// //     console.log(e.target.src)

// // }

// //     })


// document.querySelector("#volumeimg").addEventListener("click", e => {
//     const volumeImg = e.target;

//     if (volumeImg.src.includes("volume.svg")) {
//         // Mute the volume
//         volumeImg.src = volumeImg.src.replace("volume.svg", "mute.svg");
//         currentsong.volume = 0.0;
//         document.querySelector(".volumerange input").value = 0;
//         // console.log(volumeImg.src);
//     } 
//     else if (volumeImg.src.includes("mute.svg"))
//          {
//         // Unmute the volume
//         volumeImg.src = volumeImg.src.replace("mute.svg", "volume.svg");
//         currentsong.volume = 0.3;
//         document.querySelector(".volumerange input").value = 30;
//         // console.log(volumeImg.src);
//     }
// });



// }

// main();









console.log("Let's work on the JavaScript part of the Spotify music player");

let currentsong = new Audio(); 
let songs;
let mainsonglist;

// Function for converting the seconds into minute:second
function convertSecondsToMinSec(seconds) {
    seconds = parseInt(seconds, 10);
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    return `${minutes}:${remainingSeconds}`;
}

// Function to sort songs in ascending order based on artist name
function sortSongsByArtist(songs) {
    return songs.sort((a, b) => {
        const artistA = a.split(' - ')[1]?.toLowerCase();
        const artistB = b.split(' - ')[1]?.toLowerCase();

        if (artistA < artistB) {
            return -1;
        } else if (artistA > artistB) {
            return 1;
        } else {
            return 0;
        }
    });
}

async function getsongs(folder) {
    console.log(folder)
    let response = await fetch(`http://127.0.0.1:3000/songs/${folder}`);
    let text = await response.text();
    let div = document.createElement("div");
    div.innerHTML = text;
    let as = div.getElementsByTagName("a");
    let folderSongs = [];
    for (let index = 0; index < as.length; index++) {   
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            folderSongs.push(element.href.split("/songs/")[1]);
        }
    }
    return folderSongs;
}

const playMusic = (track, pause = false) => {
    currentsong.src = "/songs/" + track;
    if (!pause) {
        currentsong.play();
        mainplay.src = "pause.svg";
    }
    document.querySelector(".songinformation").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

async function main() {
    songs = await getsongs("");
    mainsonglist = songs;
    console.log(" THIS IS SHOWING YOU THE SONGS", songs);

    // Sort main songs by artist name in ascending order
    
    playMusic(songs[0], true);
    
    for (let i = 0; i < songs.length; i++) {
        songs[i] = songs[i].replace(/%20/g, " ");
    }
    
    songs = sortSongsByArtist(songs);

    console.log(" THIS IS SHOWING YOU THE SONGS LIST IS UPDATED ", songs);


    let songUL = document.querySelector(".playlist1 ul");
    for (let i = 0; i < songs.length; i++) {
        songUL.innerHTML += `<li>
                                <img class="invert" src="music.svg" alt="">
                                <div class="songinfo">
                                    <div>${songs[i]}</div>
                                </div>
                                <div class="playnow">
                                    <span>play now</span>
                                    <img class="invert" src="playnow.svg" alt="">
                                </div>
                             </li>`;
    }

    Array.from(document.querySelector(".playlist1").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".songinfo").firstElementChild.innerHTML);
            playMusic(e.querySelector(".songinfo").firstElementChild.innerHTML.trim());
        });
    });

    mainplay.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            mainplay.src = "pause.svg";
        } else {
            currentsong.pause();
            mainplay.src = "mainplay.svg";
        }
    });

    currentsong.addEventListener("timeupdate", () => {
        if (!isNaN(currentsong.duration)) {
            document.querySelector(".songtime").innerHTML = `${convertSecondsToMinSec(currentsong.currentTime)} / ${convertSecondsToMinSec(currentsong.duration)}`;
            document.querySelector(".seekcircle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
        }
    });

    document.querySelector(".seekbar").addEventListener("click", e => {
        let movepercent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".seekcircle").style.left = movepercent + "%";
        currentsong.currentTime = (currentsong.duration * movepercent) / 100;
    });

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
    });

    previousplay.addEventListener("click", () => {
        let currentSongName = currentsong.src.split("/").slice(-1)[0].replace(/%20/g, " ");
        let index = songs.indexOf(currentSongName);
        if (index > 0) {
            playMusic(songs[index - 1]);
        } else {
            index = songs.length - 1;
            playMusic(songs[index]);
        }
    });

    nextplay.addEventListener("click", () => {
        let currentSongName = currentsong.src.split("/").slice(-1)[0].replace(/%20/g, " ");
        let index = songs.indexOf(currentSongName);
        if (index < songs.length - 1) {
            playMusic(songs[index + 1]);
        } else {
            index = 0;
            playMusic(songs[index]);
        }
    });

    // Adding event listener for volume 
    document.querySelector(".volumerange").getElementsByTagName("input")[0].addEventListener("input", (e) => {
        console.log("Volume is setting at", e.target.value, "/100");
        currentsong.volume = parseInt(e.target.value) / 100;
        if (currentsong.volume == 0) {
            volumeimg.src = "mutevolume.svg";
        } else {
            volumeimg.src = "volume.svg";
        }
    });

    // Adding event listeners to cards to display songs in the playlist
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', async function() {
            let folder = this.dataset.folder;
            let cardSongs = await getsongs(folder);
            let songUL = document.querySelector(".playlist1 ul");
            songUL.innerHTML = ''; // Clear previous songs

            // Sort songs by artist name in ascending order
            cardSongs = sortSongsByArtist(cardSongs);

            cardSongs.forEach(song => {
                song = song.replace(/%20/g, " ").split('/')[1];
                songUL.innerHTML += `<li>
                                        <img class="invert" src="music.svg" alt="">
                                        <div class="songinfo">
                                            <div>${song}</div>
                                        </div>
                                        <div class="playnow">
                                            <span>play now</span>
                                            <img class="invert" src="playnow.svg" alt="">
                                        </div>
                                     </li>`;
            });

            // Add event listener for the new list items
            Array.from(songUL.getElementsByTagName("li")).forEach(e => {
                e.addEventListener("click", element => {
                    playMusic(e.querySelector(".songinfo").firstElementChild.innerHTML.trim());
                });
            });
        });
    });

    // Adding event listener for volume image
    document.querySelector("#volumeimg").addEventListener("click", e => {
        const volumeImg = e.target;
        if (volumeImg.src.includes("volume.svg")) {
            // Mute the volume
            volumeImg.src = volumeImg.src.replace("volume.svg", "mute.svg");
            currentsong.volume = 0.0;
            document.querySelector(".volumerange input").value = 0;
        } else if (volumeImg.src.includes("mute.svg")) {
            // Unmute the volume
            volumeImg.src = volumeImg.src.replace("mute.svg", "volume.svg");
            currentsong.volume = 0.3;
            document.querySelector(".volumerange input").value = 30;
        }
    });
}

main();

