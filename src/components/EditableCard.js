import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`

   border-radius: 5px;
   /* background: ${props => props.cardBg || "white"}; */
   background: white;
   padding: 15px;
   margin-top: 1rem;
   box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1) , 0px 4px 6px -2px rgba(0,0,0,0.05) ;
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
   /* border: none; */
   
   :hover{
      box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.14) , 0px 3px 1px -2px rgba(0,0,0,0.12) , 0px 1px 5px 0px rgba(0,0,0,0.2) ;
   }
   /* ::before{
      content: "";
      height: 200px;
      width: 100%;
      background: rgb(87, 85, 104);
      position: absolute;
      top: -200px;
      border: 1px lightgray solid;
      border-radius: 6px;
   } */
   i{
      font-size: 1.2rem;
   }
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
   return (
      <Wrapper cardBg={cardBg}>
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
               <EditButton>
                  <i className='bx bx-dots-vertical-rounded'></i>
               </EditButton>
            </RightContent>
         </Container>
      </Wrapper>
   )
}

export default EditableCard
