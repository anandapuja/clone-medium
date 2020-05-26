import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function Bookmark () {

    const [bookmark,setBookmark] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(()=>{
        let url = `http://localhost:3001/articles/me/bookmarked`
        fetch(url, {
            headers:{
                access_token: localStorage.getItem('access_token')
            }
        })
            .then(resp=>resp.json())
            .then(resp=>{
                setBookmark(resp)
            })
            .catch(err=>{
                console.log(err)
            })
    },[status])

    const changeStatus = () => {
        setStatus(!status);
    }
    
    return (
        <div className="bookmark-container">
            <h1 className="readingListTitle">Your Bookmark List</h1>
            {
                bookmark.map(mark => (
                    <Card key={mark.id} data={mark.Article} changeStatus={changeStatus} />
                ))
            }        
        </div>
    )
}