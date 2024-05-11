// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import imag1 from "../../../assets/laptop1.jpg"
import imag2 from "../../../assets/mobile.jpg"
import imag3 from "../../../assets/watch.jpg"
import imag4 from "../../../assets/headphone.jpg"
import "./style.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const Slider =  () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=' rounded-lg'>
            <div className='relative rounded-lg'>
              <img className='h-[405px] w-full object-cover rounded-lg' src={imag1} alt="" />
              <div className='absolute top-0  h-full w-full colors-slider'>
                <div className='lg:w-[60%] px-[50px]  h-full items-center flex'>
                  <div className='text-white'>
                  <h2 className='text-xl lg:text-3xl'>Discover a world where connections thrive</h2>
                  <p className='text-[14px]'>Our platform fosters meaningful interactions, enabling you to connect with like-minded individuals, share ideas, and forge lasting relationships. Join us on a journey of collaboration and community.</p>
                  <button className='mt-[20px] px-[15px] py-[8px]  lg:px-[40px] lg:py-[12px] border border-white'>Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' rounded-lg'>
            <div className='relative rounded-lg'>
              <img className='h-[405px] w-full object-cover rounded-lg' src={imag2} alt="" />
              <div className='absolute top-0  h-full w-full colors-slider'>
                <div className='lg:w-[60%] px-[50px]  h-full items-center flex'>
                  <div className='text-white'>
                  <h2 className='text-xl lg:text-3xl'>Explore the boundless realm of creativity</h2>
                  <p className='text-[14px]'>With our platform, unleash your imagination, explore new horizons, and bring your ideas to life. From innovative projects to artistic endeavors, let your creativity soar with us.</p>
                  <button className='mt-[20px] px-[15px] py-[8px]  lg:px-[40px] lg:py-[12px] border border-white'>Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' rounded-lg'>
            <div className='relative rounded-lg'>
              <img className='h-[405px] w-full object-cover rounded-lg' src={imag3} alt="" />
              <div className='absolute top-0  h-full w-full colors-slider'>
                <div className='lg:w-[60%] px-[50px]  h-full items-center flex'>
                  <div className='text-white'>
                  <h2 className='text-xl lg:text-3xl'>Be a catalyst for change</h2>
                  <p className='text-[14px]'>Our platform empowers you to make a difference, whether it s advocating for causes you believe in, driving societal impact, or initiating positive change within your community. Join us in inspiring a brighter future.</p>
                  <button className='mt-[20px] px-[15px] py-[8px]  lg:px-[40px] lg:py-[12px] border border-white'>Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' rounded-lg'>
            <div className='relative rounded-lg'>
              <img className='h-[405px]  w-full object-cover rounded-lg' src={imag4} alt="" />
              <div className='absolute top-0  h-full w-full colors-slider'>
                <div className='lg:w-[60%] px-[50px]  h-full items-center flex'>
                  <div className='text-white'>
                  <h2 className='text-xl lg:text-3xl'>Embrace diversity and celebrate uniqueness</h2>
                  <p className='text-[14px]'>Our platform is a melting pot of cultures, perspectives, and experiences. Dive into a rich tapestry of diversity, where every voice is heard, valued, and respected. Join us in embracing the beauty of difference.</p>
                  <button className='mt-[20px] px-[15px] py-[8px]  lg:px-[40px] lg:py-[12px] border border-white'>Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;