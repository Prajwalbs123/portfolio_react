import LC from '../assets/images/LC.png'
import Gfg from '../assets/images/GFG.jpg'

const About = () => {
  return (
    <section className="about" itemID="about">
         <div className="about-img">
            <div >
                <img src={LC} />
                <a href="https://leetcode.com/prajwalshirshyad/" className="btn_abt">Leetcode</a>
            </div>
            <div>
                <img src={Gfg} />
                <a href="https://auth.geeksforgeeks.org/user/prajwalshirshyad/practice" className="btn_abt">geeksforgeeks</a>
            </div> 
        </div> 
        <div className="about-content">
            <h3 className="heading">About <span>Me</span></h3>
            <h2>Programmer</h2>
            <p>My name is Prajwal, and I am currently pursuing a BE degree in Information Science Engineering at The National Institute Of Engineering college. Through completing multiple projects and solving DSA problems, I have gained extensive knowledge in programming and its uses in the IT industry. I am now looking for opportunities in the IT sector to gain hands-on experience and apply the theoretical knowledge I have acquired throughout my college years.<br />
                During my studies, I successfully completed my college courses, an NPTEL course titled &quot;Joy of Computing using Python,&quot; and solved multiple DSA problems on LeetCode and GeeksForGeeks.<br />
                In my leisure time, I enjoy playing cricket, watching educational videos on YouTube, and reading about the latest developments in technology across various fields. I strongly believe that consistency and growth go hand-in-hand, so I strive to maintain a consistent work ethic.</p>
            <a href="#" className="btn_abt">Read More</a>
        </div>
    </section>
  )
}

export default About;