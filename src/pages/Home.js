import React, { useEffect, useState } from 'react'
import CourseCard from '../components/CourseCard'
import ImageCard from '../components/ImageCard'
import { CardGrid, Container, CustomLink, LoadingImageContainer, Page } from '../components/pageElement';
import { homeTheme } from '../appTheme';
import image from '../images/business-3d-casual-life-3d-searching-8.png'
import loadingImg from '../images/Spin-1s-200px.svg';
import comingSoonImg from '../images/casual-life-3d-clock.png'
import ReactTimeago from 'react-timeago';
import PageImage from '../components/PageImage';
import Notifs from '../components/Notifs';

const Home = () => {
   useEffect(() => {
      fetchData();

   }, [])

   const [courses, setCourses] = useState([])
   const [assignments, setAssignments] = useState([]);
   const [isLoading, setIsLoading] = useState(true)

   const URL = "https://college-courses-api.herokuapp.com/courses_data"
   async function fetchData() {
      const response = await fetch(URL, {
         method: 'GET',
      })
      const result = await response.json();
      // console.log(result);
      setCourses(result);
      setIsLoading(false)

      let assArr = [];

      result.forEach(res => {


         assArr.push(...res.course_assignments)


      })

      console.log(assArr);
      setAssignments(assArr)

   }

   const NotifArray = [
      {
         title: "Get this done ASAP",
         urgent: true
      },
      {
         title: "You have time",
         urgent: false
      }

   ]


   return (
      <Page>
         <Container>
            <ImageCard
               img={image}
               cardheader={new Date().toDateString()}
               cardsubheader={<>Finals Week: <ReactTimeago date='Dec 20, 2021' /></>}
               isImage={true}
               gLight={homeTheme.gradientlight}
               gDark={homeTheme.gradientdark}
               alpha={homeTheme.alpha}
            />
         </Container>
         <h1>Notifcations</h1>


         <Container>
            {assignments.map((assi, index) => (
               assi.assignment_title ?

                  <Notifs
                     key={index}
                     text={assi.assignment_title}
                     subText={assi.assignment_due_date}
                     bgColor={assi.urgent ? `#cb3457` : `#3ccddd`}
                  />
                  :
                  ''
            ))}

         </Container>
         <h1>Current Courses</h1>
         {isLoading ?
            <LoadingImageContainer>

               <img src={loadingImg} style={{ textAlign: 'center' }} alt="spinning loader" />
            </LoadingImageContainer>

            :
            <Container>

               <CardGrid>
                  {courses.map(course => (
                     <CustomLink to={`/moreinfo/${course.id} ${course.course_name}`} key={course.course_id} color={homeTheme.textdark} >
                        <CourseCard

                           course_name={course.course_name}
                           course_sect={course.course_sect}

                        />
                     </CustomLink>
                  ))}
               </CardGrid>
            </Container>
         }
         <Container>
            <h1>Jobs Coming Soon...</h1>
            <PageImage pageImage={comingSoonImg} />
         </Container>
         <div id="jobs"></div>
      </Page >
   )
}

export default Home
