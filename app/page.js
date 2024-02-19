'use client'
import gsap from "gsap";
import Banner from "./components/Banner/Banner";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import jahir from '@/public/jahir.jpg'
import ignite from '@/public/ignite.png'
import matribhumi from '@/public/Matribhumi-group.png'
import logo from '@/public/fav.png'
import Button from "./components/Button/Button";
import Link from "next/link";
import Contact from "./components/Contact/Contact";

// icons 
import { Icon } from "@iconify/react";
import lineHorizontalIcon from '@iconify/icons-fluent/line-horizontal-3-20-filled';
import navigation from '@iconify/icons-fluent/navigation-unread-24-regular';

import close from '@iconify/icons-mdi/close';
import facebookIcon from '@iconify/icons-ri/facebook-fill';
import instagram from '@iconify/icons-mdi/instagram';
import linkedin from '@iconify/icons-mdi/linkedin';
import twitter from '@iconify/icons-mdi/twitter';
import youtube from '@iconify/icons-mdi/youtube';
import Footer from "./components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);
console.log(jahir)


const timelineData = [
  { _id: "10", title: "Appreciation for Unswerving Contribution", description: "This award I received from the Canadian University of Bangladesh and they give this award for my outstanding contribution in inclusive education for the child.", year: 2022, image: "https://jahir.com.bd/wp-content/uploads/2022/08/Canadian-University-Award.jpg" },
  { _id: "2", title: "The Hero Award", description: "After the next couple of years in 2021 when the whole world had battled against the Coronavirus, I tried to help the community needy people in that pandemic time. In consideration of my extraordinary contribution to my community, the Arvi Foundation bring forward my work to the spotlight and honored me by providing an award named 'The Hero Award-2021'.", year: '2021', image: "https://jahir.com.bd/wp-content/uploads/2018/04/a0286920-21e9-4a0d-966b-adb27716b6c6.jpg" },
  { _id: "3", title: "The Diana Award", description: "In 2019 I along with my team have been recognized as the 1st runner-up in Student to Start-Up Chapter 1. Our initiative was based on the cobblers in our country and the name of the start-up is 'Cobbler koi'. This award set the benchmark of success for me. It really solidifies our belief and boosts our morale to continue to do good work. I'm much more fortunate for this prestigious award.", year: 2020, image: "https://jahir.com.bd/wp-content/uploads/2018/04/Jahirul-Islam-The-Hero-Award.jpg" },
  { _id: "4", title: "Joy Bangla Youth Award", description: "This award I received from Young Bangla and they give this award for my outstanding contribution to inclusive education for the child who is living below the poverty line.", year: 2020, image: "https://jahir.com.bd/wp-content/uploads/2022/08/Muhammad-Jahirul-Islam.jpg" },
  { _id: "5", title: "Student to Start-Up Chapter 1", description: "In 2019 I along with my team have been recognized as the 1st runner-up in Student to Start-Up Chapter 1. Our initiative was based on the cobblers in our country and the name of the start-up is 'Cobbler koi'. This award set the benchmark of success for me. It really solidifies our belief and boosts our morale to continue to do good work. I'm much more fortunate for this prestigious award.", year: 2019, image: "https://jahir.com.bd/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-30-at-9.43.13-PM.jpeg" },
  { _id: "6", title: "UN Best Volunteer Group Award", description: "I and my whole team of Ignite Global Foundation have been recognized by United Nations Bangladesh and got the prestigious award named 'UN Best Volunteer Group Award-2019' for the contribution to youth development.", year: 2019, image: "https://jahir.com.bd/wp-content/uploads/2022/08/download.png" },
  { _id: "7", title: "President Scout Award", description: "At first, I recall my very first award named 'President Scout Award-2013' which is recognized by President Abdul Hamid for excellent performance as a PS.", year: 2013, image: "https://jahir.com.bd/wp-content/uploads/2018/04/Scout.jpg" },
];

const featureData = [
  { _id: 1, title: "Item 1", image: "https://jahir.com.bd/wp-content/uploads/2022/08/sOMOKAL-300x128.png", link: "https://samakal.com/todays-print-edition/tp-sahos/article/200745389/" },
  { _id: 2, title: "Item 2", image: "https://jahir.com.bd/wp-content/uploads/2022/08/pROTHOM-Alo-300x128.png", link: "https://www.prothomalo.com/lifestyle/" },
  { _id: 3, title: "Item 3", image: "https://i.ibb.co/wJF0K4r/desh.png", link: "https://www.deshrupantor.com/252788/" },
  { _id: 4, title: "Item 4", image: "https://jahir.com.bd/wp-content/uploads/2022/08/bONIK-bATRA-300x128.png", link: "https://bonikbarta.net/" },
  { _id: 5, title: "Item 5", image: "https://jahir.com.bd/wp-content/uploads/2022/08/Khola-kagoj-300x128.png", link: "https://www.kholakagojbd.com/national/58229?fbclid=IwAR2aImC38sV-SlUz3HteEMh5KyEFwvXRPR9IXoyNO83InpFAowVSahN3oMs" },
  { _id: 6, title: "Item 6", image: "https://jahir.com.bd/wp-content/uploads/2022/08/vOA-300x128.png", link: "https://www.voabangla.com/a/bd-award/5518210.html?fbclid=IwAR1W5nh0nZkNiGfDXHSualxjJuBH7_tXSTjZ01fjvPYKkZC7S_aP3HdCEqc" },
  { _id: 7, title: "Item 7", image: "https://jahir.com.bd/wp-content/uploads/2022/08/THe-300x128.png", link: "https://www.tbsnews.net/feature/pursuit/how-six-bangladeshi-youngsters-are-transforming-society-103912" },
  { _id: 8, title: "Item 8", image: "https://jahir.com.bd/wp-content/uploads/2022/08/Whatson-300x128.png", link: "https://whatson.guide/meet-the-diana-award-2020-recipients-from-bangladesh/" },
  { _id: 9, title: "Item 9", image: "https://jahir.com.bd/wp-content/uploads/2022/08/thE-dAILY-300x128.png", link: "https://www.thedailystar.net/star-youth/news/igniting-confidence-across-communities-1935457" },
  { _id: 10, title: "Item 10", image: "https://jahir.com.bd/wp-content/uploads/2022/08/The-finan-300x128.png", link: "https://thefinancialexpress.com.bd/education/they-are-the-change-makers-1594831110?fbclid=IwAR0KeTbAzHqfjcfPMQn6wuAJL67zqbHN8_9pPpqbyUbnpSsBgg93wJ_zza4" }
]


const blogs = [
  {
    "_id": "1",
    "title": "Writing Skills",
    "description": "Description for Sample 1",
    "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2024-02-15"
  },
  {
    "_id": "2",
    "title": "Communication Skills",
    "description": "Description for Sample 2",
    "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2024-02-16"
  },
  {
    "_id": "3",
    "title": "Skills Development",
    "description": "Description for Sample 3",
    "image": "https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2024-02-17"
  },
  {
    "_id": "4",
    "title": "Sample Title 4",
    "description": "Description for Sample 4",
    "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2024-02-18"
  },
  {
    "_id": "5",
    "title": "Sample Title 5",
    "description": "Description for Sample 5",
    "image": "https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2024-02-19"
  },
  {
    "_id": "6",
    "title": "Sample Title 6",
    "description": "Description for Sample 6",
    "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2024-02-20"
  }
]



export default function Home() {

  const [toggle, setToggole] = useState();



  useEffect(() => {
    const textWrappers = document.querySelectorAll(".text-wrapper")

    const pinTrigger = ScrollTrigger.create({
      trigger: ".content-wrapper",
      pin: true,
      start: "top top",
      end: "bottom",
      // markers: true,
    })
    let tl = gsap.timeline();

    tl.to(textWrappers, {
      x: "-100%",
      scrollTrigger: {
        start: () => pinTrigger?.start,
        end: () => pinTrigger?.end,
        scrub: 1,
        // markers: true,
      }
    })

    return () => {
      pinTrigger?.kill();
      tl.kill();
    }
  })

  useEffect(() => {
    const skillWrappers = document.querySelectorAll(".skill-wrapper")

    const pinTrigger = ScrollTrigger.create({
      trigger: ".skill-container",
      pin: true,
      start: "top top",
      end: "right",
      markers: true,
    })
    let tl = gsap.timeline();

    tl.to(skillWrappers, {
      x: "-100%",
      scrollTrigger: {
        start: () => pinTrigger?.start,
        end: () => pinTrigger?.end,
        scrub: 2,
        // markers: true,
      }
    })

    return () => {
      pinTrigger?.kill();
      tl.kill();
    }
  })

  useEffect(() => {

    let tl = gsap.timeline();

    tl.from("#create", { x: '-200%' });
    tl.to("#create", { x: '0%', duration: 2, stagger: 1.5 });

    return () => {
      tl.kill();
    }
  })


  return (
    <div className=" bg-[#0C0E12] text-slate-200 relative">

      <div id='create' className={`${!toggle ? 'hidden' : 'block fixed top-0'} w-full min-h-screen absolute z-50 bg-[#020509] pl-28`}>
        <div className="flex justify-end pr-10 pt-10">
          <Icon onClick={() => setToggole(!toggle)} icon={toggle ? close : navigation} className="text-center hover:text-slate-200 text-gray-600 text-2xl transition-all duration-200 cursor-pointer" />
        </div>
        <div className={`min-h-screen flex justify-center items-center`}>

          <ul className='flex flex-col gap-8'>
            <li><Link href={'/'} className='text-3xl font-bold' >Home</Link></li>
            <li><Link href={'#about'} className='text-3xl font-bold' >About Me</Link></li>
            <li><Link href={'/'} className='text-3xl font-bold' >Skills</Link></li>
          </ul>
        </div>
      </div>

      {/* left nav  */}
      <div className="z-50 text-slate-200 bg-[#020509] fixed flex flex-col items-center justify-between py-10 px-5 text-center h-full">
        <div className="flex justify-center flex-col">
          <div className="mb-8">
            <Link href={'/'}>
              <img src={logo.src} className="w-10 border border-gray-600 hover:rounded-lg transition-all duration-200" alt="Muhammad Jahirul Islam" />
            </Link>
          </div>
          <div onClick={() => setToggole(!toggle)} className="flex justify-center cursor-pointer">
            <Icon icon={toggle ? close : navigation} className="text-center text-gray-600 text-2xl " />
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-8 justify-center">
            <Link href={'https://www.facebook.com/Jahir.Ignite'} target="_blank">
              <li className="border border-gray-600 text-gray-600 hover:text-slate-200 hover:border-white p-2 hover:rounded-lg transition-all duration-200"><Icon icon={facebookIcon} className="text-center text-xl" /></li>
            </Link>
            <Link href={'https://www.linkedin.com/in/muhammad-jahirul-islam-41b436bb/'} target="_blank">
              <li className="border border-gray-600 text-gray-600 hover:text-slate-200 hover:border-white p-2 hover:rounded-lg transition-all duration-200"><Icon icon={linkedin} className="text-center text-xl" /></li>
            </Link>
            <Link href={'https://twitter.com/jahirrayhan80'} target="_blank">
              <li className="border border-gray-600 text-gray-600 hover:text-slate-200 hover:border-white p-2 hover:rounded-lg transition-all duration-200"><Icon icon={instagram} className="text-center text-xl" /></li>
            </Link>
            <Link href={'https://www.youtube.com/channel/UCB_tJEyTocrkY2zfQ7dFm7w'} target="_blank">
              <li className="border border-gray-600 text-gray-600 hover:text-slate-200 hover:border-white p-2 hover:rounded-lg transition-all duration-200"><Icon icon={twitter} className="text-center text-xl" /></li>
            </Link>
            <Link href={'https://www.instagram.com/muhammadjahirulislam99/'} target="_blank">
              <li className="border border-gray-600 text-gray-600 hover:text-slate-200 hover:border-white p-2 hover:rounded-lg transition-all duration-200"><Icon icon={youtube} className="text-center text-xl" /></li>
            </Link>
          </ul>
        </div>
      </div>

      {/* banner  */}
      <div className="h-screen relative content-wrapper ">
        <div className="text-wrapper">
          <Banner />
        </div>
      </div>



      {/* about  */}
      <div id="about" className="pl-28 pr-10">
        <div className="flex lg:flex-row flex-col-reverse gap-8">
          <div className="lg:w-[50%]">
            <img src={jahir.src} alt="jahir" className="w-full" />
          </div>
          <div className="lg:w-full lg:text-left text-center">
            <h5 className="text-sm text-orange-500 tracking-[4px]">About - Me</h5>
            <h3 className="font-semibold text-2xl py-5 border-b border-orange-500 inline-block">Mr. IGNITE</h3>
            <p className="text-justify py-5">This is Muhammad Jahirul Islam the Founder and Chairman of Ignite Global Foundation and Director of Matribhumi Group. I have pursued my undergrad degree in Aeronautical Engineering from the United College of Aviation. I have also completed my post-graduation in Aerospace Engineering from Carden University, USA. Now I am running my own business as well as charity works. Alongside I have been serving as a lecturer at the United College of Aviation Science and Management. <br /> <br /> My first book titled ‘Aviation Career’ has been published at ‘Ekushe Boi Mela-2022’ from Addomo publication. I have dreamt dreams to build a nation with zero hunger and want to provide quality education to every doorstep of underprivileged children in Bangladesh.</p>
            <Button url={'/'} text={'My Initiatives'} />

            <div className="flex justify-left gap-8 mt-8">
              <Link href={'https://ignite.com.bd/'} target="_blank">
                <img src={ignite.src} alt="Ignite" className="w-52" />
              </Link>
              <Link href={'https://matribhumigroup.com/'} target="_blank">
                <img src={matribhumi.src} alt="Matribhumi Group" className="w-52" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* skill */}
      <div className="pl-28 pr-10 mt-20 bg-[#020509] py-10 skill-container">
        <div className="flex lg:flex-row flex-col-reverse gap-8 skill-wrapper">
          <div className="">
            <iframe width="600" height="360" src="https://www.youtube.com/embed/LItm-xbF_Ms?si=lryztj83ogPugpF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="lg:w-full lg:text-left text-center">
            {/* <h5 className="text-sm text-orange-500 tracking-[4px]">About - Me</h5> */}
            <h3 className="font-semibold text-2xl py-5 border-b border-orange-500 inline-block">Life Skills</h3>
            <p className="text-justify py-5">Do you thirst for knowledge about the basic skills both soft and technical skills you should have during your student life? Do you eager to know how to shape your career in the aviation field or in the development sector? Then this channel is for you. This channel is trying to present all of this stuff. Other than that, you can also find multiple TV interviews of mine and motivational videos here. <br /><br /> If you are passionate about shaping your career in the corporate sector, development sector, or aviation sector then you can find videos and documents link about the details of resume structure, interview tricks, soft and technical skills, and so on in my videos. Also, you can find multiple videos about children and inclusive education in Bangladesh. Hopefully, this channel helps you a lot. So please support my channel and spread positivity to others. Please do subscribe and click the bell icon.</p>
            <Button url={'https://www.youtube.com/@MuhammadJahirulIslam'} text={'My Youtube Channel'} />
          </div>
        </div>

      </div>


      {/* Awards Section */}
      <div className="pl-5 pr-5 lg:pl-28 lg:pr-10 mb-20">
        <div className="">
          {/* Awards Content */}
          <div className="container mx-auto">
            <h3 className="font-semibold text-2xl py-5 border-b inline-block border-orange-500">MY AWARDS</h3>
            <p className="text-left py-5">
              Throughout my entire life, I have been recognized by different organizations for my relentless contribution to various sectors of our community. Among all of my recognitions, I would like to highlight a number of significant accomplishments given below.
            </p>
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <div className="relative flex flex-col items-center">
            {/* Vertical Timeline Line */}
            <div className="bg-orange-500 bg-opacity-50 w-[2px] h-full absolute left-[50%] translate-x-[-50%]"></div>

            {/* Timeline Items */}
            {timelineData?.map(({ id, title, description, year, image, link }, index) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mb-8 flex items-center w-full ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse' // Alternate sides for each item
                  }`}
              >
                {/* Timeline Dot */}
                <div className="z-20 flex items-center order-1 absolute left-[725px] border border-orange-500 bg-[#0C0E12] shadow-xl px-5 py-1 rounded-full">
                  <span className="mx-auto font-semibold text-lg text-slate-200">{year}</span>
                </div>

                {/* Timeline Content */}
                <div className=" order-1 bg-[#020509] rounded-lg shadow-xl w-full lg:w-5/12 px-6 py-4 text-slate-200">
                  <h3 className="font-bold text-xl text-orange-500">{title}</h3>
                  <p className="text-sm leading-snug tracking-wide py-5">
                    {description}
                  </p>
                  <img src={image} alt={`Event ${id}`} className="mt-2 w-full rounded-md" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>


      {/* FEATURED Section */}
      <div className="pl-5 pr-5 py-20 lg:pl-28 lg:pr-10 bg-[#020509]">
        <div className="">
          {/* Awards Content */}
          <div className="container mx-auto">
            <h3 className="font-semibold text-2xl pb-5 border-b inline-block border-orange-500 mb-8">I HAVE BEEN FEATURED IN..</h3>
          </div>

          <div className="flex flex-wrap justify-around gap-8">
            {
              featureData.map((item, index) => (
                <div key={index}>
                  <Link href={item?.link} target="_blank">
                    <img src={item?.image} />
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>


      {/* Blogs  */}
      <div className="pl-5 pr-5 py-20 lg:pl-28 lg:pr-10 bg-[#020509]">
        <div className="">
          <div className="container mx-auto">
            <h3 className="font-semibold text-2xl pb-5 border-b inline-block border-orange-500 mb-8">Blogs</h3>
          </div>

          <div className="container mx-auto grid grid-cols-3 gap-8">
            {
              blogs?.slice(0, 3)?.map((item, index) => (
                <div key={index}>
                  <div>
                    <img src={item?.image} />
                    <Link href={'/'}>
                      <h2 className="bg-orange-500 px-3 py-5 font-semibold text-xl mt-2">{item?.title}</h2>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <Contact />

      <Footer />


    </div>
  );
}
