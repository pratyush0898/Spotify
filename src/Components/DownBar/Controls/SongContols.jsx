import React, { useState } from 'react'
import SongLogo from '../../../assets/PlaylistIcon.webp'
import PlayBox from '../../../assets/PlayBox.svg'
import './songcontols.css'

const SongContols = ({ PlayViewDisplay, toggelPlayViewDisplay, isPlay, handelIsPlay, Songs, Song, changeSong }) => {
    
    return (
        <section id="control">
                <section id="info">
                    <div id="songLogo">
                        <img src={SongLogo} alt="" />
                    </div>
                </section>
                <section id="mainControl">
                    <div id="controlButtons">
                        <div id="previous">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f0f8ff"><path d="M7 18V6H9V18H7ZM11 12 17 6V18L11 12Z"></path></svg>
                        </div>
                        <div id="playPause" onClick={handelIsPlay}>
                            <div style={{display: isPlay ? 'none' : 'block'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path></svg>
                            </div>
                            <div style={{display: isPlay ? 'block' : 'none'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"></path></svg>
                            </div>
                        </div>
                        <div id="next">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f0f8ff"><path d="M17 6 17 18H15L15 6 17 6ZM13 12 7 18V6L13 12Z"></path></svg>
                        </div>
                    </div>
                    <div id="timeBar">

                    </div>
                </section>
                <section id="controls">
                    <div id="toggleDisplay" onClick={toggelPlayViewDisplay}>
                        <svg fill={PlayViewDisplay ? '#00b241' : 'white'} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-play-box-outline" width="24" height="24" viewBox="0 0 24 24"><path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,8V16L15,12L10,8Z" /></svg>
                    </div>
                </section>
        </section>
    )
}

export default SongContols
