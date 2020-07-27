import React, {Component} from 'react';

class Timeline extends Component {
    render() {
        return (
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About Me</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2017</h4>
                                    <h4 className="subheading">MIT College of Engineering</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Graduated as a Computer Engineer from one of the top colleges in Maharashtra.</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>Sept 2017-Apr 2019</h4>
                                    <h4 className="subheading">Accenture</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Worked as an Associate Software Engineer.</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="" /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>December 2012</h4>
                                    <h4 className="subheading">Transition to Full Service</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>Next Phase<br />Of My<br />Story!</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Timeline;