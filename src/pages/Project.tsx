const Project = () => {
  return (
    <section className="projects" id="projects">
        <h2 className="heading">My <span>Projects</span></h2>
        <h2 className="trail">Projects Available on  <a href="https://github.com/Prajwalbs123" className="btn_pj">GitHub</a></h2>
        <div className="projects-container">
            
            <div className="projects-box">
                <i className='bx bx-code-alt' ></i>
                <h3>Web Development</h3>
                <p>Personal Portfolio Website. Web Technologies such as:</p>
                <p><span className="web"></span></p>
                <p>are used in this project. objective of working on this project was to learn frontend Web Development.</p>
                <img src="Sreenshot.png" alt='Web'  />
            </div>
            
            <div className="projects-box">
                <i className='bx bxl-java'></i>
                <h3>OOP-Java</h3>
                <p>The aim of working on this project was to learn about object oriented programming. This is a basic core java object oriented project operating on terminal.</p><p>Using: </p>
                <p><span className="java" ></span></p>
                <img src="JavaProjectOutput.png" alt='Java'  />
            </div>

            <div className="projects-box">
                <i className='bx bxs-data'></i>
                <h3>Database-MySQL</h3>
                <p>This is a basic database project using Mysql. It is a hospital database and it consists of</p><p><span className="tables"></span></p>
                <p>data from database can be easily retrieved using SQL queries in command prompt. Documentation using Schema and ER diagram</p>
                <img src="patient_record.png" alt='DBMS'/>
            </div>
        </div>
    </section>
  )
}

export default Project;