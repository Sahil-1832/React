import React from 'react';
import "./About.css";

const About = () => {
    return (
        <section className="about-container" id="about">
            <h5>About</h5>
            <div className="about-content">
            Hey there, I'm <strong>Sahil</strong>. I recently finished my Master's in Computer Applications at Central University of Himachal Pradesh, after completing my Bachelor's in Mathematics from the Government Degree College Dharamshala. I'm pretty handy with a bunch of tech stuff like <strong> C++, Java, JavaScript, Python, MySQL, Firebase, React, GitHub, HTML, CSS, Android Studio,</strong> and <strong>PHP</strong>. Solving problems across different platforms is one of my favorite things to do. I'm ranked 2nd on GeeksforGeeks leaderboard at my university and have tackled over 170 challenges on LeetCode, earning 4 milestones along the way.
            <div className="icons">
                <div className="tech-icon">
                    <img src="./assets/C++.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/java.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/js.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/python.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/mysql.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/firebase.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/react.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/github2.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/html.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/css-3.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/android studio.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/php.png" alt="" />
                </div>
            </div>
            <div className="collaborate"><h3>Let's collaborate and create something amazing.</h3></div>
            </div>
        </section>
    )
}

export default About;