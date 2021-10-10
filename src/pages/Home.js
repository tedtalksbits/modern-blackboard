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
   const [isLoading, setIsLoading] = useState(true)

   const URL = "https://college-courses-api.herokuapp.com/courses_data"
   async function fetchData() {
      const response = await fetch(URL, {
         method: 'GET',
      })
      const result = await response.json();
      console.log(result);
      setCourses(result);
      setIsLoading(false)
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
            <Notifs
               bgColor={homeTheme.primary}
               text=
               {
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, fuga! Sequi odit id perferendis consequatur illo quasi saepe labore totam impedit distinctio omnis voluptatum in reiciendis quibusdam cum, dignissimos officiis!😄</p>
               }
            />
            <Notifs bgColor={homeTheme.secondary} text={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sint.😍</p>} />
            <Notifs bgColor="#da3456" text="3⭐️" />
            <Notifs text="4😢" />

            <h1>conditional notifications</h1>
            {NotifArray.map((notif, index) => (
               notif.urgent ?


                  <Notifs key={index} text={notif.title} bgColor="#da3456" />
                  :
                  <Notifs key={index} text={notif.title} bgColor="#34da9d" />

            ))}


         </Container>
         <h1>Courses</h1>
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
