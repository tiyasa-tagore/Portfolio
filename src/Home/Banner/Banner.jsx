import image from '../../assets/Tiyasa.jpg'
import Typewriter from 'typewriter-effect';
import './Banner.css'
const Banner = () => {
    return (
        <div className='bg-blue-950 px-12 pt-16 lg:py-24 banner-container'>
            <div className="h-[800px] md:h-[900px] lg:h-[500px] grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                <div className=' pt-16 lg:p-28 lg:pt-36 lg:pl-48 '>
                    <div className={`text-white space-y-4`}>
                        <h2 className='text-3xl'>Hello there,</h2>
                        <h2 className='text-5xl text-white-500'>I am Tiyasa Tagore</h2>
                        <h2 className='text-3xl lg:text-3xl text-warning'>
                            <Typewriter
                                options={{
                                    strings: ['Junior Full Stack Web Developer', 'MERN Stack Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                    </div>
                    <div className='mt-12'>
                    <button className="btn btn-outline btn-warning"> <a href="https://drive.google.com/u/0/uc?id=14G1LmXG92dDeL3i_6RMIrYGUcjSGSr-u&export=download">Download Resume</a></button>
                    </div>
                </div>
                <div>
                    <div className='munna1-img -mt-16 md:-mt-0'>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;