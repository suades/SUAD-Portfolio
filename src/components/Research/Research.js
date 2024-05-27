import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import ResearchCard from "./ResearchCard";
import "./Research.scss";

function Research() {
    
    return (
        <Container fluid className="project-section" id="projects">
            <Particle />
            <Container>
                <h1 className="project-heading" style={{ zIndex: "2" }}>
                    <strong className="purple"> RESEARCH </strong>
                </h1>
                <p style={{ color: "white" }}> On top of my passion projects, I have worked on multiple research projects: </p>
                
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    <Col className="project-card">
                        <ResearchCard
                        isBlog={false}
                        title="Diagnosing Major Depressive Disorder using Activity Data from Wearable Sensors and Machine Learning"
                        description="Major Depressive Disorder (MDD), a mood disorder, is the most common psychological disorder. 
                        MDD manifests itself through a range of deadly symptoms, while diagnosis remains difficult and costly, often requiring 
                        psychiatrists or specialized techniques. An easier, and possibly early, diagnosis could improve treatment and outcomes. 
                        To address this unmet need, we developed a novel machine learning algorithm to detect MDD based on an individual's activity data 
                        i.e. movement combined with light data.  The dataset from Kaggle included activity data for fifty-five participants in 2021. 
                        Our algorithm determined that disturbances in activity is a symptom that can be used to predict Major Depressive Disorder. This insight has 
                        the potential to accurately detect and diagnose a person with MDD. In conclusion, the algorithm connecting activity to MDD paves the way to an easier and effective way of diagnosing depression."
                        ghLink="https://github.com/suades/Diagnosing-MDD-using-Activity-Data"
                        demoLink="https://www.jsr.org/hs/index.php/path/article/view/3684"
                        tags={["Python", "Deep Learning", "scikit-learn", "pandas", "Matplotlib"]}
                        />
                    </Col>
                </Row>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col className="project-card">
                        <ResearchCard
                        isBlog={false}
                        title="Pokemon Memorability Study"
                        description="In this study, we explored how familiarity influences memorability by comparing Generation 1 and Generation 5 Pokémon. Utilizing the RESMEM neural network, we obtained memorability scores for these Pokémon. We designed and published an online memorability study, engaging 700 participants through a platform built with JSPsych, HTML, and CSS. The collected data was analyzed using Matlab and Python to compare participants' recall accuracy with the RESMEM predictions. The results revealed that participants remembered Generation 1 Pokémon, such as Pikachu, significantly better than the RESMEM model predicted. This study highlights the impact of familiarity on memory retention and will be continued into the next semester to further investigate these findings."
                        ghLink=""
                        demoLink="https://jatos.mindprobe.eu/publix/SJ0bG1Z1nHJ"
                        tags={["JSPsych", "Python", "Matlab", "RESMEM", "HTML/CSS"]}
                        />
                    </Col>
                </Row>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    <Col className="project-card">
                        <ResearchCard
                        isBlog={false}
                        title="The Role of Machine Learning (ML) in the Prediction of Particulate Matter 2.5 (PM2.5) Concentration"
                        description="Particulate Matter refers to the pollutants in the air. These are directly linked to air pollution and increasingly poor air quality across the world. In recent years, the severity of poor air quality has increased significantly, to the point where it is damaging not only the environment but humans as well. It can cause a variety of symptoms, including premature death, and will damage water sources / waterways and ecosystems. Although there is no solution to getting rid of Particulate Matter, using Machine Learning there is a proven way to predict the concentration of Particulate Matter – specifically Particulate Matter 2.5 which is not visible to the human eye – in cities and countries, through a variety of neural networks and deep learning algorithms. Machine learning is an aspect of artificial intelligence that hopes to gain the predictive and analytical ability of humans. Machine learning uses various amounts of data and algorithms (that are meant to be like a human brain with individual nodes acting like neurons in the human brain and an activation threshold, like human brains) to make predictions. This can be done by using Particulate Matter data from air monitoring systems, in addition to satellite and land data. This article analyzes six different and recent research papers by explaining their methodology (algorithm(s) used, training and testing method, results, limitations, and importance). Their datasets, locations, algorithms used, and results are all different, and will help guide and advance current and future research on this topic. This article provides context on this important crossroad between predictive technology and the environment / human health."
                        ghLink=""
                        demoLink="https://scienceyouth.org/web/viewer.php?id=115&ckattempt=1"
                        tags={["Literature Review", "Machine Learning"]}
                        />
                    </Col>
                </Row>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    <Col className="project-card">
                        <ResearchCard
                        isBlog={false}
                        title="Applying Biorobotics to Spinal-Cord Injury Patients"
                        description="This project, conducted under the guidance of Professor Reikensmeyer at the UC Irvine Biorobotics Lab, aimed to develop a head-controlled mouse for spinal-cord injury (SCI) patients. Using Solidworks, we designed the head mouse, and then prototyped it with hardware components like a breadboard, IMU, and custom circuitry. The software for the device was programmed in C++ on an Arduino platform. This innovative solution allows SCI patients to interact with computers more easily, enhancing their accessibility and quality of life. Our efforts were recognized with a UC Irvine research fellowship and a California state scholarship, underscoring the project's impact and potential."
                        ghLink="https://github.com/suades/UCI-Biorobotics-Lab/tree/main"
                        demoLink=""
                        tags={["CAD", "Circuitry", "Arduino", "C++", "Breadboard"]}
                        />
                    </Col>

                </Row>
            
            </Container>
        </Container>


    );
}

export default Research;