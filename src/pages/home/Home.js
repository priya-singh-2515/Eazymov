import React from 'react'
import Layout from '../../components/Layout'
import LatestNews from '../home/LatestNews'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'
import Services from './Services'
import Slider from './Slider'
import OurServices from './OurServices'
import RequestQuoteForm from './Requestaquote'

const home = () => {
  return (
    <>
    <Layout title={"Eazymov"}>
    <div  style={{background:"(0,0,0.5)"}}><Slider/></div>
    <RequestQuoteForm/>
    <OurServices/>
    <WhyChooseUs/>
    <Services/>
    <Testimonials/>
    <LatestNews clg="Latest News"/>
    </Layout>
    </>
  )
}

export default home