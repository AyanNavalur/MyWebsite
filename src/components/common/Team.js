import React, {Component} from 'react';
import TeamMember from './TeamMember';
import img1 from '../assets/img/team/ayan.jpg';

const team = [
    {name: 'Ayan Navalur', role: 'Lead Developer', linkedin: 'https://www.linkedin.com/in/ayan-navalur-a5b860126', github: 'https://github.com/AyanNavalur', twitter: 'https://twitter.com/AyanNavalur', image: img1}
];

class Team extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted"></h3>
                </div>
                <div className="row">
                    {team.map((member, index) => {
                        return <TeamMember {...member} key={index} />
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Our team maybe small, but there is always room for you.</p></div>
                </div>
            </div>
        </section>
        )
    }
}

export default Team;