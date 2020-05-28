import React from 'react';

export default class Features extends React.Component {
    constructor() {
        super();
        this.getFeatures = this.getFeatures.bind(this);
    }
    getFeatures() {
        const titles = ["Tutoring", "Professional Communications", "Disability Advocacy"];
        const photos = ["https://placedog.net/250/250", "https://placedog.net/250/250", "https://placedog.net/250/250"];
        let features = []; // local variable hols JSX for rendering
        for (var i in titles) { // titles = key
            if (titles.indexOf(titles[i]) % 2 === 0) { // for every uneven element
                features.push( // add JSX to local variable
                    <div className="feature">
                        <div>
                            <img src={photos[i]} alt={titles[i]} className="feature-photo" />
                        </div>
                        <div className="feature-text">
                            <h2 className="title">{titles[i]}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis risus justo. Curabitur suscipit eu lorem vel mattis. Donec rhoncus odio ut nisi imperdiet imperdiet. Vivamus tincidunt mattis velit condimentum dapibus. Sed vitae libero tempus, viverra nunc a, lacinia lectus. Aenean lectus tortor, ultricies quis consectetur sed, molestie vel libero. Maecenas a egestas urna.</p>
                            <p className="button"><a href="/" alt="Learn More...">Learn More...</a></p>
                        </div>
                    </div>
                )
            }
            else {
                features.push( // every even element shifted to the right
                    <div className="feature feature-right">
                        <div className="feature-text">
                            <h2 className="title">{titles[i]}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis risus justo. Curabitur suscipit eu lorem vel mattis. Donec rhoncus odio ut nisi imperdiet imperdiet. Vivamus tincidunt mattis velit condimentum dapibus. Sed vitae libero tempus, viverra nunc a, lacinia lectus. Aenean lectus tortor, ultricies quis consectetur sed, molestie vel libero. Maecenas a egestas urna.</p>
                            <p className="button"><a href="/" alt="Learn More...">Learn More...</a></p>
                        </div>
                        <div>
                            <img src={photos[i]} alt={titles[i]} className="feature-photo" />
                        </div>
                    </div>
                )
            }
        }
        return features;
    }
    render() {
        return (
            <div className="main-container">
                <div className="banner"></div>
                <div className="home-container">
                    {this.getFeatures()}
                </div>
            </div>
        )
    }
}