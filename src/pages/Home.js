import '../App.css';
import './Home.css';
// Import image folder path for images on Home Page
import gridImg1 from '../images/gridImg1.jpg'
import gridImg2 from '../images/gridImg2.jpg'
import gridImg3 from '../images/gridImg3.jpg'
import gridImg4 from '../images/gridImg4.jpg'

export default function Home() {
  return (
    // Consistent Styling of all pages
    <div className="App">
      {/* Content Styling on home page */}
      <div className="Home">
        <header>
          <h1>Hello!</h1>
          <h2>Im Joel Jaison</h2>
          <h3>Welcome To My Design Portfolio</h3>
        </header>
      </div>
      {/* scroll down direction animation [styled in "./Home.css"]*/}
      <div className="area">
        <div class="scroll"></div>
      </div>
      <h4>Project Works</h4>
      {/* Grid Layout for project display */}
      <main className="projectGrid">
        <div className="grid-item">a
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
              <p className="img__description">Photoshop | Iluustrators</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
