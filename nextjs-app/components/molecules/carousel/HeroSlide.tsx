import Image from 'next/image'
import styles from './HeroSlide.module.scss'

const HeroSlide = () => {
  return (
    // <div className="carousel-item">
    <div className={styles.carousel_item}>
      <div className={`${styles.content} text-dark py-20 px-4 z-20 content`} >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center z-2">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold leading-tight mb-4">Welcome to Our Site</h2>
            <p className="text-xl mb-4">We offer a range of services to help you achieve your goals.</p>
            <button className="bg-white text-indigo-600 font-bold py-3 px-6 rounded hover:bg-indigo-600 hover:text-white">Get Started</button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="poster-img max-w-[240px]">
              <Image
                src="https://picsum.photos/200/300"
                width={500}
                height={500}
                alt="Picture of the author"
                className='w-full rounded-xl '
              />
            </div>

          </div>
        </div>
      </div>
    <div
      className={`${styles.bg_blr}`}
      style={{
        backgroundImage: "url('https://picsum.photos/200/300')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        filter: "blur(16px)",
        transform: "scale(1.08)",
      }}
    ></div>
      <div className="bg-color"></div>
    </div>
  )
};

export default HeroSlide;