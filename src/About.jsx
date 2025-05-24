import myPhoto from "./assets/myPhoto.jpg";
import "./About.css"

function About(){
    return(
        <div id="main">
            <div id="about">
            <img src={myPhoto} alt="myPhoto" />
            <div id="aboutInfo">
                <h2>Hi,</h2>
                <h1><span id="im">I'm</span> N KEERTHAN </h1>
                <h2 >a Full Stack Developer</h2>
                <p>I am an aspiring Web Development Engineer passionate about crafting interactive and seamless user experiences. With hands-on experience in HTML5, CSS, JavaScript, and frameworks like React and Angular, I am dedicated to building modern web applications that are both efficient and user-friendly. My technical journey also includes exploring AWS, RESTful APIs, and Agile methodologies, enabling me to adapt quickly and contribute effectively in dynamic environments.</p>
                <button>Linked In</button>
                <button>Gmail</button>
            </div>
        </div>
        </div>
    )
}

export default About