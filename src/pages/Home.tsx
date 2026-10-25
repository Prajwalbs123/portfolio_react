import Profile from '../assets/images/profilepic.png'

const Home = () => {
  return (
    <section className='flex '>
      <div className="home-content">
            <h3>Hello, I am</h3>
            <h1>Prajwal</h1>
            <p>Currently studying Information Science at National Institue Of Engineering</p>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/prajwal-b-s-877a40202"><i className='bx bxl-linkedin'></i></a>
                <a href="mailto:prajwalshirshard@gmail.com"><i className='bx bxl-gmail' ></i></a>
                <a href="https://github.com/Prajwalbs123"><i className='bx bxl-github' ></i></a>
            </div> 
            <a href="https://drive.google.com/file/u/2/d/1tBEb6eAlUead6OpnC9g3jmSH2W4N2cPg/view?usp=sharing" className="btn">Download CV</a>
        </div>
      <div className="home-img relative">
      <img src={Profile} alt='Image' className=' h-96 w-96 bg-gray-600  origin-bottom-right'/>      
      </div>
    </section>
  )
}

export default Home;