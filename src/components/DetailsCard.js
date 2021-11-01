import React from 'react'
import styled from 'styled-components'
import './DetailsCard.css'
import { LightP } from './pageElement'

const Container = styled.section`
   background: white;
   width: 100%;
   border-radius: 12px;
   padding: 2rem;
`
const Content = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`

const DetailsCard = ({ day, time, room }) => {
   return (
      <Container>
         <Content>
            <div className="top">
               <h1>{day}</h1>
            </div>
            <div className="center">
               <div className="left">
                  <div className="left__top">
                     <p>Start Time</p>
                  </div>
                  <div className="left__bottom">
                     <LightP>{time}</LightP>
                  </div>
               </div>
               <div className="right">
                  <div className="right__top">
                     <p>Room</p>
                  </div>
                  <div className="right__bottom">
                     <LightP>{room}</LightP>
                  </div>
               </div>
            </div>
            {/* <div className="bottom">
               <div className="button-right">

                  <button>button</button>
               </div>
               <div className="button-left">

                  <button>button</button>
               </div>
            </div> */}
         </Content>

      </Container>
   )
}

export default DetailsCard
