// import { useRef, useState } from 'react';
// import './App.css';

// function App() {

//   const [currentMusicDetails, setCurrentMusicDetails] = useState({
//     songName: 'Chasing',
//     songArtist: 'NEFFEX',
//     songSrc: './Assets/songs/Chasing - NEFFEX.mp3',
//     songAvatar: './Assets/Images/image1.jpg'
//   })

//   //UseStates Variables
//   const [audioProgress, setAudioProgress] = useState(0);
//   const [isAudioPlaying, setIsAudioPlaying] = useState(false);
//   const [musicIndex, setMusicIndex] = useState(0);
//   const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
//   const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
//   const [videoIndex, setVideoIndex] = useState(0)

//   const currentAudio = useRef()

//   const handleMusicProgressBar = (e)=>{
//     setAudioProgress(e.target.value);
//     currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
//   }

//   //Change Avatar Class
//   let avatarClass = ['objectFitCover','objectFitContain','none']
//   const [avatarClassIndex, setAvatarClassIndex] = useState(0)
//   const handleAvatar = ()=>{
//     if (avatarClassIndex >= avatarClass.length - 1) {
//       setAvatarClassIndex(0)
//     }else{
//       setAvatarClassIndex(avatarClassIndex + 1)
//     }
//   }

//   //Play Audio Function
//   const handleAudioPlay = ()=>{
//     if (currentAudio.current.paused) {
//       currentAudio.current.play();
//       setIsAudioPlaying(true)
//     }else{
//       currentAudio.current.pause();
//       setIsAudioPlaying(false)
//     }
//   }

//   const musicAPI = [
//     {
//       songName: 'Count on me',
//       songArtist: 'Bruno mars',
//       songSrc: './Assets/songs/count-on-me.mp3',
//       songAvatar: './Assets/Images/4morning.jpg'
//     },
//     {
//       songName: 'Ek ladke ko dekha',
//       songArtist: 'Pagal Ladka',
//       songSrc: './Assets/songs/ek-ladke-ko-dekha.mp3',
//       songAvatar: './Assets/Images/him.jpg'
//     },
//     {
//       songName: 'Catch Me If I Fall',
//       songArtist: 'TEGNENT',
//       songSrc: './Assets/songs/Catch Me If I Fall - NEFFEX.mp3',
//       songAvatar: './Assets/Images/image2.jpg'
//     },
//     {
//       songName: 'Inspired (Clean)',
//       songArtist: 'NEFFEX',
//       songSrc: './Assets/songs/Inspired (Clean) - NEFFEX.mp3',
//       songAvatar: './Assets/Images/image3.jpg'
//     },
//     {
//       songName: 'Baby doll [ slowed + reverb ]',
//       songArtist: 'Kanika Kapoor',
//       songSrc: './Assets/songs/Baby doll [ slowed + reverb ] __ meet bros ,Kanika Kapoor __ jr santu.mp3',
//       songAvatar: './Assets/Images/image5.jpg'
//     },
//     {
//       songName: 'Soch (Slowed+Reverbed)',
//       songArtist: 'Hardy Sandhu',
//       songSrc: './Assets/songs/SOCH(Slowed+Reverbed) __ Hardy Sandhu.webm',
//       songAvatar: './Assets/Images/image6.jpg'
//     },
//     {
//       songName: 'Apna Bana Le',
//       songArtist: 'Arijit Singh',
//       songSrc: './Assets/songs/Apna Bana Le - Full Audio _ Bhediya _ Varun Dhawan, Kriti Sanon_ Sachin-Jigar,Arijit Singh,Amitabh B.webm',
//       songAvatar: './Assets/Images/image7.jpg'
//     }
//   ]

//   const handleNextSong = ()=>{
//     if (musicIndex >= musicAPI.length - 1) {
//       let setNumber = 0;
//       setMusicIndex(setNumber);
//       updateCurrentMusicDetails(setNumber);
//     }else{
//       let setNumber = musicIndex + 1;
//       setMusicIndex(setNumber)
//       updateCurrentMusicDetails(setNumber);
//     }
//   }

//   const handlePrevSong = ()=>{
//     if (musicIndex === 0) {
//       let setNumber = musicAPI.length - 1;
//       setMusicIndex(setNumber);
//       updateCurrentMusicDetails(setNumber);
//     }else{
//       let setNumber = musicIndex - 1;
//       setMusicIndex(setNumber)
//       updateCurrentMusicDetails(setNumber);
//     }
//   }

//   const updateCurrentMusicDetails = (number)=>{
//     let musicObject = musicAPI[number];
//     currentAudio.current.src = musicObject.songSrc;
//     currentAudio.current.play();
//     setCurrentMusicDetails({
//       songName: musicObject.songName,
//       songArtist: musicObject.songArtist,
//       songSrc: musicObject.songSrc,
//       songAvatar: musicObject.songAvatar
//     })
//     setIsAudioPlaying(true);
//   }

//   const handleAudioUpdate = ()=>{
//     //Input total length of the audio
//     let minutes = Math.floor(currentAudio.current.duration / 60);
//     let seconds = Math.floor(currentAudio.current.duration % 60);
//     let musicTotalLength0 = `${minutes <10 ? `0${minutes}` : minutes} : ${seconds <10 ? `0${seconds}` : seconds}`;
//     setMusicTotalLength(musicTotalLength0);

//     //Input Music Current Time
//     let currentMin = Math.floor(currentAudio.current.currentTime / 60);
//     let currentSec = Math.floor(currentAudio.current.currentTime % 60);
//     let musicCurrentT = `${currentMin <10 ? `0${currentMin}` : currentMin} : ${currentSec <10 ? `0${currentSec}` : currentSec}`;
//     setMusicCurrentTime(musicCurrentT);

//     const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
//     setAudioProgress(isNaN(progress)? 0 : progress)
//   }

//   //const vidArray = ['./Assets/Videos/video1.mp4','./Assets/Videos/video2.mp4','./Assets/Videos/video3.mp4','./Assets/Videos/video4.mp4','./Assets/Videos/video5.mp4','./Assets/Videos/video6.mp4'];
//   const vidArray = ['./Assets/Images/him.jpg'];

//   const handleChangeBackground = ()=>{
//     if (videoIndex >= vidArray.length - 1) {
//       setVideoIndex(0);
//     }else{
//       setVideoIndex(videoIndex + 1)
//     }
//   }

//   return (
//     <>
//     <div className="container">
//       <audio src='./Assets/songs/Chasing - NEFFEX.mp3' ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
//       <video src={vidArray[videoIndex]} loop muted autoPlay className='backgroundVideo'></video>
//       <div className="blackScreen"></div>
//       <div className="music-Container">
//         <p className='musicPlayer'>Music Player</p>
//         <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
//         <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
//         <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
//         <div className="musicTimerDiv">
//           <p className='musicCurrentTime'>{musicCurrentTime}</p>
//           <p className='musicTotalLenght'>{musicTotalLength}</p>
//         </div>
//         <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
//         <div className="musicControlers">
//           <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
//           <i className={`fa-solid ${isAudioPlaying? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
//           <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
//         </div>
//       </div>
//       <div className="changeBackBtn" onClick={handleChangeBackground}>
//         Change Background
//       </div>
//     </div>
//     </>
//   );
// }

// export default App;

// import { useRef, useState } from "react";
// import "./App.css";

// function App() {
//   // Set the initial song to "Count on Me" by Bruno Mars
//   const [currentMusicDetails, setCurrentMusicDetails] = useState({
//     songName: "Count on me",
//     songArtist: "Bruno mars",
//     songSrc: "./Assets/songs/count-on-me.mp3",
//     songAvatar: "./Assets/Images/image2.jpg",
//   });

//   // UseStates Variables
//   const [audioProgress, setAudioProgress] = useState(0);
//   const [isAudioPlaying, setIsAudioPlaying] = useState(false);
//   const [musicIndex, setMusicIndex] = useState(0); // Default to index 0 which is "Count on Me"
//   const [musicTotalLength, setMusicTotalLength] = useState("04 : 38");
//   const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");
//   const [videoIndex, setVideoIndex] = useState(0);
//   const [isMessageWindowOpen, setIsMessageWindowOpen] = useState(false);

//   const currentAudio = useRef();

//   const handleMusicProgressBar = (e) => {
//     setAudioProgress(e.target.value);
//     currentAudio.current.currentTime =
//       (e.target.value * currentAudio.current.duration) / 100;
//   };

//   // Change Avatar Class
//   let avatarClass = ["objectFitCover", "objectFitContain", "none"];
//   const [avatarClassIndex, setAvatarClassIndex] = useState(0);
//   const handleAvatar = () => {
//     if (avatarClassIndex >= avatarClass.length - 1) {
//       setAvatarClassIndex(0);
//     } else {
//       setAvatarClassIndex(avatarClassIndex + 1);
//     }
//   };

//   // Play Audio Function
//   const handleAudioPlay = () => {
//     if (currentAudio.current.paused) {
//       currentAudio.current.play();
//       setIsAudioPlaying(true);
//     } else {
//       currentAudio.current.pause();
//       setIsAudioPlaying(false);
//     }
//   };

//   const musicAPI = [
//     {
//       songName: "Count on me",
//       songArtist: "Bruno mars",
//       songSrc: "./Assets/songs/count-on-me.mp3",
//       songAvatar: "./Assets/Images/iamge2.jpg",
//     },
//     {
//       songName: "Ek ladke ko dekha",
//       songArtist: "Pagal Ladka",
//       songSrc: "./Assets/songs/ek-ladke-ko-dekha.mp3",
//       songAvatar: "./Assets/Images/image2.jpg",
//     },
//     {
//       songName: "Catch Me If I Fall",
//       songArtist: "TEGNENT",
//       songSrc: "./Assets/songs/Catch Me If I Fall - NEFFEX.mp3",
//       songAvatar: "./Assets/Images/image2.jpg",
//     },
//     {
//       songName: "Inspired (Clean)",
//       songArtist: "NEFFEX",
//       songSrc: "./Assets/songs/Inspired (Clean) - NEFFEX.mp3",
//       songAvatar: "./Assets/Images/image3.jpg",
//     },
//     {
//       songName: "Baby doll [ slowed + reverb ]",
//       songArtist: "Kanika Kapoor",
//       songSrc:
//         "./Assets/songs/Baby doll [ slowed + reverb ] __ meet bros ,Kanika Kapoor __ jr santu.mp3",
//       songAvatar: "./Assets/Images/image5.jpg",
//     },
//     {
//       songName: "Soch (Slowed+Reverbed)",
//       songArtist: "Hardy Sandhu",
//       songSrc: "./Assets/songs/SOCH(Slowed+Reverbed) __ Hardy Sandhu.webm",
//       songAvatar: "./Assets/Images/image6.jpg",
//     },
//     {
//       songName: "Apna Bana Le",
//       songArtist: "Arijit Singh",
//       songSrc:
//         "./Assets/songs/Apna Bana Le - Full Audio _ Bhediya _ Varun Dhawan, Kriti Sanon_ Sachin-Jigar,Arijit Singh,Amitabh B.webm",
//       songAvatar: "./Assets/Images/image7.jpg",
//     },
//   ];

//   const handleNextSong = () => {
//     if (musicIndex >= musicAPI.length - 1) {
//       let setNumber = 0;
//       setMusicIndex(setNumber);
//       updateCurrentMusicDetails(setNumber);
//     } else {
//       let setNumber = musicIndex + 1;
//       setMusicIndex(setNumber);
//       updateCurrentMusicDetails(setNumber);
//     }
//   };

//   const handlePrevSong = () => {
//     if (musicIndex === 0) {
//       let setNumber = musicAPI.length - 1;
//       setMusicIndex(setNumber);
//       updateCurrentMusicDetails(setNumber);
//     } else {
//       let setNumber = musicIndex - 1;
//       setMusicIndex(setNumber);
//       updateCurrentMusicDetails(setNumber);
//     }
//   };

//   const updateCurrentMusicDetails = (number) => {
//     let musicObject = musicAPI[number];
//     currentAudio.current.src = musicObject.songSrc;
//     currentAudio.current.play();
//     setCurrentMusicDetails({
//       songName: musicObject.songName,
//       songArtist: musicObject.songArtist,
//       songSrc: musicObject.songSrc,
//       songAvatar: musicObject.songAvatar,
//     });
//     setIsAudioPlaying(true);
//   };

//   const handleAudioUpdate = () => {
//     // Input total length of the audio
//     let minutes = Math.floor(currentAudio.current.duration / 60);
//     let seconds = Math.floor(currentAudio.current.duration % 60);
//     let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
//       seconds < 10 ? `0${seconds}` : seconds
//     }`;
//     setMusicTotalLength(musicTotalLength0);

//     // Input Music Current Time
//     let currentMin = Math.floor(currentAudio.current.currentTime / 60);
//     let currentSec = Math.floor(currentAudio.current.currentTime % 60);
//     let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
//       currentSec < 10 ? `0${currentSec}` : currentSec
//     }`;
//     setMusicCurrentTime(musicCurrentT);

//     const progress = parseInt(
//       (currentAudio.current.currentTime / currentAudio.current.duration) * 100
//     );
//     setAudioProgress(isNaN(progress) ? 0 : progress);
//   };

//   const vidArray = ["./Assets/Images/him.jpg"];

//   const handleMessageWindow = () => {
//     setIsMessageWindowOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <div className="container">
//         <audio
//           src="./Assets/songs/count-on-me.mp3"
//           ref={currentAudio}
//           onEnded={handleNextSong}
//           onTimeUpdate={handleAudioUpdate}
//         ></audio>
//         <video
//           src="./Assets/Videos/video1.mp4"
//           loop
//           muted
//           autoPlay
//           className="backgroundVideo"
//         ></video>
//         <div className="blackScreen"></div>
//         <div className="music-Container">
//           <p className="musicPlayer">Music Player</p>
//           <p className="music-Head-Name">{currentMusicDetails.songName}</p>
//           <p className="music-Artist-Name">{currentMusicDetails.songArtist}</p>
//           <img
//             src={currentMusicDetails.songAvatar}
//             className={avatarClass[avatarClassIndex]}
//             onClick={handleAvatar}
//             alt="song Avatar"
//             id="songAvatar"
//           />
//           <div className="musicTimerDiv">
//             <p className="musicCurrentTime">{musicCurrentTime}</p>
//             <p className="musicTotalLenght">{musicTotalLength}</p>
//           </div>
//           <input
//             type="range"
//             name="musicProgressBar"
//             className="musicProgressBar"
//             value={audioProgress}
//             onChange={handleMusicProgressBar}
//           />
//           <div className="musicControlers">
//             <i
//               className="fa-solid fa-backward musicControler"
//               onClick={handlePrevSong}
//             ></i>
//             <i
//               className={`fa-solid ${
//                 isAudioPlaying ? "fa-pause-circle" : "fa-circle-play"
//               } playBtn`}
//               onClick={handleAudioPlay}
//             ></i>
//             <i
//               className="fa-solid fa-forward musicControler"
//               onClick={handleNextSong}
//             ></i>
//           </div>
//         </div>

//         <div className="changeBackBtn" onClick={handleMessageWindow}>
//           Message
//         </div>

//         {/* Message window */}
//         <div className={`messageWindow ${isMessageWindowOpen ? "active" : ""}`}>
//           <div className="messageHeader">
//             <h2>Messages</h2>
//             <span className="closeMessageWindow" onClick={handleMessageWindow}>
//               &times;
//             </span>
//           </div>
//           <p>Your message content goes here...</p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useRef, useState } from "react";
import "./App.css";

function App() {
  // Set the initial song to "Count on Me" by Bruno Mars
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: "Count on me",
    songArtist: "Bruno Mars",
    songSrc: "./Assets/songs/count-on-me.mp3",
    songAvatar: "./Assets/Images/4morning.jpg",
    message: `
Happy Birthday Sumir! 🎉

On your special day, I just want to take a moment to thank you for always being there for me. You've shown me what true friendship really means, and I’m so grateful to have someone like you by my side. Whether it's the good times or the challenging moments, you’re always there, and it means the world to me.

You’ve not only been a friend but someone I can count on through everything. I appreciate your kindness, your support, and the way you make life a little brighter. Here’s to many more years of laughter, adventures, and friendship! Have an amazing birthday! 🎂🎁`,
  });

  // UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0); // Default to index 0 which is "Count on Me"
  const [musicTotalLength, setMusicTotalLength] = useState("04 : 38");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");
  //const [videoIndex, setVideoIndex] = useState(0);
  const [isMessageWindowOpen, setIsMessageWindowOpen] = useState(false);

  const currentAudio = useRef();

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };

  // Change Avatar Class
  let avatarClass = ["objectFitCover", "objectFitContain", "none"];
  const [avatarClassIndex, setAvatarClassIndex] = useState(0);
  const handleAvatar = () => {
    if (avatarClassIndex >= avatarClass.length - 1) {
      setAvatarClassIndex(0);
    } else {
      setAvatarClassIndex(avatarClassIndex + 1);
    }
  };

  // Play Audio Function
  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const musicAPI = [
    {
      songName: "Count on me",
      songArtist: "Bruno Mars",
      songSrc: "./Assets/songs/count-on-me.mp3",
      songAvatar: "./Assets/Images/4morning.jpg",
      message: `
Happy Birthday Sumir🎉

On your special day, I just want to take a moment to thank you for always being there for me. You've shown me what true friendship really means, and I’m so grateful to have someone like you by my side. Whether it's the good times or the challenging moments, you’re always there, and it means the world to me.

You’ve not only been a friend but someone I can count on through everything. I appreciate your kindness, your support, and the way you make life a little brighter. Here’s to many more years of laughter, adventures, and friendship! Have an amazing birthday! 🎂🎁`,
    },
    {
      songName: "Ek ladke ko dekha",
      songArtist: "Pagal Ladka",
      songSrc: "./Assets/songs/ek-ladke-ko-dekha.mp3",
      songAvatar: "./Assets/Images/him.jpg",
      message: `block 2`,
    },
    {
      songName: "Alone",
      songArtist: "Alan Walkar",
      songSrc: "./Assets/songs/alone.mp3",
      songAvatar: "./Assets/Images/radish.jpg",
      message: `block 3`,
    },
    {
      songName: "Tera Mujhse hai",
      songArtist: "Kishore kumar, R.D Burman",
      songSrc: "./Assets/songs/tera-mujhse-cut.mp3",
      songAvatar: "./Assets/Images/unexpected.jpg",
      message: `block 4`,
    },
    {
      songName: "Alone pt 2",
      songArtist: "Alan Walker",
      songSrc: "./Assets/songs/alonept2.mp3",
      songAvatar: "./Assets/Images/thanks.jpg",
      message: `block 4`,
    },
    {
      songName: "Tum Mile",
      songArtist: "Pritam",
      songSrc: "./Assets/songs/tum-mile-cut.mp3",
      songAvatar: "./Assets/Images/moments.jpg",
      message: `block 5`,
    },
    {
      songName: "Char Kadam",
      songArtist: "Ana",
      songSrc: "./Assets/songs/sbday.mp3",
      songAvatar: "./Assets/Images/birthday.jpg",
      message: `Ok I tried! Tumhe bhee pata hai fever tha uss din mujhe so even talking was tough. This is the first take I took. And yeah bare with the background noise I tried removing it online but they were useless`,
    },

    {
      songName: "Tera Yaar Hoon Main",
      songArtist: "Sumir",
      songSrc: "./Assets/songs/anaBirthdayGift.mp3",
      songAvatar: "./Assets/Images/4evening.jpg",
      message: `Just Wanted to give a place to your gift too
      "Wishing a very very happy birthday to the sweetest person in my life.. the angel who took me out of dark loneliness🥹, to the cutest friend I have had😅, to the person with whom I share anything and everything, to the person with whom I feel myself everytime, to the person with whom I find joy, and to the person who really means a lot to me. I hope you never stop growing in life, and that you get utter success, and may you always find peace and happiness. I have had the privilege to be one of your friends, and being a close one makes it even more special. I have always cherished our friendship and I always hope that we make many memories together(and then years later you could tell me the stories - I have basic memory plan you know🤧). Nevertheless, with very warm blessings and hopes of happiness in your life, Happy Birthday dear Anannya"`,
    },
  ];

  const handleNextSong = () => {
    if (musicIndex >= musicAPI.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const handlePrevSong = () => {
    if (musicIndex === 0) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const updateCurrentMusicDetails = (number) => {
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
      songAvatar: musicObject.songAvatar,
      message: musicObject.message,
    });
    setIsAudioPlaying(true);
  };

  const handleAudioUpdate = () => {
    // Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setMusicTotalLength(musicTotalLength0);

    // Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt(
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  const vidArray = ["./Assets/Images/him.jpg"];

  const handleMessageWindow = () => {
    setIsMessageWindowOpen((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        <audio
          src="./Assets/songs/count-on-me.mp3"
          ref={currentAudio}
          onEnded={handleNextSong}
          onTimeUpdate={handleAudioUpdate}
        ></audio>
        <video
          src="./Assets/Videos/video1.mp4"
          loop
          muted
          autoPlay
          className="backgroundVideo"
        ></video>
        <div className="blackScreen"></div>
        <div className="music-Container">
          <p className="musicPlayer">Music Player</p>
          <p className="music-Head-Name">{currentMusicDetails.songName}</p>
          <p className="music-Artist-Name">{currentMusicDetails.songArtist}</p>
          <img
            src={currentMusicDetails.songAvatar}
            className={avatarClass[avatarClassIndex]}
            onClick={handleAvatar}
            alt="song Avatar"
            id="songAvatar"
          />
          <div className="musicTimerDiv">
            <p className="musicCurrentTime">{musicCurrentTime}</p>
            <p className="musicTotalLenght">{musicTotalLength}</p>
          </div>
          <input
            type="range"
            name="musicProgressBar"
            className="musicProgressBar"
            value={audioProgress}
            onChange={handleMusicProgressBar}
          />
          <div className="musicControlers">
            <i
              className="fa-solid fa-backward musicControler"
              onClick={handlePrevSong}
            ></i>
            <i
              className={`fa-solid ${
                isAudioPlaying ? "fa-pause-circle" : "fa-circle-play"
              } playBtn`}
              onClick={handleAudioPlay}
            ></i>
            <i
              className="fa-solid fa-forward musicControler"
              onClick={handleNextSong}
            ></i>
          </div>
        </div>

        <div className="changeBackBtn" onClick={handleMessageWindow}>
          Message
        </div>

        {/* Message window */}
        <div className={`messageWindow ${isMessageWindowOpen ? "active" : ""}`}>
          <div className="messageHeader">
            <span className="closeMessageWindow" onClick={handleMessageWindow}>
              &times;
            </span>
          </div>
          <div className="messageContent">
            <p>{currentMusicDetails.message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
