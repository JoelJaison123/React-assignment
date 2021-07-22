// Import image folder path for images on Contact Page
import form from '../images/form.png';
import '../App.css';
import './Contact.css';

export default function Contact() {
  return (
    // Consistent Styling of all pages
    <div className="App">
      {/* Content styling on Contact Information page */}
      <header className="Contact">
        <h1 className="Txt"><img src={form} className="icon-form" alt="formicon" />Contact Me!</h1>
      </header>
      <main>
        {/* Form submit [Styling in ./Contact.css]*/}
      <form>
          <div className="firstBox">
            <label>
              <input name="name" type="text" className="feedback-input" placeholder="First Name" id="name" />
            </label>
            <label>
              <input name="name" type="text" className="feedback-input" placeholder="Last Name" id="name" />
            </label>
            <label>
              <input name="email" type="text" className="feedback-input" id="email" placeholder="Email" />
            </label>
            <label>
              <textarea name="text" className="feedback-input" id="comment" placeholder="Come Say Hi.."></textarea>
            </label>
          </div>
          <div className="submit">
            <input type="submit" value="SUBMIT" id="button-blue" />
          </div>
        </form>
      </main>
    </div>
  );
}