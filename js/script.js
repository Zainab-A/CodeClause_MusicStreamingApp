const music = new Audio('1.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` Golden Hour <br>
        <div class="subtitle">JVKE</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Sure Thing <br>
        <div class="subtitle">Miguel</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Dusk Till Dawn <br>
        <div class="subtitle"> Zayn </div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Frozen <br><div class="subtitle">Madonna</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Cruel Summer <br><div class="subtitle">Taylor Swift</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Alone <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Euphoria <br><div class="subtitle">BTS</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Kill Bill <br><div class="subtitle">SZA</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Sway <br><div class="subtitle">Michael Buble</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Without Me <br><div class="subtitle">Halsey</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Last Night <br><div class="subtitle">Morgan Wallen</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Somewhere Only We Know<br><div class="subtitle">Keane</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Home <br><div class="subtitle">Edith Whiskers</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Love Nwantiti<br><div class="subtitle">CKay</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Away <br><div class="subtitle">Davido</div>`,
        poster: "img/15.jpg",
    },
    {
        id:'1',
        songName:` Golden Hour <br>
        <div class="subtitle">JVKE</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Sure Thing <br>
        <div class="subtitle">Miguel</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Dusk Till Dawn <br>
        <div class="subtitle"> Zayn </div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Frozen <br><div class="subtitle">Madonna</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Cruel Summer <br><div class="subtitle">Taylor Swift</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Alone <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Euphoria <br><div class="subtitle">BTS</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Kill Bill <br><div class="subtitle">SZA</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Sway <br><div class="subtitle">Michael Buble</div>`,
        poster: "img/9.jpg",
    },
]

Array.from(document.getElementsByClassName('song-item')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
} )

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('song-item')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('song-item'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let pop_song1 = document.getElementsByClassName('pop_song')[1];

left_scrolls.addEventListener('click', ()=>{
    pop_song1.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    pop_song1.scrollLeft += 330;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('song-item')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('song-item'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('song-item')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('song-item'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})