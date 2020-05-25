import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';



export default function Card(props){//props bisa mndpt data dari parent yaitu App.js
    const [bookmark,setBookmark] = useState([])
    useEffect(()=>{
        let url = `https://localhost:3000/articles/me/bookmarked`
        fetch(url)
        .then(resp=>resp.json())
        .then(resp=>{
            setBookmark(resp.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })

    function deleteBookmark(id){
        // console.log("entering delete bookmarked!!!!!!!!!!!!!")
        let newBookmark = []
        for(let i=0;i<bookmark.length;i++){
            if(bookmark[i].id!==id){
                newBookmark.push(bookmark[i])
            }
        }
        setBookmark(newBookmark)
    }

    return(

        <div>
            <div class="card">
                <div class="card-body">
                    <h2 className="titleBookmark">TITLE BOOKMARKED</h2>
                        <p className="content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque accusamus 
                            perspiciatis vel eveniet optio a maiores commodi exercitationem cum minima fugit,
                            officia nostrum vitae omnis, error voluptas laborum labore? Nemo!
                        </p>
                </div>
                <div className="options">
                    <button onClick={()=>{deleteBookmark()}} className="deleteButton"><FaTrashAlt/>delete</button>
                </div>
            </div>
        </div>
    )
}



