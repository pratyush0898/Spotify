import React, {useState} from 'react'
import X from '../../assets/X-icon.svg'
import Logo from '../../assets/PlaylistIcon.webp'
import SongView from '../SongView/SongView'
import './playview.css'

const PlayView = ({ PlayViewDisplay, toggelPlayViewDisplay, Playlist, Song, Songs, changeSong }) => {

  return (
    <section id="PlayView" style={{display: PlayViewDisplay ? 'block': 'none'}}>
        <div id="header">
            <div id="heading">
                <span>{Playlist}</span>
            </div>
            <div id="closeButton" onClick={toggelPlayViewDisplay}>
                <img src={X} alt="" />
            </div>
        </div>
        <div id="info">
            <div id="image">
                <img src={Song.LogoPath} alt="" />
            </div>
            <div id="text">
                <div id="heading">
                    <h1>{Song.Name}</h1>
                </div>
                <div id="artist">
                    <span>
                        {Song.Author}
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PlayView
