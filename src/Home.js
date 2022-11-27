import React, {Component} from "react";
import Tshirt from './components/Tshirt';

class Home extends Component {
    render(){
        return(
            <div>
                <div className="box1">
                <p>Welcome to my t-shirt store.</p>
                <p>Welcome to my t-shirt store. This is a sample of a t-shirt sote site that I have creted for this spa project for cis453 Lab class.</p>
                </div>
                <div className="box2">
                <p> We offer custom t-shirts that cnnot be found on any other site.</p>
                <p>You can chose from a number of styles and colors.</p>
                </div>
                <div className="box3">
                <p>We offer delivery to all inner 48 states free with purchase of $40 or more.</p>
                <p>All t-shirts are created and sold by a local business in South Carolina.</p>
                </div>
                <Tshirt />
            </div>
        );
    }
}
export default Home;