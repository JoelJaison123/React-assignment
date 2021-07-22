import '../App.css';
import './Projects.css';
import gridImg1 from '../images/gridImg1.jpg'
import gridImg2 from '../images/gridImg2.jpg'
import gridImg3 from '../images/gridImg3.jpg'
import gridImg4 from '../images/gridImg4.jpg'
import gridImg5 from '../images/gridImg5.jpg'
import gridImg6 from '../images/gridImg6.jpg'
import gridImg7 from '../images/gridImg7.jpg'
import gridImg8 from '../images/gridImg8.jpg'

export default function Projects() {
  return (
    <div className="App">
      <main className="projectGrid">
        <div className="grid-item">
          <div className="img__wrap">
            <img src={gridImg3} className="gridImg3" alt="project3" />
            <div className="img__description_layer">
              <p className="img__description">Visual Branding</p>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="img__wrap">
            <img src={gridImg4} className="gridImg4" alt="project4" />
            <div className="img__description_layer">
              <p className="img__description">UX | UI</p>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="img__wrap">
            <img src={gridImg2} className="gridImg2" alt="project2" />
            <div className="img__description_layer">
              <p className="img__description">3D art works</p>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="img__wrap">
            <img src={gridImg1} className="gridImg1" alt="project1" />
            <div className="img__description_layer">
              <p className="img__description">Photoshop | Ilustrators</p>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="img__wrap">
            <img src={gridImg5} className="gridImg5" alt="project5" />
            <div className="img__description_layer">
              <p className="img__description">Pacakge Design</p>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="img__wrap">
            <img src={gridImg6} className="gridImg6" alt="project6" />
            <div className="img__description_layer">
              <p className="img__description">FrontEnd | Web Design</p>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="img__wrap">
            <img src={gridImg7} className="gridImg7" alt="project7" />
            <div className="img__description_layer">
              <p className="img__description">Product Design</p>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="img__wrap">
            <img src={gridImg8} className="gridImg8" alt="project8" />
            <div className="img__description_layer">
              <p className="img__description">Others</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
