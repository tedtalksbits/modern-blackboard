import React, { useEffect, useState } from 'react'
import ImageCard from '../components/ImageCard';
import { Container, LoadingImageContainer, Page } from '../components/pageElement'
import { courseThemes } from '../appTheme';
import PageImage from '../components/PageImage';
import IconImage from '../images/business-3d-casual-life-3d-notifications.png'
import loadingImage from '../images/Spin-1s-200px.svg'
import DetailsCard from '../components/DetailsCard';
import HomeButton from '../components/HomeButton';
import { homeTheme } from '../appTheme';
import EditableCard from '../components/EditableCard';

const MoreInfo = ({ match }) => {

   const id = match.params.id;
   // const courseName = match.params.name;
   useEffect(() => {
      fetchData()

   }, [])

   const [course, setCourse] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const URL = `https://college-courses-api.herokuapp.com/courses_data/${id}`;

   async function fetchData() {
      const response = await fetch(URL, {
         method: 'GET',

      })
      const result = await response.json();

      setCourse(result)
      setIsLoading(false)
      console.log(result);
   }

   return (
      <>
         {isLoading ?
            <LoadingImageContainer>
               <img src={loadingImage} alt="" />
            </LoadingImageContainer> :

            <Page>

               <HomeButton
                  icon={<i className='bx bxs-home' ></i>}
                  innerBg={homeTheme.textdark}
               />

               <Container>
                  <ImageCard
                     isImage={false}
                     cardheader={course.course_name}
                     cLink={course.course_link}
                     gDark={courseThemes[course.theme_id].gradientdark}
                     gLight={courseThemes[course.theme_id].gradientlight}
                     alpha={courseThemes[course.theme_id].alpha}
                     cardsubheader={`Professor: ${course.course_prof[0].prof_name}`}
                     rating={course.course_prof[0].prof_rating}
                     prof_email={course.course_prof[0].prof_email}

                  />

               </Container>
               <Container>
                  <PageImage pageImage={IconImage} />
               </Container>
               <h1>Meetings</h1>
               {course.course_meetings.map((e, index) => (
                  <Container key={index} margin='1rem 0'>
                     <DetailsCard
                        time={e.time}
                        day={e.day}
                        room={e.room}
                     />
                  </Container>
               ))}
               <Container>
                  <h1>Homework</h1>
                  {course.course_assignments.map((assignment, index) => (

                     assignment.assignment_title !== "" ?
                        <EditableCard
                           key={index}
                           title={assignment.assignment_title}
                           date={assignment.assignment_due_date}
                           innerBg={courseThemes[index].alpha}
                           cardBg={courseThemes[index].pastel}
                           open_up={true}
                        />
                        :
                        <EditableCard
                           key={index}
                           title="No Homework"
                           innerBg={courseThemes[index].alpha}
                           cardBg={courseThemes[index].pastel}
                        />
                  ))}
               </Container>
            </Page>
         }

      </>
   )
}

export default MoreInfo
