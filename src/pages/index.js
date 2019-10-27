import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar/Index';
import Scroll from '../components/Scroll';

import pic2 from '../assets/images/p1.png';
import pic3 from '../assets/images/ps2.png';
import pic4 from '../assets/images/p4.png';
import pic5 from '../assets/images/ps1.png';
import pic6 from '../assets/images/p3.png';
import pic7 from '../assets/images/p2.png';
import pic8 from '../assets/images/about.png';
import pic9 from '../assets/images/ps3.png'

import icon1 from '../assets/img/js.jpg'
import icon2 from '../assets/img/html.png'
import icon3 from '../assets/img/css.jpg'
import icon4 from '../assets/img/python.png'
import icon5 from '../assets/img/react.png'
import icon6 from '../assets/img/node.jpg'
import icon7 from '../assets/img/mongoose.png'
import icon8 from '../assets/img/mongodb.png'
import icon9 from '../assets/img/sql.png'
import icon10 from '../assets/img/django.jpg'
import icon11 from '../assets/img/gatsby.png'
import icon12 from '../assets/img/github.svg'
import icon13 from '../assets/img/heroku.png'
import icon14 from '../assets/img/netlify.png'
import icon15 from '../assets/img/materialui.png'
import icon16 from '../assets/img/materialize.png'
import icon17 from '../assets/img/bulma.svg'
import icon18 from '../assets/img/express.png'

const sections = [
  { id: 'top', name:'Welcome', icon: 'fa-th' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-code' },
  {id: 'skills', name: 'Skills', icon: 'fas fa-cogs'},
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! <br />
              My name is <strong>Brittani</strong>.
              <br />
              {/* Software Engineer */}
            </h2>
          <div className='typewriter'>
            {/* <p>
            I'm a creative Full-Stack Software Developer capable of delivering visually 
           appealing, responsive applications. With a background in communications,
            nonprofits and higher education, I thrive in diverse, goal-oriented 
           environments. Please click the button below to see my latest projects. 
            </p> */}
            <p>I'm a creative Full-Stack Software Developer capable of delivering visually </p>
            <p>appealing, responsive applications. With a background in communications, </p>
            <p>nonprofits and higher education, I thrive in diverse, goal-oriented </p>
            <p>environments. Please click the button below to see my latest projects. </p>
          </div>

          </header>
          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>
          <p>
          Nothing is impossible, the word itself says ‘I’m possible’!<br />
          ~Audrey Hepburn
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://fierce-basin-13970.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="image fit">
                  <img src={pic4} alt="Edison Bike Co." />
                </a>
                <header>
                  <h3>Edison Electric Bicycle Co.</h3>
                  <h4>A one-page, responsive application for the Edison Electric Bicycle company. <br/></h4> 
                  <h5><u>*Most recent application*</u></h5>
                </header>
              </article>
              <article className="item">
                <a href="https://tranquil-hollows-36268.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="image fit">
                  <img src={pic6} alt="Imagination Soars" />
                </a>
                <header>
                  <h3>Imagination Soars</h3>
                  <h4>An eCommerce bookstore that allows users to add and delete products from the shopping cart.</h4>
                </header>
              </article>
              <article className="item">
                <a href="https://pacific-spire-28763.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="image fit">
                  <img src={pic7} alt="Georgia Aquarium | Manager's Portal" />
                </a>
                <header>
                  <h3>Georgia Aquarium | Manager's Portal</h3>
                  <h4>Manager’s Portal that allows user to view, create, update and delete data related to exhibit moves, events and manager’s feedback. </h4>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
            <article className="item">
                <a href="https://heuristic-sinoussi-41401e.netlify.com/" target="_blank" rel="noopener noreferrer" className="image fit">
                  <img src={pic5} alt="Space-themed digital clock" />
                </a>
                <header>
                  <h3>Digital Alarm Clock</h3>
                  <h4>Space-themed digital alarm clock for children.</h4>
                </header>
              </article>
              <article className="item">
                <a href="https://musing-darwin-260755.netlify.com/" target="_blank" rel="noopener noreferrer" className="image fit">
                  <img src={pic9} alt="The Renaissance" />
                </a>
                <header>
                  <h3>The Renaissance | Representation Aimation</h3>
                  <h4>This application is a project that was birthed from my love of Disney 2D Animated films. <br/>
                  I bridged my love of Disney films with my favorite 2D artists: Vashti Harrison, Joshua Leonard, Pascla Campion, and Obi Aris.</h4> 
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
            <article className="item">
                <a href="https://brittmagee.github.io/SolarSequence-SEI23-Project1/" target="_blank" rel="noopener noreferrer" className="image fit">
                  <img src={pic2} alt="Solar Sequence" />
                </a>
                <header>
                  <h3>Solar Sequence</h3>
                  <h4>A digital, space-themed version of the 1980s Simon Says game.</h4>
                </header>
              </article>
              <article className="item">
                <a href="https://angry-shirley-b82182.netlify.com/" target="_blank" rel="noopener noreferrer" className="image fit">
                  <img src={pic3} alt="Digital Calculator" />
                </a>
                <header>
                  <h3>Calculator</h3>
                  <h4>Standard Digital Calculator.</h4>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="three">
          <header>
            <h2>Skills</h2>
          </header>
          <div>
            <table>
              <tr>
                <th>Languages</th>
              </tr>
              <tr>
                <td className='iconContainer'>
                  <img src={icon1} className="iconImg" alt="JavaScript" ></img>
                  <img src={icon2} className="iconImg" alt="HTML5" ></img>
                  <img src={icon3} className="iconImg" alt="CSS" ></img>
                  <img src={icon4} className="iconImg" alt="Python" ></img>
                </td>
              </tr>
              <tr className='iconContainer'>
                <td>JavaScript</td>
                <td>HTML5</td>
                <td>CSS</td>
                <td>Python</td>
              </tr>
            </table>
          </div>
          <div>
            <table>
              <tr>
                <th>Libraries</th>
              </tr>
              <tr>
                <td className='iconContainer'>
                  <img src={icon5} className="iconImg" alt="React"></img>
                  <img src={icon6} className="iconImg" alt="Node"></img>
                  <img src={icon7} className="iconImg" alt="Mongoose"></img>
                </td>
              </tr>
              <tr className='iconContainer'>
                <td>React.js</td>
                <td>Node.js</td>
                <td>Mongoose</td>
              </tr>
            </table>
          </div>
          <div>
            <table>
              <tr>
                <th>Databases</th>
              </tr>
              <tr>
                <td className='iconContainer'>
                  <img src={icon8} className="iconImg" alt="MongoDB"></img>
                  <img src={icon9} className="iconImg" alt="SQL"></img>
                </td>
              </tr>
              <tr className='iconContainer'>
                <td>MongoDB</td>
                <td>SQL</td>
              </tr>
            </table>
          </div>
          <div>
            <table>
              <tr>
                <th>Frameworks</th>
              </tr>
              <tr>
              <td className='iconContainer'>
                  <img src={icon10} className="iconImg" alt="Django"></img>
                  <img src={icon18} className="iconImg" alt="Express"></img>
                  <img src={icon11} className="iconImg" alt="Gatsby.js"></img>
                </td>
              </tr>
              <tr className='iconContainer'>
                <td>Django</td>
                <td>Express</td>
                <td>Gatsby.js</td>
              </tr>
            </table>
          </div>
          <div>
            <table>
              <tr>
                <th>Other</th>
              </tr>
              <tr>
              <td className='iconContainer'>
                  <img src={icon12} className="iconImg" alt="GitHub"></img>
                  <img src={icon13} className="iconImg" alt="Heroku"></img>
                  <img src={icon14} className="iconImg" alt="Netlify"></img>
                  <img src={icon15} className="iconImg" alt="Material UI"></img>
                  <img src={icon16} className="iconImg" alt="Materialize"></img>
                  <img src={icon17} className="iconImg" alt="Bulma"></img>
                </td>
              </tr>
              <tr className='iconContainer'>
                <td>GitHub</td>
                <td>Heroku</td>
                <td>Netlify</td>
                <td>Material UI</td>
                <td>Materialize</td>
                <td>Bulma</td>
              </tr>
            </table>
          </div>
      </section>
      <section id="about" className="four">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="Panorama | About Me" />
          </a>

          <p className="about">
          Hi! I'm Brittani, a burgeoning software engineer currently residing in Atlanta, GA. <br />
          During my time as a Software Engineering Immersive Fellow at General Assembly - Atlanta, 
          I developed a passion for front-end development and design. However, while I enjoy front-end development, 
          my projects demonstrate my comfortability working with front and back-end software, such as Javacript, React, 
          Node.js, MongoDB, SQL, etc. <br />
          Regarding my approach to coding, I enjoy collaborating by hearing the different perspectives on how my team can best accomplish a task. 
          I am artistic which enables me to envision the end product during the planning process. I also enjoy finding new ways to problem solve 
          and make my code as efficient as possible. For me, coding is a new art form from which I can not only express myself but also create 
          applications that positively impact the lives of others. <br />
          <p><b>While I am primarily looking for <u>full-time and apprenticeship opportunities</u> in the <br /><i>San Francisco Bay Area</i> and <i>Atlanta</i>, I am also open to working in other cities.</b></p>
          </p>
          <h3>Fun Facts About Me</h3>
          <p className="fun">~ I have traveled to 13 countries: China, Japan, Vietnam, Singapore, Myanmar (Burma), India, <br />Mauritius, South Africa, Ghana, Morocco, Spain, France, Israel/Palestine, and counting! <br />
          ~ Since childhood, I have loved to read. The first book I remember enjoying was <br /><i>The Giraffe, the Pelly, and Me</i> by Roald Dahl.<br />
          ~ I love attending Broadway musicals. <a href="https://wickedthemusical.com/" target="_blank"><i>Wicked</i></a> is my all-time favorite!<br />
          ~ I am an artist; Pottery and acrylic painting are my mediums of choice. <br />
          ~ I have a Yorkshire Terrier named Koda. (He was named after the little bear in Disney's <i>Brother Bear</i>).
          </p>
        </div>
      </section>

      <section id="contact" className="five">
        <div className="container">
          <header>
            <h2>Get In Touch</h2>
          </header>
          <form method="post" action="https://formspree.io/brittgmagee@gmail.com">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12 col-12-mobile">
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
