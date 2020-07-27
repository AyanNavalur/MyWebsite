import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/about-us.png';
import Timeline from '../common/Timeline';
import Team from '../common/Team';

class About extends Component {

    render() {
        return (
            <div>
                <Header 
                image={image}
                />
                
                <Timeline />

                <Team />
            </div>
            
        )
    }
}

export default About;