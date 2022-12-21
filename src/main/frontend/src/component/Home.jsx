import React , { useState ,useEffect  } from 'react'
import axios from 'axios'

export default function Home( props ) {

    const [ roomList , setRoomList ] = useState([]);
    // useEffect( ()=>{ axios } , [] );
    useEffect( ()=>{
        axios.get("/room/getroomlist")
                .then( re => {  setRoomList(re.data ); console.log( re.data); } )
                .catch( e => { console.log( e ); } )
    } , [] )


    return(
        <div>
            <h3> 메인 페이지 </h3>
        </div>
    )
}