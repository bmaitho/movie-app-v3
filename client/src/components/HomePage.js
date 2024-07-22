import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const contactInfo = {
        address: "123 Movie Review St, Film City",
        phone: "+254 (555) 123-4567",
        email: "bmaitho@gmail.com"
    };

    const funFacts = [
        {
            title: "First Film",
            content: "The world's first feature-length film is often credited to \"The Story of the Kelly Gang,\" an Australian production from 1906."
        },
        {
            title: "Most Expensive Film",
            content: "As of recent records, the most expensive film ever made is \"Avengers: Endgame,\" with a production budget exceeding $350 million."
        },
        {
            title: "Longest Film",
            content: "The longest mainstream film is \"Gone with the Wind\" (1939), with a runtime of approximately 3 hours and 58 minutes."
        },
        {
            title: "Most Oscars",
            content: "The film with the most Academy Awards is \"Ben-Hur\" (1959), winning 11 Oscars including Best Picture and Best Director."
        },
        {
            title: "First Movie with Sound",
            content: "\"The Jazz Singer\" (1927) is considered the first feature-length motion picture with synchronized dialogue sequences, marking the rise of \"talkies.\""
        }
    ];

    const [visibleCard, setVisibleCard] = useState(null);
    const [visibleFact, setVisibleFact] = useState(null);
    const [expandedSections, setExpandedSections] = useState({
        about: false,
        vision: false,
        howToUse: false,
        team: false
    });

    const handleReadMore = (cardName) => {
        setVisibleCard(visibleCard === cardName ? null : cardName);
    };

    const handleFactClick = (index) => {
        setVisibleFact(visibleFact === index ? null : index);
    };

    const toggleSection = (section) => {
        setExpandedSections({
            ...expandedSections,
            [section]: !expandedSections[section]
        });
    };

    return (
        <div className="home-page">
            <div className="cards-container">
                <div className="card about-app">
                    <h2>About the Mtandao Movie Review App</h2>
                    {visibleCard === 'about' && (
                        <div>
                            <div className="section" onClick={() => toggleSection('about')}>
                                <h3>About</h3>
                                {expandedSections.about && (
                                    <p>
                                        Mtandao is your ultimate destination for movie reviews and recommendations. Discover new movies, read insightful reviews, and share your opinions with a vibrant community of film enthusiasts.
                                    </p>
                                )}
                            </div>
                            <div className="section" onClick={() => toggleSection('vision')}>
                                <h3>Our Vision</h3>
                                {expandedSections.vision && (
                                    <p>
                                        Our vision is to create a world where movie lovers can connect, share their thoughts, and discover new films that inspire and entertain. We aim to be the go-to platform for honest and engaging movie reviews.
                                    </p>
                                )}
                            </div>
                            <div className="section" onClick={() => toggleSection('howToUse')}>
                                <h3>How to Use the App</h3>
                                {expandedSections.howToUse && (
                                    <p>
                                        Using Mtandao is simple! Sign up or log in to your account, browse through the latest reviews and movies , and use our search feature to find a movie and its reviews . You can also leave your own reviews and rate films.
                                    </p>
                                )}
                            </div>
                            <div className="section" onClick={() => toggleSection('team')}>
                                <h3>Our Team</h3>
                                {expandedSections.team && (
                                    <p>
                                        Our team is composed of passionate movie enthusiasts, experienced critics, and tech-savvy developers. We are dedicated to bringing you the best movie review experience possible.
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                    <button onClick={() => handleReadMore('about')}>
                        {visibleCard === 'about' ? 'Show Less' : 'Read More'}
                    </button>
                </div>
                <div className="card fun-facts">
                    <h2>Fun Facts about Movies</h2>
                    {visibleCard === 'facts' && (
                        <div className="fun-facts-container">
                            {funFacts.map((fact, index) => (
                                <div key={index} className="fun-fact-card" onClick={() => handleFactClick(index)}>
                                    <h3>{fact.title}</h3>
                                    {visibleFact === index && <p>{fact.content}</p>}
                                </div>
                            ))}
                        </div>
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
