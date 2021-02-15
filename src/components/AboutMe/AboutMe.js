import React from 'react';
import './AboutMe.scss';

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <div className="contentBox">
                <h2>Education </h2>
                <strong><p>Technical college in Zlaté Moravce (Slovakia) [2016-2020]</p></strong>
                <p>network engineer</p>
            </div>
            
            <div className="contentBox">
                <h2>Personal interests</h2>
                <p>Hiking, Music, SpaceX, IoT, Technologies, Raspberry Pi, Arduino, Tesla, Cyber Security, Penetration testing</p>
            </div>

            <div className="contentBox">
                <h2>Certificates</h2>
                <p>Flutter & Dart to Build iOS & Android Apps [2020]</p>
                <p>React - (incl Hooks, React Router, Redux) [2020]</p>
                <p>Vue - (incl Router, Vuex) [2020]</p>
                <p>CCA Java Level 1 [2020]</p>
                <p>CCA Java Level 2 [2020]</p>
                <p>ECDL [2020]</p>
            </div>
        </div>
    );
}

export default AboutMe;
