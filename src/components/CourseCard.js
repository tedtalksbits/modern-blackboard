import React from 'react'
import styled from 'styled-components'
import image from '../images/business-3d-368.png'
import { H1, LightP } from './pageElement'
const MainCourseCard = styled.div`
   border-radius: 12px;
   background: white;
   width: 100%;
   height: 100%;
   /* box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.05) ; */
   padding: .5rem;
   min-height: 22rem;
   text-align: center;
   display: grid;
   grid-template-rows: 2fr 1fr;
   gap: 1.5rem;
   
   
  
`
const CourseImageContainer = styled.div`
   max-width: 320px;
   margin: auto;
`
const CourseImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: contain;
`


const CourseCard = ({ course_name, course_sect }) => {
   return (

      <MainCourseCard>
         <CourseImageContainer >

            <CourseImage src={image} alt="" />
         </CourseImageContainer>
         <div className="course__name">

            <H1>{course_name}</H1>
            <LightP>{course_sect}</LightP>
         </div>


      </MainCourseCard>

   )
}

export default CourseCard
