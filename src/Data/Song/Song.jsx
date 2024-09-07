import React, { useState } from "react";
import MyContext from './MyContext.js'

const Song = () => {
  const Songs = [
    {
      Num: "0",
      Name: "Main",
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
      LogoPath: "",
      Path: "./audio/Seven.mp3"
    },
    {
      Num: "2",
      Name: "Standing next to you",
      Author: "JungKook",
      Time: "3:36",
      LogoPath: "",
      Path: "./audio/Standing next to you.mp3"
    },
    {
      Num: "3",
      Name: "3D",
      Author: "JungKook",
      Time: "3:21",
      LogoPath: "",
      Path: "./audio/3D.mp3"
    },
    {
      Num: "4",
      Name: "Left and right",
      Author: "JungKook",
      Time: "2:34",
      LogoPath: "",
      Path: "./audio/Left and right.mp3"
    },
    {
      Num: "5",
      Name: "Yes or no",
      Author: "JungKook",
      Time: "2:27",
      LogoPath: "",
      Path: "./audio/Yes or no.mp3"
    },
    {
      Num: "6",
      Name: "Pedro",
      Author: "JungKook",
      Time: "Italian singers",
      LogoPath: "",
      Path: "./audio/Yes or no.mp3"
    },
    {
      Num: "7",
      Name: "cowbell warriors",
      Author: "SXMPRA",
      Time: "2:29",
      LogoPath: "",
      Path: "./audio/Yes or no.mp3"
    },
  ];
  const [Song, setSong] = useState()

  const [Playlist, setPlaylist] = useState('Songs')

  function changeSong(num) {
    setSong(Songs[num])
  }

  return (
        <MyContext.Provider value={{ Song, changeSong }}>
            {props.children}
        </MyContext.Provider>
  )
};

export default Song;
