import React from 'react';
import { useForm } from "react-hook-form";
import { Icon } from '@iconify/react';
import phone from '@iconify/icons-mdi/phone';
import email from '@iconify/icons-mdi/email';

const Contact = () => {

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


    return (
        <>
            {/* Get In Touch Section */}
            <div div className="pl-5 pr-5 py-20 lg:pl-28 lg:pr-10" >
                <div className="">
                    <div className="container mx-auto">
                        <h3 className="font-semibold text-2xl py-5 border-b inline-block border-orange-500 mb-8">Get In Touch</h3>

                        <div className="flex lg:flex-row flex-col gap-8">
                            <div className="w-full">
                                <p className='text-justify'>
                                    I’m Muhammad Jahirul Islam, a young professional from Bangladesh. I would love to spread positivism toward others. I’m a multidisciplinary creative soul and try to take a sustainable and distinct approach with various areas of expertise to motivate today’s young generation. <br /><br /> I have provided different skill development training and courses. Also, I’ve offered multiple sessions about career development, soft and hard skill, and so on. Till now I have reached more or less 25 thousand students and tried my best to provoke and inspire them that could be helped them to move on their future steps. Last but not the least, if you need any favor from me please feel free to contact me.
                                </p>
                                <div className="mt-5">
                                    <p className='flex items-center gap-3 my-5'><Icon icon={phone} className='text-orange-500' /> +8801839319088</p>
                                    <p className='flex items-center gap-3'><Icon icon={email} className='text-orange-500' />jahirrayhan80@gmail.com</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                                    <div className="flex gap-8">
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input {...register("name", { required: true })} id='name' className="block py-2.5 px-0 rounded w-full text-md text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-200 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                            <label htmlFor="name" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input {...register("email", { required: true })} id='email' className="block py-2.5 px-0 rounded w-full text-md text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-200 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                            <label htmlFor='email' className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                        </div>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input  {...register("phone", { required: true })} id='phone' className="block py-2.5 px-0 rounded w-full text-md text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-200 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                                        <label htmlFor='phone' className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                                    </div>
                                    <label htmlFor='message' className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Your message</label>
                                    <textarea id="message" rows="4" className="mb-8 block py-2.5 px-0 rounded w-full text-md text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-200 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='Your message'></textarea>
                                    <button type="submit" className="text-slate-200 bg-orange-500 hover:bg-transparent border border-transparent hover:border-white transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Contact;