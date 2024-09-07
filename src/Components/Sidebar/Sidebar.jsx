import React from 'react'
import LibraryIcon from '../../assets/library.svg'
import PlaylistIcon from '../../assets/PlaylistIcon.webp'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div id='sidebar'>
        <span id='lib-icon'>
            <svg data-encore-id="icon" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"><path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path></svg>
        </span>
        <ul id="playlists">
            <li><img src={PlaylistIcon} alt="" /></li>
            <li><img src={PlaylistIcon} alt="" /></li>
            <li><img src={PlaylistIcon} alt="" /></li>
            <li><img src={PlaylistIcon} alt="" /></li>
            <li><img src={PlaylistIcon} alt="" /></li>
            <li><img src={PlaylistIcon} alt="" /></li>
            <li><img src={PlaylistIcon} alt="" /></li>
            <li><img src={PlaylistIcon} alt="" /></li>
            <li><img src={PlaylistIcon} alt="" /></li>
            <li><img src={PlaylistIcon} alt="" /></li>
            <li><img src={PlaylistIcon} alt="" /></li>
        </ul>
    </div>
  )
}

export default Sidebar
