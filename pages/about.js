import Navbar from '../components/navbar'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div>
            <Navbar />
            <div>
                <h3 className={styles.title}> About Me </h3>
                <p className={styles.description}>
                    A versatile and growth-oriented learner, I am a software engineer with a creative perspective and a passion for solutions through collaboration.
                    My previous experience as a tech consultant with an asset management company has allowed for me to hone effective communication skills and leadership to manage client relationships and offer solutions to ensure satisfaction.
                </p>
                
                <p className={styles.description}> I'm a developer, writer, and public speaker with a strong passion for music and singing!</p>
                <p className={styles.description}> I recently graduated from Texas A&M University and worked in business management before making the transition to software engineering.
                    Having recently completed the General Assembly Software Engineering Immersive, I gained hands-on project experience with various tools and technologies.
                </p>
               
            </div>
        </div>
    )
}