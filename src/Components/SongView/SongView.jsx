import PlaylistIcon from '../../assets/PlaylistIcon.webp'
import PratyushLogo from '../../assets/Pratyush_devloper-logo.jpg'
import ClockIcon from '../../assets/Clock Icon.svg'
import React, { useState } from 'react'
import PlayView from '../PlayView/PlayView.jsx'
import './songview.css'

const SongView = ({ PlayViewDisplay, Songs, Song, changeSong, Playlist }) => {

  return (
    <div id="SongView"  style={{width: PlayViewDisplay ? '888px' : '1299px'}}>
       <div id="gradent">
        <div id="info">
            <div id="logo">
                <img src={PlaylistIcon} alt="" />
            </div>
            <div id="text">
                <div id="PlayList-name">
                    <h1>{Playlist}</h1>
                </div>
                <div id="author">
                    <div id="logo">
                        <img src={PratyushLogo} alt="" />
                    </div>
                    <span>Pratyush kumar</span>
                </div>
            </div>
        </div>
        <br />
        <div id="div">
        <table id="table">
            <thead>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th><img src={ClockIcon} alt="" /></th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p>1</p>
                        <div className="playSong" onClick={() => {
                            changeSong(1)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path></svg>
                        </div>
                    </td>
                    <td>
                        <img src={Songs[1].LogoPath} alt="" />
                        <span>{Songs[1].Name}</span>
                    </td>
                    <td>
                        <samp>{Songs[1].Author}</samp>
                    </td>
                    <td>{Songs[1].Time}</td>
                </tr>
                <tr>
                    <td>
                        <p>2</p>
                        <div className="playSong" onClick={() => {
                            changeSong(2)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path></svg>
                        </div>
                    </td>
                    <td>
                        <img src={Songs[2].LogoPath} alt="" />
                        <span>{Songs[2].Name}</span>
                    </td>
                    <td>
                        <samp>{Songs[2].Author}</samp>
                    </td>
                    <td>{Songs[2].Time}</td>
                </tr>
                <tr>
                    <td>
                        <p>3</p>
                        <div className="playSong" onClick={() => {
                            changeSong(3)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path></svg>
                        </div>
                    </td>
                    <td>
                        <img src={Songs[3].LogoPath} alt="" />
                        <span>{Songs[3].Name}</span>
                    </td>
                    <td>
                        <samp>{Songs[3].Author}</samp>
                    </td>
                    <td>{Songs[3].Time}</td>
                </tr>
                <tr>
                    <td>
                        <p>4</p>
                        <div className="playSong" onClick={() => {
                            changeSong(4)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path></svg>
                        </div>
                    </td>
                    <td>
                        <img src={Songs[4].LogoPath} alt="" />
                        <span>{Songs[4].Name}</span>
                    </td>
                    <td>
                        <samp>{Songs[4].Author}</samp>
                    </td>
                    <td>{Songs[4].Time}</td>
                </tr>
                <tr>
                    <td>
                        <p>5</p>
                        <div className="playSong" onClick={() => {
                            changeSong(5)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path></svg>
                        </div>
                    </td>
                    <td>
                        <img src={Songs[5].LogoPath} alt="" />
                        <span>{Songs[5].Name}</span>
                    </td>
                    <td>
                        <samp>{Songs[5].Author}</samp>
                    </td>
                    <td>{Songs[5].Time}</td>
                </tr>
                <tr>
                    <td>
                        <p>6</p>
                        <div className="playSong" onClick={() => {
                            changeSong(6)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path></svg>
                        </div>
                    </td>
                    <td>
                        <img src={Songs[6].LogoPath} alt="" />
                        <span>{Songs[6].Name}</span>
                    </td>
                    <td>
                        <samp>{Songs[6].Author}</samp>
                    </td>
                    <td>{Songs[6].Time}</td>
                </tr>
                <tr>
                    <td>
                        <p>7</p>
                        <div className="playSong" onClick={() => {
                            changeSong(7)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path></svg>
                        </div>
                    </td>
                    <td>
                        <img src={Songs[7].LogoPath} alt="" />
                        <span>{Songs[7].Name}</span>
                    </td>
                    <td>
                        <samp>{Songs[7].Author}</samp>
                    </td>
                    <td>{Songs[7].Time}</td>
                </tr>
                {/* <tr>
                    <td>8</td>
                    <td>
                        <img src={PlaylistIcon} alt="" />
                        <span>Heading</span>
                    </td>
                    <td>
                        <samp>Author</samp>
                    </td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>
                        <img src={PlaylistIcon} alt="" />
                        <span>Heading</span>
                    </td>
                    <td>
                        <samp>Author</samp>
                    </td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>
                        <img src={PlaylistIcon} alt="" />
                        <span>Heading</span>
                    </td>
                    <td>
                        <samp>Author</samp>
                    </td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>
                        <img src={PlaylistIcon} alt="" />
                        <span>Heading</span>
                    </td>
                    <td>
                        <samp>Author</samp>
                    </td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>
                        <img src={PlaylistIcon} alt="" />
                        <span>Heading</span>
                    </td>
                    <td>
                        <samp>Author</samp>
                    </td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>
                        <img src={PlaylistIcon} alt="" />
                        <span>Heading</span>
                    </td>
                    <td>
                        <samp>Author</samp>
                    </td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>
                        <img src={PlaylistIcon} alt="" />
                        <span>Heading</span>
                    </td>
                    <td>
                        <samp>Author</samp>
                    </td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>
                        <img src={PlaylistIcon} alt="" />
                        <span>Heading</span>
                    </td>
                    <td>
                        <samp>Author</samp>
                    </td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>
                        <img src={PlaylistIcon} alt="" />
                        <span>Heading</span>
                    </td>
                    <td>
                        <samp>Author</samp>
                    </td>
                    <td>0:00</td>
                </tr> */}
            </tbody>
        </table>
        </div>
        </div>

    </div>
  )
}

export default SongView
