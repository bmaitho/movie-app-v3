import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    // Fake contact information
    const contactInfo = {
        address: "123 Movie Review St, Film City",
        phone: "+254 (555) 123-4567",
        email: "bmaitho@gmail.com"
    };

    // State to manage visibility of each card's content
    const [visibleCard, setVisibleCard] = useState(null);

    const handleReadMore = (cardName) => {
        setVisibleCard(visibleCard === cardName ? null : cardName);
    };

    return (
        <div className="home-page">
            <div className="cards-container">
                <div className="card about-app">
                    <h2>About the Mtandao Movie Review App</h2>
                    {visibleCard === 'about' && (
                        <p>
                            Mtandao is your ultimate destination for movie reviews and recommendations. Discover new movies, read insightful reviews, and share your opinions with a vibrant community of film enthusiasts.
                        </p>
                    )}
                    <button onClick={() => handleReadMore('about')}>
                        {visibleCard === 'about' ? 'Show Less' : 'Read More'}
                    </button>
                </div>
                <div className="card fun-facts">
                    <h2>Fun Facts about Movies</h2>
                    {visibleCard === 'facts' && (
                        <p>
                            First Film: The world's first feature-length film is often credited to "The Story of the Kelly Gang," an Australian production from 1906.<br />
                            Most Expensive Film: As of recent records, the most expensive film ever made is "Avengers: Endgame," with a production budget exceeding $350 million.<br />
                            Longest Film: The longest mainstream film is "Gone with the Wind" (1939), with a runtime of approximately 3 hours and 58 minutes.<br />
                            Most Oscars: The film with the most Academy Awards is "Ben-Hur" (1959), winning 11 Oscars including Best Picture and Best Director.<br />
                            First Movie with Sound: "The Jazz Singer" (1927) is considered the first feature-length motion picture with synchronized dialogue sequences, marking the rise of "talkies."
                        </p>
                    )}
                    <button onClick={() => handleReadMore('facts')}>
                        {visibleCard === 'facts' ? 'Show Less' : 'Read More'}
                    </button>
                </div>
                <div className="card contact-us">
                    <h2>Contact Us</h2>
                    {visibleCard === 'contact' && (
                        <p>
                            Address: {contactInfo.address}<br />
                            Phone: {contactInfo.phone}<br />
                            Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                        </p>
                    )}
                    <button onClick={() => handleReadMore('contact')}>
                        {visibleCard === 'contact' ? 'Show Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
