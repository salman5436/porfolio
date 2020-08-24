import Navbar from '../components/navbar'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div>
            <Head>
                <title>About Me</title>
            </Head>
            
            <Navbar />


            <div>
                <h3 className={styles.title}> About Me </h3>
                <div className="profile-pic">
                    <img src="slack-profile-pic.jpg" />
                </div>
                <div className="brand-statement">
                    <p className={styles.description}>
                        A versatile and growth-oriented learner, I am a software engineer with a creative perspective and a passion for solutions through collaboration.
                        My previous experience as a tech consultant with an asset management company has allowed for me to hone effective communication skills and leadership to manage client relationships and offer solutions to ensure satisfaction.
                    </p>
                </div>
                {/* <div className="personal-description">
                    <p className={styles.description}> I'm a developer, writer, and public speaker with a strong passion for music and singing!</p>
                </div> */}
                <div className="peronal-summary">
                    <p className={styles.description}> I recently graduated from Texas A&M University and worked in business management before making the transition to software engineering.
                        Having recently completed the General Assembly Software Engineering Immersive, I gained hands-on project experience with various tools and technologies.
                    </p>
                </div>

                <h2>Technologies That I Use:</h2>
                <div className="tech">
                        <div classname="techname">
                            <img src="html5.png" />
                            <h4>HTML5</h4>
                        </div>
                        <div classname="techname">
                            <img src="css.png" />
                            <h4>CSS</h4>
                        </div>
                        <div classname="techname">
                            <img src="javascript.png" />
                            <h4>JavaScript</h4>
                        </div>
                        <div classname="techname">
                            <img src="react.png" />
                            <h4>React</h4>
                        </div>
                        <div classname="techname">
                            <img src="sql.png" />
                            <h4>SQL</h4>
                        </div>
                        <div classname="techname">
                            <img src="nodejs.png" />
                            <h4>NodeJS</h4>
                        </div>
                        <div classname="techname">
                            <img src="python.png" />
                            <h4>Python</h4>
                        </div>
                        <div classname="techname">
                            <img src="typescript.png" />
                            <h4>TypeScript</h4>
                        </div>
                        <div classname="techname">
                            <img src="mongodb.png" />
                            <h4>MongoDB</h4>
                        </div>
                </div>
               
            </div>
        </div>
    )
}