import icon1 from '../images/icons1.png';
import icon2 from '../images/icons2.png';
import icon3 from '../images/icons3.png';
import '../App.css';
import './About.css';

export default function About() {
  return (
    // Consistent Styling of all pages
    <div className="App">
      {/* Content Styling on about page */}
      <header className="Content">
        {/* Txt and icons for informations */}
        <div className="Icon-Display">
          <img src={icon1} className="icon" alt="logo" />
          <p>
                    “From a young age I have been taught that I can achieve success through Hard work and 
            Determination and I hold that to be true today. I have always enjoyed art from an early age. 
            And have won some competitions as well , as I grew my passion for art grew stronger .
            As an Interactive designer I would like my work to be a representation of myself and my character,
            I would like to think that my work can act like a medium to properly express my feelings, time 
            And efforts that I have put in. I also enjoy problem solving and hope that my work can be of use 
            when time comes.”

          </p>
        </div>
        <div className="Icon-Display">
          <img src={icon2} className="icon" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur libero ac tellus pretium consequat. Morbi nulla elit, bibendum vel purus eu, suscipit tempus orci. Sed tempus quam id bibendum imperdiet. Pellentesque vehicula vestibulum mauris, eu facilisis risus aliquet vitae. Nunc commodo posuere enim eget ullamcorper. Etiam et lorem ut erat bibendum viverra. Ut auctor magna et tortor malesuada, a dictum magna faucibus. Nunc in ligula scelerisque, bibendum est id, lobortis metus. Aliquam erat volutpat. Maecenas sed massa lacinia, congue ex in, pellentesque ante. Proin vehicula ante in nunc euismod, et venenatis metus lobortis. Sed in aliquam ante, id imperdiet eros. Sed faucibus scelerisque ante at maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

            Phasellus condimentum leo metus, nec scelerisque orci consequat nec. Nunc pellentesque libero eget eros posuere semper. Nullam condimentum vitae purus nec facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi dolor mi, egestas quis maximus in, maximus vel felis. Quisque vel blandit leo, eget elementum ligula. Pellentesque sagittis ipsum ullamcorper finibus mattis. Sed aliquet eu risus et interdum. Donec non nisi volutpat, posuere diam vel, bibendum sapien. Morbi eget urna semper, venenatis nulla at, imperdiet odio. Aliquam erat volutpat. Mauris libero nunc, consectetur id sapien eu, bibendum vestibulum orci. Nulla a tortor quis erat placerat faucibus vitae non orci. Morbi sit amet ex a erat malesuada euismod. Cras ultricies orci sed semper iaculis. Quisque ut imperdiet mi.

            Suspendisse mollis et orci in consequat. Etiam vulputate metus at urna ultricies consequat. Sed placerat eros in sodales lacinia. Phasellus feugiat pulvinar mollis. Nunc sed sapien sed arcu condimentum congue quis vel mauris. Proin id justo eu quam hendrerit placerat. Donec venenatis pretium velit et vestibulum. Nam euismod arcu nisi, et pellentesque nunc convallis sit amet. Vivamus ac lectus sodales libero pellentesque dapibus.

            Sed egestas, ante a egestas ultricies, erat ligula posuere elit, ac cursus neque magna eget augue. Aliquam ut neque imperdiet, cursus ex nec, faucibus est. Vestibulum consectetur, metus nec pretium pulvinar, augue mauris pharetra nulla, et rhoncus erat nisi ullamcorper justo. Morbi laoreet nulla a elit convallis, nec fermentum quam consectetur. Phasellus fringilla tempus nisi non semper. Nullam luctus ornare mi quis tincidunt. Fusce bibendum odio lacus. Donec eu dapibus mauris.

            Vestibulum laoreet non nisi efficitur dapibus. Fusce pellentesque efficitur metus eget imperdiet. Etiam pretium scelerisque ipsum ac ornare. Aliquam erat volutpat. Etiam scelerisque viverra erat ut eleifend. Duis elementum dolor ac malesuada commodo. Ut nec bibendum tortor. Vestibulum neque ipsum, semper iaculis facilisis sed, auctor mattis libero. Phasellus velit sapien, blandit vel viverra eu, pretium vitae leo. Sed volutpat ornare facilisis. Integer at feugiat massa. Proin auctor non metus a fermentum. Nulla facilisi. Suspendisse faucibus commodo varius.
          </p>
        </div>
        <div className="Icon-Display">
          <img src={icon3} className="icon" alt="logo" />
          <p>
          “From a young age I have been taught that I can achieve success through Hard work and 
            Determination and I hold that to be true today. I have always enjoyed art from an early age. 
            And have won some competitions as well , as I grew my passion for art grew stronger .
            As an Interactive designer I would like my work to be a representation of myself and my character,
            I would like to think that my work can act like a medium to properly express my feelings, time 
            And efforts that I have put in. I also enjoy problem solving and hope that my work can be of use 
            when time comes.”
          </p>
        </div>
      </header>
    </div>
  );
}
