import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function Bookmark () {

    const [bookmark,setBookmark] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(()=>{
        let url = `http://localhost:3001/articles/me/bookmarked`
        fetch(url, {
            headers:{
                access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJFbWFpbCI6ImFuYW5kYXB1amFAZ21haWwuY29tIiwiaWF0IjoxNTkwMDY5MDk2fQ.xgXkAyPdTbYz4hAFN8UPnaqpZWm0G7hsYhED1_Qc3_s'
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