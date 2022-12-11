import React, {Component} from "react";
import image1 from './images1.jpg';
import image2 from './images2.jpg';
import image3 from './images.jpg';

class Gallery extends Component {
    render() {
        return(
            <div>
                <h2>Couple Images</h2>
                <p>Here are a few sample images of some of are t-shirt options.</p>
                <h3>T-shirt 1</h3>
                <img src={image1} />
                <h3>T-shirt 2</h3>
                <img src={image2} />
                <h3>T-shirt 3</h3>
                <img src={image3} />
            </div>
        );
    }
}
export default Gallery;