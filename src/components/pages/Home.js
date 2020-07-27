import React, {Component} from 'react';
import Header from '../common/Header'
import image from '../assets/img/header-bg.jpg';

//ReUsable Components
import Services from '../common/Services';
import Team from '../common/Team';
import Timeline from '../common/Timeline';
import Contact from '../common/Contact';
import Projects from '../common/Projects';

class Home extends Component {
    render() {

        return (
            <div>
                <Header 
                title="Welcome To My Company!"
                subtitle="IT'S NICE TO MEET YOU"
                btnText="Tell me more"
                link="/services"
                showButton={true}
                image={image}
                />

                <Services />

                <Projects />

                <Timeline />
                
                <Team />
                
                <Contact />
            </div>
        )
    }
}

export default Home;