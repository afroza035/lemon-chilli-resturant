import React from 'react';
import ContactAbout from '../ContactAbout/ContactAbout';
import ContactForm from '../ContactForm/ContactForm';
import ContactHeader from '../ContactHeader/ContactHeader';
import ContactMap from '../ContactMap/ContactMap';

const Contact = () => {
    return (
        <div>
            <ContactHeader/>
            <ContactAbout />
            <ContactMap/>
            <ContactForm/>
        </div>
    );
};

export default Contact;