let All_song = [

    {
        name: "Criminal (RA.ONE) Slowed & Reverb",
        path: "HinMus/h1.mp3",
        img: "HinImg/h1.jpg",
        singer: "Vishal Dadlani"
    }
    ,
    {
        name : "No Love (Slowed)",
        path : "HinMus/h10.mp3",
        img : "HinMus/h10.jpg",
        singer : "Shubh"
    }
    ,
    {
        name: " Ik Vaari Aa (Slowed & Reverb) ",
        path: "HinMus/h2.mp3",
        img: "HinImg/h2.jpg",
        singer: "Arijit Singh"
    }
    ,
    {
        name: " Lae Dooba (Slowed & Reverb)",
        path: "HinMus/h3.mp3",
        img: "HinImg/h3.jpg",
        singer: " Sunidhi Chauhan"
    },
    {
        name: "Mere Bina (Crook) Slowed & Reverb",
        path: "HinMus/h4.mp3",
        img: "HinImg/h4.jpg",
        singer: " Alexander Rybak"
    },
    {
        name: "Proper Patola (Slowed & Reverb)",
        path: "HinMus/h5.mp3",
        img: "HinImg/h5.jpg",
        singer: "Diljit Dosanjh"
    },

    {
        name: "Bhaag Milkha Bhaag Title Track (Slowed)",
        path: "HinMus/h6.mp3",
        img: "HinImg/h6.jpg",
        singer: " Siddharth Mahadevan, Shankar-Ehsaan-Loy"
    },
    {
        name: "Besabriyaan (M.S.Dhoni) Slowed & Reverb",
        path: "HinMus/h7.mp3",
        img: "HinImg/h7.jpg",
        singer: "Amaal Mallik and Armaan Malik"
    },
    {
        name: "Hey Ya! Slowed & Reverb",
        path: "HinMus/h8.mp3",
        img: "HinImg/h8.jpg",
        singer: "Clinton Cerejo, Loy Mendonsa and Shankar Mahadevan"
    },
    {
        name: "Radha - Jab Harry Met Sejal (Slowed)",
        path: "HinMus/h9.mp3",
        img: "HinImg/h9.jpg",
        singer: "Clinton Cerejo, Loy Mendonsa and Shankar Mahadevan"
    },


];


let tracks = document.querySelector('.tracks');

for (let i = 0; i < All_song.length; i++) {

    let Html = ` <div class="song">
         <div class="img">
         <img src="${All_song[i].img}"/>
         </div>
         <div class="more">
         <audio src="${All_song[i].path}" id="music"></audio>
         <div class="song_info">
            <p id="title">${All_song[i].name}</p>
            <p>${All_song[i].singer}</p>
         </div>
         <button id="play_btn"><i class="fa fa-play" aria-hidden="true"></i></i></button>
         </div>
       </div>`;

    tracks.insertAdjacentHTML("beforeend", Html);
};