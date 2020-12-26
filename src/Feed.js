import React, { useState, useEffect } from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InputOption from "./InputOption"
import Post from "./Post";
import { db } from "./Firebase";
import firebase from "firebase"

function Feed() {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot =>
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
                )
            );
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: "Habib Koç",
            description: "This is a test",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form >
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={PhotoIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={YouTubeIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={AssignmentIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
                return (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        messages={message}
                        photoUrl={photoUrl}
                    />
                );
            })}
        </div>
    )
}

export default Feed
