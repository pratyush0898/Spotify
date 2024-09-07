import React from 'react'
import { useState, useEffect, useContext } from 'react'
import NavBar from '../../Components/NavBar/NavBar.jsx'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import SongContols from '../../Components/DownBar/Controls/SongContols.jsx'
import SongView from '../../Components/SongView/SongView.jsx'
import PlayView from '../../Components/PlayView/PlayView.jsx'
import Pedro from '../../../public/images/Pedro.jpg'
import Golden from '../../../public/images/Golden.jpeg'
import TD from '../../../public/images/3D.jpeg'
import LAR from '../../../public/images/Left and Right.jpeg'
import CBW from '../../../public/images/cowbell warriors.jpeg'
import './Home.css'

const Home = () => {
  const [PlayViewDisplay, setPlayViewDisplay] = useState(true);
  function toggelPlayViewDisplay() {
      setPlayViewDisplay(!PlayViewDisplay);
  }
  const Songs = [
    {
      Num: "0",
      Name: "Binary",
      Author: "01000010 01010100 01010011",
      Time: "0:00",
      LogoPath: "",
      Path: "./audio/Binary.mp3"
    },
    {
      Num: "1",
      Name: "Seven",
      Author: "JungKook",
      Time: "3:03",
      LogoPath: Golden,
      Path: "./audio/Seven.mp3"
    },
    {
      Num: "2",
      Name: "Standing next to you",
      Author: "JungKook",
      Time: "3:36",
      LogoPath: Golden,
      Path: "./audio/Standing next to you.mp3"
    },
    {
      Num: "3",
      Name: "3D",
      Author: "JungKook",
      Time: "3:21",
      LogoPath: TD,
      Path: "./audio/3D.mp3"
    },
    {
      Num: "4",
      Name: "Left and right",
      Author: "JungKook",
      Time: "2:34",
      LogoPath: LAR,
      Path: "./audio/Left and right.mp3"
    },
    {
      Num: "5",
      Name: "Yes or no",
      Author: "JungKook",
      Time: "2:27",
      LogoPath: Golden,
      Path: "./audio/Yes or no.mp3"
    },
    {
      Num: "6",
      Name: "Pedro",
      Author: "Italian singers",
      Time: "2:15",
      LogoPath: Pedro,
      Path: "./audio/Yes or no.mp3"
    },
    {
      Num: "7",
      Name: "cowbell warriors",
      Author: "SXMPRA",
      Time: "2:29",
      LogoPath: CBW,
      Path: "./audio/Yes or no.mp3"
    }
  ];

  const Playlist = 'Songs'
  
  const [Song, setSong] = useState(Songs[1])

  function changeSong(num) {
    setSong(Songs[num])
  }

  const [isPlay, setisPlay] = useState(false)
  function handelIsPlay() {
    setisPlay(!isPlay)
  }

  // document.addEventListener("keydown", function(event) {
  //   if (event.keyCode === '32') {
  //     handelIsPlay()
  //   }
  // });

  // const handelKeyDown = (event) => {
  //   if (event.Code ==='Space') {
  //       handelIsPlay()
  //   }
  // }


  return (
    <>
      <NavBar />
      <div id="main">
        <Sidebar />
        <SongView PlayViewDisplay={PlayViewDisplay} Songs={Songs} Song={Song} changeSong={changeSong} Playlist={Playlist}/>
        <PlayView PlayViewDisplay={PlayViewDisplay} toggelPlayViewDisplay={toggelPlayViewDisplay} Song={Song} changeSong={changeSong} Playlist={Playlist}/>
      </div>
      
      <SongContols isPlay={isPlay} handelIsPlay={handelIsPlay}  PlayViewDisplay={PlayViewDisplay} toggelPlayViewDisplay={toggelPlayViewDisplay} Songs={Songs} Song={Song} changeSong={changeSong}/>
    </>
  )
}

export default Home
