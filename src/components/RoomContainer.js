import React from 'react'
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { withRoomConsumer } from '../context';
import Loading from "./Loading"

function RoomContainer({context}) {
   const {loading, sortedRooms, rooms} = context;

   if(loading){
               return <Loading></Loading>
           }
        
    
            return (
                <>
                <RoomsFilter rooms={rooms}></RoomsFilter>
                <RoomsList rooms = {sortedRooms}></RoomsList>
               </>
            );
}

export default withRoomConsumer(RoomContainer)

// import React from 'react'
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomList";
// import { RoomConsumer } from '../context';
// import Loading from "./Loading"

// export default function RoomContainer() {
//     return (
//     <RoomConsumer>
//  {
//     value => {
//        const {loading, sortedRooms, rooms} = value;
//        if(loading){
//            return <Loading></Loading>
//        }
    

//         return (
//             <div>
//             hello from room container
//             <RoomsFilter rooms={rooms}></RoomsFilter>
//             <RoomsList rooms = {sortedRooms}></RoomsList>
//            </div>
//         )
//     }

//  }

//     </RoomConsumer>
       
//     )
// }
