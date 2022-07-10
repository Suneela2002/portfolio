import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Lru from "../assets/img/Lru.png";
import Portfolio from "../assets/img/Portfolio.png";
import Reelify from "../assets/img/Reelify.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ONLINE SHOPPING CART",
      description: "HTML AND CSS PROJECT",
      imgUrl: projImg2,
          Github: <a href= "https://github.com/Suneela2002/Online-Shopping-Cart" classname ="btn" target="_blank">Github Link</a>,
          Live: <a href= "https://github.com/Suneela2002/Online-Shopping-Cart" classname ="btn" target="_blank">Live Link</a>
    },
    {
      title: "CAPESTONE PORTAL",
      description: "Python",
      imgUrl: Reelify,
        Github: <a href= "https://github.com/Suneela2002/Capestone_portal" classname ="btn" target="_blank">Github Link</a>,
        Live: <a href= "https://github.com/Suneela2002/Capestone_portal" classname ="btn" target="_blank">Live Link</a>
    },
    {
      title: "TO DO WEB APPLICATION",
      description: "ReactJS Project",
      imgUrl: projImg3,
        Github: <a href= "https://github.com/Suneela2002/todowebapplication" classname ="btn" target="_blank">Github Link</a>,
        Live: <a href= "https://github.com/Suneela2002/todowebapplication" classname ="btn" target="_blank">Live Link</a>
    },
    {
      title: "SALES DASHBOARD",
      description: "MICROSOFT EXCEL AND TABLEAU",
      imgUrl: projImg1,
        Github: <a href= "https://github.com/Suneela2002/Sales-Dashboard" classname ="btn" target="_blank">Github Link</a>,
        Live: <a href= "https://github.com/Suneela2002/Sales-Dashboard" classname ="btn" target="_blank">Live Link</a>
      },
    {
          title: "BANK MANAGEMENT SYSTEM",
          description: "C++",
          imgUrl: Lru,
          Github: <a href="https://github.com/Suneela2002/bank-management-system" classname="btn" target="_blank">Github Link</a>,
          Live: <a href="https://github.com/Suneela2002/bank-management-system" classname="btn" target="_blank">Live Link</a>
      },
    {
      title: "React-Portfolio",
      description: "ReactJS Project",
      imgUrl: Portfolio,
        Github: <a href= "https://github.com/Suneela2002/portfolio" classname ="btn" target="_blank">Github Link</a>,
        Live: <a href= "https://github.com/Suneela2002/portfolio" classname ="btn" target="_blank">Live Link</a>
      },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> Projects, Experience , Certifications and Education </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                       <Nav.Link eventKey="third">Certifications</Nav.Link>
                    </Nav.Item>
                    
                                              <Nav.Item>
                                                  <Nav.Link eventKey="fourth">Organizations</Nav.Link>
                                              </Nav.Item>
                                          <Nav.Item>
                      <Nav.Link eventKey="fifth">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                                              <p> Projects, Experience , Certifications and Education </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                     
                                              Content writer at Kleen Security (01/2020-present) <br />
                                                 -> Writing content for the articles that publish on newspaper  <br />
                                                 -> Creating posters and posts for social media<br />
                                              Tutor at SolutionInn (04/2022-present)<br />
                                                 ->Learning to solve programming questions with maximum accuracy.<br />
                                                 ->Helping students to solve problems.<br />
                                          </Tab.Pane>
                    <Tab.Pane eventKey="third">
                                1) Python 101 for Data Science (09/2021 - Present) from IBM Developer Skills Network  <br />
                                2) Data Science Methodology (08/2021 - Present) from IBM Developer Skills Network   <br />
                                3) Data Science Tools (08/2021 - Present) from IBM Developer Skills Network   <br />
                                4) Introduction to Data Science (07/2021 - Present) from IBM Developer Skills Network  <br  />
                                5) HTML and CSS Certification (07/2021 - Present) from Udemy   <br  />
                    
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="fourth">
                                              OTAKU Organization LPU (01/2020-present)  <br />
                                              ->OB Member  <br />
                                              ->Head Content Writer  <br />
                                              ->Organized workshops on C++ and MongoDB  <br />
                                              RISE LPU (01/2020-present)  <br />
                                              ->Student Co-Ordinator  <br />
                                              Lovely Professional University (10/2021-present)  <br />
                                              ->Student Placement Co-Ordinator  <br />
                                              ->Organized pre-placement talks, Group discussions and Placement Interviews.  <br />
                                              </Tab.Pane>

                    <Tab.Pane eventKey="fifth">
                      <p>About to step into 7th semester of graduation in Computer Science and Engineering from Lovely Professional University with a current CGPA of 8.25</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
