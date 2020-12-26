import React from 'react'
import "./Feed.css"
import CreateIcon  from "@material-ui/icons/Create"
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InputOption from "./InputOption"

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form >
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={PhotoIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={YouTubeIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={AssignmentIcon} title="Write article" color="#7FC15E"/>
                   
                </div>
            </div>
        </div>
    )
}

export default Feed
