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
import { useForm } from "react-hook-form";

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
  { _id: 3, title: "Item 3", image: "https://jahir.com.bd/wp-content/uploads/2022/08/Desh-RUpantor-Logo-300x128.png", link: "https://www.deshrupantor.com/252788/" },
  { _id: 4, title: "Item 4", image: "https://jahir.com.bd/wp-content/uploads/2022/08/bONIK-bATRA-300x128.png", link: "https://bonikbarta.net/" },
  { _id: 5, title: "Item 5", image: "https://jahir.com.bd/wp-content/uploads/2022/08/Khola-kagoj-300x128.png", link: "https://www.kholakagojbd.com/national/58229?fbclid=IwAR2aImC38sV-SlUz3HteEMh5KyEFwvXRPR9IXoyNO83InpFAowVSahN3oMs" },
  { _id: 6, title: "Item 6", image: "https://jahir.com.bd/wp-content/uploads/2022/08/vOA-300x128.png", link: "https://www.voabangla.com/a/bd-award/5518210.html?fbclid=IwAR1W5nh0nZkNiGfDXHSualxjJuBH7_tXSTjZ01fjvPYKkZC7S_aP3HdCEqc" },
  { _id: 7, title: "Item 7", image: "https://jahir.com.bd/wp-content/uploads/2022/08/THe-300x128.png", link: "https://www.tbsnews.net/feature/pursuit/how-six-bangladeshi-youngsters-are-transforming-society-103912" },
  { _id: 8, title: "Item 8", image: "https://jahir.com.bd/wp-content/uploads/2022/08/Whatson-300x128.png", link: "https://whatson.guide/meet-the-diana-award-2020-recipients-from-bangladesh/" },
  { _id: 9, title: "Item 9", image: "https://jahir.com.bd/wp-content/uploads/2022/08/thE-dAILY-300x128.png", link: "https://www.thedailystar.net/star-youth/news/igniting-confidence-across-communities-1935457" },
  { _id: 10, title: "Item 10", image: "https://jahir.com.bd/wp-content/uploads/2022/08/The-finan-300x128.png", link: "https://thefinancialexpress.com.bd/education/they-are-the-change-makers-1594831110?fbclid=IwAR0KeTbAzHqfjcfPMQn6wuAJL67zqbHN8_9pPpqbyUbnpSsBgg93wJ_zza4" }
]


export default function Home() {


  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }

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
                <div className="z-20 flex items-center order-1 absolute left-[725px] border border-orange-500 bg-[#0C0E12] shadow-xl px-5 py-1 rounded-full">
                  <span className="mx-auto font-semibold text-lg text-white">{year}</span>
                </div>

                {/* Timeline Content */}
                <div className=" order-1 bg-[#020509] rounded-lg shadow-xl w-full lg:w-5/12 px-6 py-4 text-white">
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
      <div className="pl-5 pr-5 py-20 lg:pl-28 lg:pr-10">
        <div className="">
          {/* Awards Content */}
          <div className="container mx-auto">
            <h3 className="font-semibold text-2xl py-5 border-b inline-block border-orange-500 mb-8">I HAVE BEEN FEATURED IN..</h3>
          </div>

          <div className="flex flex-wrap justify-around gap-8">
            {
              featureData.map(item => (
                <div key={item._id}>
                  <Link href={item.link} target="_blank">
                    <img src={item.image} />
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>



      {/* Get In Touch Section */}
      <div className="pl-5 pr-5 py-20 lg:pl-28 lg:pr-10">
        <div className="">
          {/* Awards Content */}
          <div className="container mx-auto">
            <h3 className="font-semibold text-2xl py-5 border-b inline-block border-orange-500 mb-8">Get In Touch</h3>


            <div className="flex lg:flex-row flex-col gap-8">
              <div className="w-full">
                <p>
                  I’m Muhammad Jahirul Islam, a young professional from Bangladesh. I would love to spread positivism toward others. I’m a multidisciplinary creative soul and try to take a sustainable and distinct approach with various areas of expertise to motivate today’s young generation. I have provided different skill development training and courses. Also, I’ve offered multiple sessions about career development, soft and hard skill, and so on. Till now I have reached more or less 25 thousand students and tried my best to provoke and inspire them that could be helped them to move on their future steps. Last but not the least, if you need any favor from me please feel free to contact me.
                </p>
                <div className="mt-5">
                  <p>+8801839319088</p>
                  <p>jahirrayhan80@gmail.com</p>
                </div>
              </div>
              <div className="w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                  <div className="flex gap-8">
                    <div className="relative z-0 w-full mb-5 group">
                      <input type='name' {...register("name", { required: true })} id='name' className="block py-2.5 px-0 rounded w-full text-md text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                      <label htmlFor="name" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input type='email' {...register("email", { required: true })} id='email' className="block py-2.5 px-0 rounded w-full text-md text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                      <label htmlFor='email' className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input type='phone' {...register("phone", { required: true })} id='phone' className="block py-2.5 px-0 rounded w-full text-md text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                    <label htmlFor='phone' className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                  </div>
                  <label htmlFor='message' className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Your message</label>
                  <textarea id="message" rows="4" className="mb-8 block py-2.5 px-0 rounded w-full text-md text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='Your message'></textarea>
                  <button type="submit" className="text-white bg-orange-500 hover:bg-transparent border border-transparent hover:border-white transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>




    </div>
  );
}
