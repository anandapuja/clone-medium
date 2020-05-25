import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Card({ data, changeStatus }){//props bisa mndpt data dari parent yaitu App.js
    
    function deleteBookmark(){
        // console.log("entering delete bookmarked!!!!!!!!!!!!!")
        fetch(`http://localhost:3001/articles/${data.id}/unbookmark`,{
            method: 'DELETE',
            headers:{
                access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJFbWFpbCI6ImFuYW5kYXB1amFAZ21haWwuY29tIiwiaWF0IjoxNTkwMDY5MDk2fQ.xgXkAyPdTbYz4hAFN8UPnaqpZWm0G7hsYhED1_Qc3_s'
            }
        })
            .then(res => res.json())
            .then(data => {
                changeStatus();
            });
    }

    return(
        <div className="card">
            <div className="card-body">
                <Link to={`/articles/${data.id}`}><h2 className="titleBookmark">{ data.title }</h2></Link>
                <p>Write by: { data.User.user_name }</p>
                <p>{ data.date }</p>
            </div>
            <div onClick={deleteBookmark} className="options">
                <FaTrashAlt/><p className="deleteButton">UnBookmark</p>
            </div>
        </div>
    )
}



