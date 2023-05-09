let All_song = [
   {
      name: "Con-Calma Slowed Reverb",
      path: "SpaMus/1.mp3",
      img: "SpaImg/s1.jpg",
      singer: "Daddy Yankee"
   }
   ,
   {
      name: "Danza kuduro",
      path: "SpaMus/2.mp3",
      img: "SpaImg/s2.jpg",
      singer: "Don Omar"
   }
   ,
   {
      name: "Love Story",
      path: "SpaMus/7.mp3",
      img: "SpaImg/s7.jpg",
      singer: " Indila"
   }
   ,
   {
      name: "Bailando",
      path: "SpaMus/3.mp3",
      img: "SpaImg/s3.jpg",
      singer: "Enrique Iglesias"
   }
   ,
   {
      name: "Despacito",
      path: "SpaMus/4.mp3",
      img: "SpaImg/s4.jpg",
      singer: "Luis Fonsi Feat. Justin Bieber"
   }
   ,
   
   {
      name: "Mi Gata Slowed & Reverb",
      path: "SpaMus/6.mp3",
      img: "SpaImg/s6.jpg",
      singer: "Standly, El Barto"
   }
   ,
   {
      name: "C'est La Vie Slowed & Reverb",
      path: "SpaMus/5.mp3",
      img: "SpaImg/s5.jpg",
      singer: "Khaled"
   }
   
   // ,
   // {
   //    name: "Danza kuduro",
   //    path: "SpaMus/2.mp3",
   //    img: "SpaImg/s2.jpg",
   //    singer: "Don Omar"
   // }
   
   
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