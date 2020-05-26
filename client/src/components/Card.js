import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import url from '../url';

export default function Card({ data, changeStatus }){//props bisa mndpt data dari parent yaitu App.js
    
    function deleteBookmark(){
        fetch(`${url}/articles/${data.id}/unbookmark`,{
            method: 'DELETE',
            headers:{
                access_token: localStorage.getItem('access_token')
            }
        })
            .then(res => res.json())
            .then(data => {
                changeStatus();
            });
    }

    return(
        <div className="card-container">
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



