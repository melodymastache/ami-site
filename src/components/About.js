import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className="body">
                <div id="bio-photo">
                    <img src={require("../images/amiv3.png")} alt="bio" />
                </div>
                <div className="text">
                    <h1 className="title">About Ami Gordon</h1>
                    <p>Born in Mexico and raised in Canada, I graduated from the University of Toronto with an Honours Bachelor
                    of Science. I completed the academically rigorous Psychology Research Specialist program, as well as an
                    English Minor. My thesis was supervised by Dr. Morris Moscovitch and examined the role of memory systems
                    in social problem solving and verbal fluency among different neurological populations. Currently, I am
                    enrolled in Cambrian College’s Applied Learning Disability Specialist graduate certificate program,
                    which concentrates on effective learning strategies and adaptive technologies for people with learning
                disabilities. Additionally, I have completed courses via Coursera and NovoEd. I am in love with learning and seek to instill this enthusiasm in my students.</p>

                    <p>I have more than fifteen years of experience in disability services, including eleven years as a personal
                    support worker for children and youth with various special needs and eight years as a 1:1 Facilitator at
                    Bloorview Kids Rehab, Canada’s largest children’s rehabilitation hospital. I have been a special needs
                    educator for more than a decade, assisting young people of all ages and skills attain their academic and
                    personal goals. I am also an avid volunteer and have helped several non-profit organizations and
                charities that target diverse needs and populations.</p>

                    <p>More important than my education and work history is my personal experience. I am the older sister of
                    three incredible young people, including a teenager on the autism spectrum. My siblings have taught me
                patience, kindness, and strength; they are the inspiration for my work.</p>

                    <p>To learn more about me and what I do, please visit me on social media.</p>
                </div>
            </div>
        )
    }
}