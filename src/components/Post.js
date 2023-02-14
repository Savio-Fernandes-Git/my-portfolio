import React from 'react'
import CV2021 from '../documents/CV February 2023 Savio.pdf';

export default function Resume() {

    return (
    <div>
        <h1 data-aos="fade-right" data-aos-duration="2000" className="resumeTitle ml-32 mt-16 text-4xl">Resume</h1>
        <a href={CV2021} download>
        <h1 data-aos="fade-right" data-aos-duration="2500" className="dl p-2 ml-32 mt-12">Download Resume</h1>
        </a>
        <div data-aos="fade-up" data-aos-duration="2000" className="resume grid grid-cols-1 md:grid-cols-1 grid-flow-row m-32 mt-10 gap-4">    
            <div>
                <h1 data-aos="zoom-out-right" data-aos-duration="2000" className="text-3xl">Experience</h1>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">Full Stack Software Engineer | Cargo LLC </p>
                    <p>August 2021 – September 2022</p>
                    <ul>
                        <li className="mt-4 ml-2">- Created RESTful APIs to serve web & mobile applications using .NET core 6.</li>
                        <li className="mt-4 ml-2">- Well-versed with Repository pattern with Unit of Work & CQRS+Mediatr pattern.</li>
                        <li className="mt-4 ml-2">- Experience with Ocelot API gateway for Microservices pattern.</li>
                        <li className="mt-4 ml-2">- Worked on geographical mapping services.</li>
                    </ul>
                </div>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">IT Student Computing Assistant - Level 1 Tech Support | Maynooth University </p>
                    <p>October 2022 – Present</p>
                    <ul>
                        <li className="mt-4 ml-2">- Performed level 1 tech support.</li>
                        <li className="mt-4 ml-2">- Experience in troubleshooting common tech problems.</li>
                        <li className="mt-4 ml-2">- Worked at the library front desk to cater to peer requirements.</li>
                        <li className="mt-4 ml-2 mb-8   ">- Experience in navigating azure AD and user credential management.</li>
                    </ul>
                </div>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">Student Program Assistant-IEP | American University of Kuwait (AUK)</p>
                    <p>May 2019 – May 2020</p>
                    <ul>
                        <li className="mt-4 ml-2">- Conducted and Proctored Accuplacer exams for newly admitted students.</li>
                        <li className="mt-4 ml-2 mb-8">- Worked as a peer mentor for freshman university orientation.</li>
                    </ul>
                </div>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">Student Program Assistant-IEP | American University of Kuwait (AUK)</p>
                    <p>May 2019 – May 2020</p>
                    <ul>
                        <li className="mt-4 ml-2">- Conducted and Proctored Accuplacer exams for newly admitted students.</li>
                        <li className="mt-4 ml-2 mb-8">- Worked as a peer mentor for freshman university orientation.</li>
                    </ul>
                </div>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">Library Tech Support Student Assistant | American University of Kuwait (AUK)</p>
                    <p>February 2018 – May 2019 </p>
                    <ul>
                        <li className="mt-4 ml-2">- Maintained computer labs in the library.</li>
                        <li className="mt-4 ml-2 mb-8">- Performed troubleshooting when required to solve technical problems.</li>
                    </ul>
                </div>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">Student Lab Assistant-IT | American University of Kuwait (AUK)</p>
                    <p>September 2016 – May 2017 </p>
                    <ul>
                        <li className="mt-4 ml-2">- Installed hardware components in offices.</li>
                        <li className="mt-4 ml-2">- Performed troubleshooting and fixing.</li>
                        <li className="mt-4 ml-2 mb-8">- Worked with IT professionals in Network Administration and Tech Support.</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 data-aos="zoom-out-right" data-aos-duration="2000" className="text-3xl">Education</h1>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">MSc in Computer Science (Software Engineering) | Maynooth University</p>
                    <p>2022 – 2023</p>
                    <ul>
                        <li className="mt-4 ml-2">- Computer science program focussed on Software Engineering principles.</li>
                        <li className="mt-4 ml-2 mb-8">- Expected to graduate in May 2023.</li>
                    </ul>
                </div>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">BE in Computer Engineering | American University of Kuwait (AUK)</p>
                    <p>2016 – 2021</p>
                    <ul>
                        <li className="mt-4 ml-2 mb-8">- 3.10 CGPA in ABET certified Computer Engineering Program.</li>
                    </ul>
                </div>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">12th Grade CBSE Graduate | Carmel School Kuwait</p>
                    <p>2002 – 2016</p>
                    <ul>
                        <li className="mt-4 ml-2 mb-8">- 81% overall in AISSC Computer Science–Math curriculum.</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 data-aos="zoom-out-right" data-aos-duration="2000" className="text-3xl">Extra Curricular</h1>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">PEER MENTOR | STUDENT ORIENTATION (IEP) </p>
                    <p>January 2020</p>
                    <ul>
                        <li className="mt-4 ml-2">- Managed new members and performed admin tasks to ensure registration of attendees.</li>
                        <li className="mt-4 ml-2 mb-8">- Interacted with new students with social activities.</li>
                    </ul>
                </div>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">ORGANIZER | IEEE 2ND GCC SYP CONGRESS 2019 </p>
                    <p>May 2019</p>
                    <ul>
                        <li className="mt-4 ml-2">- Managed and Adhered to the organizing committee with a team of organizers.</li>
                        <li className="mt-4 ml-2 mb-8">- Exhibition moderator</li>
                    </ul>
                </div>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">VOLUNTEER | COMIC CON KUWAIT</p>
                    <p>February 2018</p>
                    <ul>
                        <li className="mt-4 ml-2">- Worked in a team to regulate traffic flow. </li>
                        <li className="mt-4 ml-2 mb-8">- Adhered to the purpose of satisfying clients attending the event. </li>
                    </ul>
                </div>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">VOLUNTEER | AIESEC 2ND NATCO CONFERENCE KUWAIT</p>
                    <p>April 2017</p>
                    <ul>
                        <li className="mt-4 ml-2 mb-8">- Engaged in social activities with multiple candidates.</li>
                    </ul>
                </div>
                <div data-aos="zoom-out-right" data-aos-duration="2000">
                    <p className="mt-4 text-xl">RUNNER-UP | CBSE FOOTBALL CLUSTERS KUWAIT </p>
                    <p>November 2014</p>
                    <ul>
                        <li className="mt-4 ml-2 mb-8">- Participated in CBSE clusters football tournament.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}