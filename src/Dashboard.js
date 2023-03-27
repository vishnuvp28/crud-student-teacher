import React from "react";
import { Base } from "./Base";
import Carousel from "react-bootstrap/Carousel";

const Dashboard = ({ children }) => {
  return (
    <Base>
      <div className="dashboard">
        <div className="main-content ">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.shutterstock.com/shutterstock/photos/309239105/display_1500/stock-photo-teacher-asking-her-students-a-question-at-the-elementary-school-309239105.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p>
                The teacher's task is to initiate the learning process and then get out of the way.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/free-photo/front-view-female-student-wearing-backpack-holding-copybook-pen-thinking-blue-wall_140725-46520.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                <p>Teaching is an instinctual art, mindful of potential, craving of realizations, a pausing, seamless process.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src=" https://media.gettyimages.com/id/480507030/photo/school-children-raising-their-hands-ready-to-answer-the-question.jpg?s=170667a&w=gi&k=20&c=Qc9YbSp4qHdQC2ooUXj3vd-I4t_HBY2Nvc0SsHcXccE="
                alt="Third slide"
              />

              <Carousel.Caption>
                <p>
                The need for imagination, as a sense of truth, and as a feeling of responsibility -- these are the three forces which are the very nerve of education.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://thumbs.dreamstime.com/b/school-child-boy-glasses-think-classroom-kid-students-book-primary-reading-excellent-pupil-learn-lesson-dream-education-53439069.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                <p>The important thing is not so much that every child should be taught as that every child should be given the wish to learn..</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://freepngimg.com/save/166446-college-student-hq-image-free/600x442"
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                <p>Good teaching is one-fourth preparation and three-fourths theater..</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.gettyimages.com/id/887938150/photo/answering-a-question.jpg?s=612x612&w=gi&k=20&c=497dEPUaH15JBCQdbuRezb3BW9rlxTV-GT3EFrBAamE="
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                <p>In an effective classroom, students should not only know what they are doing, they should also know why and how.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                <p>Good teaching must be slow enough so that it is not confusing, and fast enough so that it is not boring.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Base>
  );
};

export default Dashboard;
