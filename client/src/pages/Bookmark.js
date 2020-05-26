import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import url from '../url';
import { useHistory } from 'react-router-dom';

export default function Bookmark () {
    const history = useHistory();
    if(!localStorage.getItem('access_token')){
        history.push('/');
    }

    const [bookmark,setBookmark] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(()=>{
        let urlLink = `${url}/articles/me/bookmarked`
        fetch(urlLink, {
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