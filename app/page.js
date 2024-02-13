'use client'
import gsap from "gsap";
import Banner from "./components/Banner/Banner";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import jahir from '@/public/jahir.jpg'
import ignite from '@/public/ignite.png'
import matribhumi from '@/public/Matribhumi-group.png'
import Button from "./components/Button/Button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
console.log(jahir)


const timelineData = [
  { _id: "10", title: "Appreciation for Unswerving Contribution", description: "This award I received from the Canadian University of Bangladesh and they give this award for my outstanding contribution in inclusive education for the child.", year: 2022, image: "https://jahir.com.bd/wp-content/uploads/2022/08/Canadian-University-Award.jpg" },
  { _id: "2", title: "The Hero Award", description: "After the next couple of years in 2021 when the whole world had battled against the Coronavirus, I tried to help the community needy people in that pandemic time. In consideration of my extraordinary contribution to my community, the Arvi Foundation bring forward my work to the spotlight and honored me by providing an award named 'The Hero Award-2021'.", year: '...', image: "https://jahir.com.bd/wp-content/uploads/2018/04/a0286920-21e9-4a0d-966b-adb27716b6c6.jpg" },
  { _id: "3", title: "The Diana Award", description: "In 2019 I along with my team have been recognized as the 1st runner-up in Student to Start-Up Chapter 1. Our initiative was based on the cobblers in our country and the name of the start-up is 'Cobbler koi'. This award set the benchmark of success for me. It really solidifies our belief and boosts our morale to continue to do good work. I'm much more fortunate for this prestigious award.", year: 2020, image: "https://jahir.com.bd/wp-content/uploads/2018/04/Jahirul-Islam-The-Hero-Award.jpg" },
  { _id: "4", title: "Joy Bangla Youth Award", description: "This award I received from Young Bangla and they give this award for my outstanding contribution to inclusive education for the child who is living below the poverty line.", year: 2020, image: "https://jahir.com.bd/wp-content/uploads/2022/08/Muhammad-Jahirul-Islam.jpg" },
  { _id: "5", title: "Student to Start-Up Chapter 1", description: "In 2019 I along with my team have been recognized as the 1st runner-up in Student to Start-Up Chapter 1. Our initiative was based on the cobblers in our country and the name of the start-up is 'Cobbler koi'. This award set the benchmark of success for me. It really solidifies our belief and boosts our morale to continue to do good work. I'm much more fortunate for this prestigious award.", year: 2019, image: "https://jahir.com.bd/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-30-at-9.43.13-PM.jpeg" },
  { _id: "6", title: "UN Best Volunteer Group Award", description: "I and my whole team of Ignite Global Foundation have been recognized by United Nations Bangladesh and got the prestigious award named 'UN Best Volunteer Group Award-2019' for the contribution to youth development.", year: 2019, image: "https://jahir.com.bd/wp-content/uploads/2022/08/download.png" },
  { _id: "7", title: "President Scout Award", description: "At first, I recall my very first award named 'President Scout Award-2013' which is recognized by President Abdul Hamid for excellent performance as a PS.", year: 2013, image: "https://jahir.com.bd/wp-content/uploads/2018/04/Scout.jpg" },
];

export default function Home() {

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
      x: "-200%",
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


  return (
    <div className=" bg-[#0C0E12] text-white">
      <div className="z-50 text-white bg-[#020509] fixed flex flex-col justify-between py-10 px-5 text-center h-full">
        <div>Menu</div>
        <div>d</div>
        <div>Icons</div>
      </div>
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

            <div className="flex justify-around gap-8 mt-8">
              <Link href={'https://ignite.com.bd/'} target="_blank">
                <img src={ignite.src} alt="Ignite" className="w-64" />
              </Link>
              <Link href={'https://matribhumigroup.com/'} target="_blank">
                <img src={matribhumi.src} alt="Matribhumi Group" className="w-64" />
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
      <div className="pl-5 pr-5 lg:pl-28 lg:pr-10">
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
            {timelineData.map(({ id, title, description, year, image, link }, index) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mb-8 flex items-center w-full ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse' // Alternate sides for each item
                  }`}
              >
                {/* Timeline Dot */}
                <div className="z-20 flex items-center order-1 absolute left-[725px] border bg-[#0C0E12] shadow-xl px-5 py-1 rounded-full">
                  <span className="mx-auto font-semibold text-lg text-white">{year}</span>
                </div>

                {/* Timeline Content */}
                <div className="order-1 bg-[#020509] rounded-lg shadow-xl w-full lg:w-5/12 px-6 py-4 text-white">
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
    </div>
  );
}
