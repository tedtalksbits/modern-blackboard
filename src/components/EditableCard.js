import React, { useState } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`

   border-radius: 5px;
   /* background: ${props => props.cardBg || "white"}; */
   background: white;
   padding: 15px;
   margin-top: 1rem;
   box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1) , 0px 4px 6px -2px rgba(0,0,0,0.05) ;
   position: relative;
`

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   

`

const LeftContent = styled.div`

   display: flex;
   align-items: center;
   gap: 1.5rem;
  
`

const RightContent = styled.div`

`

const EditButton = styled.button`
   background: white;
   border: 1px rgba(21,21,21, 0.1) solid;
   box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.05);
   padding: .785rem;
   border-radius: 5px;
   cursor: pointer;
   transition: box-shadow .3s ease;
   position: relative;
   transition: .5s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;

   

   @keyframes fadeIn {
  0% {
     opacity: 0;
     
  }
  39% {
     opacity: 0;
     transform: scale(.9);
  }
  60% {
     opacity: 0.875;
     transform: scale(1.03);
  }
  100%{
     opacity: 1;
     transform: scale(1);
  }
} 
   
   /* border: none; */
   
   :hover{
      box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.06) , 0px 3px 1px -2px rgba(0,0,0,0.05) , 0px 1px 5px 0px rgba(0,0,0,0.09) ;
   }
   
   i{
      font-size: 1.2rem;
   }
`
const EditModal = styled.div`
   display: ${({ modalOpen }) => modalOpen ? 'block' : 'none'};
   z-index: ${({ modalOpen }) => modalOpen ? '2000' : ''};
   position: absolute;
   background: #15192598;
   border-radius: 5px;
   border: 1px rgba(0,0,0, 0.2) solid;
   backdrop-filter: blur(25px);
   padding: .875rem;
   top: -50px;
   right: 0;
   color: white;
   animation: fadeIn .4s linear;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;


`
const HomeworkIcon = styled.div`
   width: 4rem;
   height: 4rem;
   background: ${props => props.innerBg};
   border-radius: 1rem;
   display: grid;
   place-items: center;
   border: 1px solid ${props => props.innerBg};
   transition: all ease-in-out .2s;

   i{
      font-size: 1.5rem;
   }
  

`

const TimeGroup = styled.div`
   display: flex;
   gap: 1rem;
`
const Info = styled.div`

`


const EditableCard = ({ date, title, innerBg, cardBg }) => {

   const [open, setOpen] = useState(false)


   const handleModalOpen = () => {
      setOpen(true)
      const modalBg = document.getElementById('modal');
      modalBg.classList.add('modal')

   }
   const closeModal = (e) => {
      if (open === true)
         setOpen(false);



      const modalBg = document.getElementById('modal');
      modalBg.addEventListener('click', () => {
         modalBg.classList.remove('modal')
         setOpen(false)
      })



   }


   return (
      <Wrapper cardBg={cardBg} >
         <Container>
            <LeftContent>
               <HomeworkIcon innerBg={innerBg}>
                  <i className='bx bx-time-five' ></i>
               </HomeworkIcon >

               <Info>
                  <TimeGroup className="time-group">
                     <div className="time-date">
                        {date}
                     </div>
                     <div className="time-to-go">
                        <i className='bx bx-time-five' ></i>
                        16h
                     </div>
                  </TimeGroup>
                  <h1>{title}</h1>
               </Info>
            </LeftContent>
            <RightContent>
               <EditButton onClick={(e) => {
                  handleModalOpen(e);
                  closeModal(e);
               }} >
                  <i className='bx bx-dots-vertical-rounded'></i>
               </EditButton>
            </RightContent>

            <EditModal modalOpen={open}>
               <p>Lorem ipsum dolor sit amet consectetur, </p>
               <p>adipisicing elit. Incidunt illo rerum molestiae ut </p>
               <p>et accusantium excepturi magnam labore a iste.</p>
            </EditModal>

         </Container>
      </Wrapper >
   )
}

export default EditableCard
