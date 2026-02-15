import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import TopNavBar from '../components/TopNavBar'
import './PortFolioPage.css'
import BG from '../assets/Background.jpg'
import Profile from '../assets/MainImage.png'
import aboutMeBackground from '../assets/AboutBackground.png'
import aboutMeImage from '../assets/AboutMeImage.png'
import allAboutMeBackground from '../assets/Allaboutme.jpg'
import Projects from '../assets/projects.png'
import Ecommerce from '../assets/ecommerce.png'
import GPA from '../assets/gpa.png'
import SEO from '../assets/seo.png'
import AI from '../assets/ai.png'
import UI from '../assets/Ui.png'
import Contact from '../assets/contact.png'
import CV from '../assets/CV.pdf'

export default function PortFolioPage() {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        if (form.current) {
            emailjs.sendForm('service_2kskru4', 'template_o8vembo', form.current, '2QSObCDeotbXJ3LgG')
                .then((result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                    form.current?.reset();
                }, (error) => {
                    console.log(error.text);
                    alert("Failed to send message. Please try again.");
                })
                .finally(() => setIsSending(false));
        }
    };

    return (
        <>
            <div className='port-folio-page-container'>
                <TopNavBar onHireMeClick={toggleModal} />

                <motion.section
                    id='home'
                    className='main-container'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={BG} alt="" className='bg-image' />

                    <div className='hero-content'>
                        <div className='hero-image-wrapper'>
                            <img src={Profile} alt="Akhila Chirantha" className='profile-image' />
                        </div>

                        <div className='hero-text'>
                            <p className='hero-greeting'>
                                Hello, I'm <span className='hero-name'>Akhila Chirantha</span> 🫰
                            </p>
                            <h1 className='hero-title'>
                                Web Developer &amp;<br />SEO Specialist
                            </h1>
                            <p className='hero-description'>
                                I am a passionate Full Stack Developer and SEO Specialist who builds modern,
                                high-performance web applications and helps businesses grow online.
                            </p>
                            <div className='hero-buttons'>
                                <a href={CV} download="Akhila_Chirantha_CV.pdf" className='btn-download'>
                                    Download CV
                                    <span className='btn-chevron'>▾</span>
                                </a>
                                <button className='btn-hire' onClick={toggleModal}>Hire Me</button>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Sidebar */}
                    <div className='social-sidebar'>
                        <a href="https://x.com/ChiranthaAkhila" className='social-icon' aria-label="Twitter">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.08301 19.2708C3.92159 20.3344 6.05621 20.8333 8.33301 20.8333C15.0838 20.8333 20.5847 15.4818 20.8248 8.78956L22.9163 4.68751L19.4224 5.20834C18.6879 4.56004 17.7231 4.16667 16.6663 4.16667C13.9868 4.16667 11.9796 6.7889 12.6256 9.3542C8.92451 9.593 5.57121 7.31386 3.63189 4.27628C2.34495 8.64776 3.53747 13.9126 6.77051 17.1568C6.77051 18.3823 3.64551 19.1134 2.08301 19.2708Z" stroke="#141B34" stroke-width="2" stroke-linejoin="round" /></svg>
                        </a>

                        <a href="https://www.linkedin.com/in/akhila-chirantha/" className='social-icon' aria-label="LinkedIn">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.29199 10.4167V17.7083" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M11.459 13.5417V17.7083M11.459 13.5417C11.459 11.8158 12.8581 10.4167 14.584 10.4167C16.3099 10.4167 17.709 11.8158 17.709 13.5417V17.7083M11.459 13.5417V10.4167" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.30001 7.29166L7.29065 7.29166" stroke="#141B34" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M2.60449 12.5C2.60449 7.83506 2.60449 5.50259 4.0537 4.05338C5.50291 2.60416 7.83539 2.60416 12.5003 2.60416C17.1653 2.60416 19.4977 2.60416 20.9469 4.05338C22.3962 5.50259 22.3962 7.83506 22.3962 12.5C22.3962 17.1649 22.3962 19.4974 20.9469 20.9466C19.4977 22.3958 17.1653 22.3958 12.5003 22.3958C7.83539 22.3958 5.50291 22.3958 4.0537 20.9466C2.60449 19.4974 2.60449 17.1649 2.60449 12.5Z" stroke="#141B34" stroke-width="2" stroke-linejoin="round" /></svg>
                        </a>

                        <a href="https://www.facebook.com/profile.php?id=100084306980023" className='social-icon' aria-label="Facebook">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.60449 12.5C2.60449 7.83506 2.60449 5.50259 4.0537 4.05338C5.50291 2.60416 7.83539 2.60416 12.5003 2.60416C17.1653 2.60416 19.4977 2.60416 20.9469 4.05338C22.3962 5.50259 22.3962 7.83506 22.3962 12.5C22.3962 17.1649 22.3962 19.4974 20.9469 20.9466C19.4977 22.3958 17.1653 22.3958 12.5003 22.3958C7.83539 22.3958 5.50291 22.3958 4.0537 20.9466C2.60449 19.4974 2.60449 17.1649 2.60449 12.5Z" stroke="#141B34" stroke-width="2" stroke-linejoin="round" /><path d="M17.7087 9.33333C18.2609 9.33333 18.7087 8.88561 18.7087 8.33333C18.7087 7.78104 18.2609 7.33333 17.7087 7.33333V8.33333V9.33333ZM16.667 8.33333V9.33333V8.33333ZM11.5003 22.3958C11.5003 22.9481 11.948 23.3958 12.5003 23.3958C13.0526 23.3958 13.5003 22.9481 13.5003 22.3958H12.5003H11.5003ZM10.417 13.5833C9.86471 13.5833 9.41699 14.031 9.41699 14.5833C9.41699 15.1356 9.86471 15.5833 10.417 15.5833V14.5833V13.5833ZM15.6253 15.5833C16.1776 15.5833 16.6253 15.1356 16.6253 14.5833C16.6253 14.031 16.1776 13.5833 15.6253 13.5833V14.5833V15.5833ZM17.7087 8.33333V7.33333H16.667L16.667 8.33333V9.33333H17.7087V8.33333ZM12.5003 12.5H11.5003V22.3958H12.5003H13.5003V12.5H12.5003ZM16.667 8.33333V7.33333C15.7132 7.33333 14.8972 7.3312 14.2478 7.41852C13.5696 7.5097 12.9253 7.71455 12.4034 8.23642L13.1105 8.94352L13.8176 9.65063C13.906 9.5623 14.0578 9.46205 14.5143 9.40069C14.9995 9.33545 15.6566 9.33333 16.667 9.33333V8.33333ZM12.5003 12.5H13.5003C13.5003 11.4896 13.5024 10.8325 13.5677 10.3473C13.629 9.89083 13.7293 9.73896 13.8176 9.65063L13.1105 8.94352L12.4034 8.23642C11.8815 8.75828 11.6767 9.40256 11.5855 10.0808C11.4982 10.7302 11.5003 11.5462 11.5003 12.5H12.5003ZM10.417 14.5833V15.5833H15.6253V14.5833V13.5833H10.417V14.5833Z" fill="#141B34" /></svg>
                        </a>

                        <a href="https://www.instagram.com/akhila.chirantha/?next=%2Fakhila.chirantha%2F" className='social-icon' aria-label="Instagram">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.60449 12.5C2.60449 7.83506 2.60449 5.50259 4.0537 4.05338C5.50291 2.60417 7.83539 2.60417 12.5003 2.60417C17.1653 2.60417 19.4977 2.60417 20.9469 4.05338C22.3962 5.50259 22.3962 7.83506 22.3962 12.5C22.3962 17.1649 22.3962 19.4974 20.9469 20.9466C19.4977 22.3958 17.1653 22.3958 12.5003 22.3958C7.83539 22.3958 5.50291 22.3958 4.0537 20.9466C2.60449 19.4974 2.60449 17.1649 2.60449 12.5Z" stroke="#141B34" stroke-width="2" stroke-linejoin="round" /><path d="M17.1875 12.5C17.1875 15.0888 15.0888 17.1875 12.5 17.1875C9.91117 17.1875 7.8125 15.0888 7.8125 12.5C7.8125 9.91117 9.91117 7.8125 12.5 7.8125C15.0888 7.8125 17.1875 9.91117 17.1875 12.5Z" stroke="#141B34" stroke-width="2" /><path d="M18.2373 6.77083L18.2283 6.77083" stroke="#141B34" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        </a>

                        <a href="https://wa.me/94763765412?text=Hello%20I%20visited%20your%20portfolio" target='_blank' rel='noopener noreferrer' className='social-icon' aria-label="WhatsApp">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4997 22.9167C18.2526 22.9167 22.9163 18.253 22.9163 12.5C22.9163 6.74704 18.2526 2.08334 12.4997 2.08334C6.74671 2.08334 2.08301 6.74704 2.08301 12.5C2.08301 13.9363 2.37371 15.3047 2.89949 16.5496C3.19007 17.2377 3.33536 17.5817 3.35335 17.8416C3.37134 18.1016 3.29482 18.3876 3.14177 18.9596L2.08301 22.9167L6.04006 21.8579C6.61205 21.7049 6.89805 21.6283 7.15803 21.6463C7.41801 21.6643 7.76202 21.8096 8.45004 22.1002C9.69493 22.626 11.0634 22.9167 12.4997 22.9167Z" stroke="#141B34" stroke-width="2" stroke-linejoin="round" /><path d="M8.94534 12.8931L9.85257 11.7663C10.2349 11.2914 10.7076 10.8493 10.7446 10.2169C10.754 10.0572 10.6416 9.34017 10.4168 7.90611C10.3285 7.34252 9.80233 7.29167 9.34656 7.29167C8.75262 7.29167 8.45566 7.29167 8.16076 7.42637C7.78804 7.59662 7.40538 8.07532 7.3214 8.47639C7.25496 8.79371 7.30434 9.01237 7.40308 9.44968C7.8225 11.3071 8.80644 13.1415 10.3321 14.6672C11.8578 16.1929 13.6922 17.1768 15.5497 17.5963C15.987 17.695 16.2056 17.7444 16.523 17.6779C16.924 17.594 17.4027 17.2113 17.573 16.8386C17.7077 16.5437 17.7077 16.2467 17.7077 15.6528C17.7077 15.197 17.6568 14.6708 17.0932 14.5825C15.6592 14.3578 14.9421 14.2454 14.7824 14.2547C14.1501 14.2917 13.7079 14.7644 13.2331 15.1468L12.1063 16.054" stroke="#141B34" stroke-width="2" /></svg>
                        </a>

                        <a href="https://github.com/AkhilaChirantha" className='social-icon' aria-label="GitHub">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4163 21.4245C6.84491 22.63 3.86872 21.4245 2.08301 17.7083" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M10.4163 22.9167V19.5394C10.4163 18.9163 10.6079 18.3746 10.9168 17.8853C11.1286 17.5496 10.9835 17.0733 10.6008 16.9681C7.43086 16.0967 5.20801 14.6955 5.20801 10.048C5.20801 8.83969 5.6039 7.7037 6.29979 6.71499C6.47297 6.46894 6.55956 6.34591 6.58038 6.23448C6.6012 6.12304 6.565 5.97762 6.49262 5.68678C6.19799 4.50303 6.21709 3.24602 6.65928 2.11273C6.65928 2.11273 7.57303 1.81502 9.65278 3.11426C10.1276 3.4109 10.365 3.55922 10.5741 3.5924C10.7832 3.62558 11.0628 3.55608 11.6219 3.41709C12.3865 3.22703 13.1742 3.12499 14.0622 3.12499C14.9501 3.12499 15.7379 3.22703 16.5024 3.41709C17.0616 3.55608 17.3411 3.62558 17.5502 3.5924C17.7593 3.55922 17.9967 3.4109 18.4716 3.11426C20.5513 1.81502 21.4651 2.11273 21.4651 2.11273C21.9073 3.24602 21.9264 4.50303 21.6317 5.68678C21.5593 5.97762 21.5232 6.12304 21.544 6.23448C21.5648 6.34591 21.6514 6.46894 21.8246 6.71499C22.5205 7.7037 22.9163 8.83969 22.9163 10.048C22.9163 14.6955 20.6935 16.0967 17.5235 16.9681C17.1408 17.0733 16.9957 17.5496 17.2076 17.8853C17.5164 18.3746 17.708 18.9163 17.708 19.5394V22.9167" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        </a>

                    </div>
                </motion.section>

                <motion.section
                    id='about'
                    className='about-me-container'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={aboutMeBackground} alt="" className='about-me-back-image' />

                    <div className='about-me-left'>
                        <h2 className='about-me-title'>About Me</h2>
                        <p className='about-me-text'>I am a Full Stack Developer & SEO Specialist who builds modern, scalable web applications using React, Node.js, and smart API integrations. I also design clean UI/UX experiences and create AI-powered solutions to help businesses grow online.</p>

                        <div className='about-me-grid'>

                            <div className='grid-item'>
                                <div className='grid-item-top'>
                                    <div className='grid-item-number'>2+</div>
                                    <img src="https://img.icons8.com/?size=100&id=120524&format=png&color=000000" alt="" className='grid-item-icon' />
                                </div>
                                <div className='grid-item-text'>Years of Experience</div>
                            </div>

                            <div className='grid-item'>
                                <div className='grid-item-top'>
                                    <div className='grid-item-number'>10+</div>
                                    <img src="https://img.icons8.com/?size=100&id=104233&format=png&color=000000" alt="" className='grid-item-icon§' />
                                </div>
                                <div className='grid-item-text§'>Completed Projects</div>
                            </div>

                            <div className='grid-item'>
                                <div className='grid-item-top'>
                                    <div className='grid-item-number'>70+</div>
                                    <img src="https://img.icons8.com/?size=100&id=112789&format=png&color=000000" alt="" className='grid-item-icon' />
                                </div>
                                <div className='grid-item-text'>Happy Customers</div>
                            </div>

                        </div>
                    </div>

                    <div className='about-me-right'>
                        <img src={aboutMeImage} alt="" />
                    </div>

                </motion.section>

                <motion.section
                    className='all-about-me-container'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={BG} alt="" className='bg-image§' />

                    <div className='all-about-me-content-left'>
                        <div className='all-about-me-headline'>All About Me</div>
                        <ul className='all-about-me-list'>
                            <li className='all-about-me-list-item'>I am a passionate Full Stack Developer & SEO Specialist with a strong interest in building modern, user-friendly, and high-performance web applications. I enjoy turning ideas into real digital products using technologies like React, Node.js, and modern web tools.</li>
                            <li className='all-about-me-list-item'>I focus on creating clean interfaces, responsive layouts, and scalable systems that provide a better user experience. Along with development, I work on UI/UX improvements, SEO optimization, and AI-based solutions to build complete and effective digital platforms.</li>
                            <li className='all-about-me-list-item'>I have developed several projects including web applications, AI-powered tools, and business-oriented systems. I am always learning new technologies and continuously improving my skills to deliver better solutions and real value through my work.</li>
                        </ul>

                        <a href={CV} download="Akhila_Chirantha_CV.pdf" className='all-about-me-button'>Download CV <span className='btn-chevron'>▾</span></a>

                    </div>

                    <div className='all-about-me-content-right'>
                        <div className='diamond-frame'>

                            <div className='diamond-image'>
                                <img src={allAboutMeBackground} alt="Akhila Chirantha" />
                            </div>
                        </div>
                    </div>


                </motion.section>

                <section className='profile-with-us'>
                    <div className='profile-with-us-headline'>Profile With Us</div>
                    <div className='profile-with-us-text'>I am a Full Stack Developer & SEO Specialist focused on creating modern web applications with clean UI, strong performance, and scalable architecture. I also work on SEO optimization and AI-based solutions to build complete digital experiences.</div>
                </section>

                <motion.section
                    className='skill-section-container'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className='skill-grid'>

                        <div className='skill-grid-item'>
                            <div className='skill-grid-item-top'>
                                <div className='skill-icon'><img src="https://img.icons8.com/?size=100&id=5387&format=png&color=1E5DC0" alt="" /></div>
                                <div>Professional <br />Experience</div>
                            </div>

                            <div className='skill-grid-item-description'>Web application development, UI/UX improvement, SEO optimization, and AI-based solutions.</div>
                        </div>

                        <div className='skill-grid-item'>
                            <div className='skill-grid-item-top'>
                                <div className='skill-icon'><img src="https://img.icons8.com/?size=100&id=52234&format=png&color=1E5DC0" alt="" /></div>
                                <div>Technical <br />Skills</div>
                            </div>

                            <div className='skill-grid-item-description'>React, Node.js, MongoDB, SEO, UI/UX Design, API Integration, AI Agent Creations.</div>
                        </div>

                        <div className='skill-grid-item'>
                            <div className='skill-grid-item-top'>
                                <div className='skill-icon'><img src="https://img.icons8.com/?size=100&id=Gx8oQrRqyFKf&format=png&color=1E5DC0" alt="" /></div>
                                <div>Core <br />Values</div>
                            </div>

                            <div className='skill-grid-item-description'>Quality work, clear communication, continuous learning, commitment to results.</div>
                        </div>

                    </div>

                    <a href={CV} download="Akhila_Chirantha_CV.pdf" className='all-about-me-button'>Download CV <span className='btn-chevron'>▾</span></a>
                </motion.section>

                <motion.section
                    id='projects'
                    className='my-project-section-container'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={BG} alt="" className='my-project-bg-image' />

                    <div className='my-project-left-section'>
                        <div className='my-project-title'>My Projects</div>
                        <div className='my-project-description'>A collection of projects that demonstrate my skills in full stack development, UI/UX design, and AI-powered solutions. Each project is built with a focus on performance, usability, and real-world impact.</div>
                    </div>

                    <div className='my-project-right-section'>
                        <img src={Projects} alt="" />

                    </div>
                </motion.section>

                <section className='recent-project-grid'>
                    <div className='recent-project-title'>Recent Projects</div>

                    <div className='recent-project-grid-container'>

                        <div className='recent-project-grid-item'>
                            <div className='project-image-container'>
                                <img src={Ecommerce} alt="" className='project-image' />
                                <img src={aboutMeBackground} alt="" className='project-bg-image' />
                            </div>
                            <div className='project-name'>E-Commerce Website</div>
                            <div className='project-description'>A responsive online shopping platform with product management and secure user features.</div>
                        </div>

                        <div className='recent-project-grid-item'>
                            <div className='project-image-container'>
                                <img src={GPA} alt="" className='project-image' />
                                <img src={aboutMeBackground} alt="" className='project-bg-image' />
                            </div>
                            <div className='project-name'>GPA Predictor</div>
                            <div className='project-description'>Built a GPA prediction system that analyzes student data and estimates future academic performance.</div>
                        </div>

                        <div className='recent-project-grid-item'>
                            <div className='project-image-container'>
                                <img src={SEO} alt="" className='project-image' />
                                <img src={aboutMeBackground} alt="" className='project-bg-image' />
                            </div>
                            <div className='project-name'>SEO </div>
                            <div className='project-description'>Highly improved website visibility and performance through SEO optimisation techniques.</div>
                        </div>


                        <div className='recent-project-grid-item'>
                            <div className='project-image-container'>
                                <img src={AI} alt="" className='project-image' />
                                <img src={aboutMeBackground} alt="" className='project-bg-image' />
                            </div>
                            <div className='project-name'>AI Agent</div>
                            <div className='project-description'>Developed AI-powered agents to automate tasks and provide intelligent support for users.</div>
                        </div>


                        <div className='recent-project-grid-item'>
                            <div className='project-image-container'>
                                <img src={UI} alt="" className='project-image' />
                                <img src={aboutMeBackground} alt="" className='project-bg-image' />
                            </div>
                            <div className='project-name'>UI/UX Designer</div>
                            <div className='project-description'>Designed modern, clean, and user-friendly interfaces with a strong focus on usability and simplicity.</div>
                        </div>


                    </div>
                </section>

                <motion.section
                    id='contact'
                    className='contact-section-container'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={BG} alt="" className='contact-bg-image' />

                    <div className='contact-left-section'>
                        <div className='contact-title'>Contact</div>
                        <div className='contact-description'>Let’s work together to build something amazing. If you have a project, idea, or any questions, feel free to contact me anytime. I will get back to you as soon as possible. I will provide you with the best possible solution.</div>
                    </div>

                    <div className='contact-right-section'>
                        <img src={Contact} alt="" className='contact-image' />
                    </div>
                </motion.section>

                <motion.section
                    className='contact-container-all'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >

                    <div className='contact-container-left'>
                        <form className='contact-form' ref={form} onSubmit={sendEmail}>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required></textarea>

                            <button type="submit" disabled={isSending}>
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>


                    <div className='contact-container-right'>

                        <div className='common-contact-info'>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 9C5.5 5.70017 5.5 4.05025 6.4519 3.02513C7.40381 2 8.93587 2 12 2C15.0641 2 16.5962 2 17.5481 3.02513C18.5 4.05025 18.5 5.70017 18.5 9V15C18.5 18.2998 18.5 19.9497 17.5481 20.9749C16.5962 22 15.0641 22 12 22C8.93587 22 7.40381 22 6.4519 20.9749C5.5 19.9497 5.5 18.2998 5.5 15V9Z" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M12 19H12.009" stroke="#8E8E8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 5H13" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 8.5C22 8.5 21 8.846 21 9.8125C21 10.779 22 11.0335 22 12C22 12.9665 21 13.221 21 14.1875C21 15.154 22 15.5 22 15.5" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 8.5C2 8.5 3 8.846 3 9.8125C3 10.779 2 11.0335 2 12C2 12.9665 3 13.221 3 14.1875C3 15.154 2 15.5 2 15.5" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <a href="tel:+94763765412">076 376 5412</a> / <a href="tel:+94702314232">070 231 4232</a>
                            </div>
                        </div>

                        <div className='common-contact-info'>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.00035 7L3.78154 7.81253C2.90783 8.39501 2.47097 8.68625 2.23422 9.13041C1.99747 9.57457 1.99923 10.0966 2.00273 11.1406C2.00696 12.3975 2.01864 13.6782 2.05099 14.9741C2.12773 18.0487 2.16611 19.586 3.29651 20.7164C4.42691 21.8469 5.98497 21.8858 9.10108 21.9637C11.0397 22.0121 12.9611 22.0121 14.8996 21.9637C18.0158 21.8858 19.5738 21.8469 20.7042 20.7164C21.8346 19.586 21.873 18.0487 21.9497 14.9741C21.9821 13.6782 21.9937 12.3975 21.998 11.1406C22.0015 10.0966 22.0032 9.57456 21.7665 9.13041C21.5297 8.68625 21.0929 8.39501 20.2191 7.81253L19.0003 7" stroke="#8E8E8E" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M2 10L8.91302 14.1478C10.417 15.0502 11.169 15.5014 12 15.5014C12.831 15.5014 13.583 15.0502 15.087 14.1478L22 10" stroke="#8E8E8E" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M5 12V6C5 4.11438 5 3.17157 5.58579 2.58579C6.17157 2 7.11438 2 9 2H15C16.8856 2 17.8284 2 18.4142 2.58579C19 3.17157 19 4.11438 19 6V12" stroke="#8E8E8E" stroke-width="1.5" />
                                    <path d="M10 10H14M10 6H14" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <a href="mailto:akhilachirantha.dev@gmail.com">akhilachirantha.dev@gmail.com</a>
                            </div>
                        </div>



                        <div className='common-contact-info'>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 18C19.2447 18.4244 20 18.9819 20 19.5925C20 20.9221 16.4183 22 12 22C7.58172 22 4 20.9221 4 19.5925C4 18.9819 4.75527 18.4244 6 18" stroke="#8E8E8E" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M15 9.5C15 11.1569 13.6569 12.5 12 12.5C10.3431 12.5 9 11.1569 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5Z" stroke="#8E8E8E" stroke-width="1.5" />
                                    <path d="M12 2C16.0588 2 19.5 5.42803 19.5 9.5869C19.5 13.812 16.0028 16.777 12.7725 18.7932C12.5371 18.9287 12.2709 19 12 19C11.7291 19 11.4629 18.9287 11.2275 18.7932C8.00325 16.7573 4.5 13.8266 4.5 9.5869C4.5 5.42803 7.9412 2 12 2Z" stroke="#8E8E8E" stroke-width="1.5" />
                                </svg>
                                <a href="https://maps.google.com/?q=Ambalangoda, Sri Lanka" target="_blank" rel="noopener noreferrer">Ambalangoda, Sri Lanka</a>
                            </div>
                        </div>


                        <div className='location-google-map'>
                            <iframe
                                src="https://www.google.com/maps?q=Ambalangoda&output=embed"
                                width="100%"
                                height="100%"
                                style={{ borderRadius: "10px", border: "0" }}
                                loading="lazy"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                </motion.section>

                <section className='social-icon-section'>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=fmFqQmR0UdsR&format=png&color=1E5DC0" alt="LinkedIn" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100084306980023" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=118489&format=png&color=1E5DC0" alt="Facebook" /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=59813&format=png&color=1E5DC0" alt="Instagram" /></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=60014&format=png&color=1E5DC0" alt="Twitter" /></a>
                    <a href="/https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=Qfh1PDlzLB72&format=png&color=1E5DC0" alt="YouTube" /></a>
                    <a href="https://www.fiverr.com/users/chirantha_dev/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=14h574ySQ7kG&format=png&color=1E5DC0" alt="WhatsApp" /></a>
                    <a href="https://www.youtube.com/@AkhilaChirantha/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=62852&format=png&color=1E5DC0" alt="GitHub" /></a>
                    <a href="https://beacons.ai/akhilachirantha" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=102965&format=png&color=1E5DC0" alt="StackOverflow" /></a>
                    <a href="https://www.tiktok.com/@anju59608?lang=en" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=118638&format=png&color=1E5DC0" alt="Discord" /></a>
                </section>

                <footer className="footer-copyright">
                    @2026 Akhila Chirantha. All Rights Recieved
                </footer>

                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            className="modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleModal}
                        >
                            <motion.div
                                className="modal-content"
                                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="modal-close" onClick={toggleModal}>&times;</button>
                                <h3>Hire Me</h3>
                                <p>Feel free to reach out to me directly:</p>
                                <div className="modal-contact-info">
                                    <div className="contact-item">
                                        <strong>Mobile:</strong> <a href="tel:0763765412">076 376 5412</a>
                                    </div>
                                    <div className="contact-item">
                                        <strong>Email:</strong> <a href="mailto:akhila.chirantha.dev@gmail.com">akhila.chirantha.dev@gmail.com</a>
                                    </div>
                                </div>
                                <button className="modal-action-btn" onClick={toggleModal}>Close</button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

        </>
    )
}
