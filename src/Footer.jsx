import * as React from 'react';
import './Footer.css';
import Drawer from '@mui/material/Drawer';
import { Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const Footer = () => {
    const [drawerToggle, setDrawerToggle] = React.useState(false)
    const toggleDrawer = () => {
        setDrawerToggle((prev) => !prev);
    }
    return (
        <div>
            <footer>
                <div className="site-info">
                    <span className="footer-text">&#169; 2022 Airbnb, Inc</span>
                    <span className="dot">.</span>
                    <span className="footer-text">Privacy</span>
                    <span className="dot">.</span>
                    <span className="footer-text">Terms</span>
                    <span className="dot">.</span>
                    <span className="footer-text">Sitemap</span>
                    <span className="dot">.</span>
                    <span className="footer-text">Company details</span>
                    <span className="dot">.</span>
                    <span className="footer-text">Destinations</span>
                </div>
                <div className="support-info">
                    <span className="footer-text lang-btn"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "16px", width: "16px" }}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>English(IN)</span>
                    <span className="currency">₹ <span>INR</span></span>
                    <button className='support-btn' onClick={toggleDrawer}>Support & resources
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", fill: "none", height: "16px", width: "16px", stroke: "black", strokeWidth: 4, overflow: "visible" }}><g fill="none"><path d="m4 20 11.2928932-11.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l11.2928932 11.29289322"></path></g></svg>
                    </button>
                </div>
            </footer>
            <Drawer anchor='bottom' open={drawerToggle} onClose={toggleDrawer}>
                <div className='close-btn'>
                    <IconButton aria-label='close' onClick={toggleDrawer}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className='largeview-content'>

                    <div className='drawer-info'>
                        <div className='support-section'>
                            <h4 className='section-heading'>Support</h4>
                            <ul>
                                <li>Help Centre</li>
                                <li>AirCover</li>
                                <li>Safety information</li>
                                <li>Supporting people with disabilities</li>
                                <li>Cancellation options</li>
                                <li>Our COVID-19 Response</li>
                                <li>Report a neighbourhood  concern</li>
                            </ul>
                        </div>
                        <div className='Community-section'>
                            <h4 className='section-heading'>Community</h4>
                            <ul>
                                <li>Airbnb.org: disaster relief housing</li>
                                <li>Support Afghan refugees</li>
                                <li>Combating discrimination</li>
                            </ul>
                        </div>
                        <div className='hosting-section'>
                            <h4 className='section-heading'>Hosting</h4>
                            <ul>
                                <li>Try hosting</li>
                                <li>AirCover for Hosts</li>
                                <li>Explore hosting resources</li>
                                <li>Visit our community forum</li>
                                <li>How to host responsibly</li>
                            </ul>
                        </div>
                        <div className='airbnb-section'>
                            <h4 className='section-heading'>Airbnb</h4>
                            <ul>
                                <li>Newsroom</li>
                                <li>Learn about new features</li>
                                <li>Letter from our founders</li>
                                <li>Careers</li>
                                <li>Investers</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='smallview-content'>
                    <div className='drawer-info'>
                        <div className='support-section'>
                            <h4 className='section-heading'>Support</h4>
                            <ul>
                                <li>Help Centre</li>
                                <li>AirCover</li>
                                <li>Safety information</li>
                                <li>Supporting people with disabilities</li>
                                <li>Cancellation options</li>
                                <li>Our COVID-19 Response</li>
                                <li>Report a neighbourhood  concern</li>
                            </ul>
                        </div>
                        <Divider style={{ width: '100%' }} />
                        <div className='community-section'>
                            <h4 className='section-heading'>Community</h4>
                            <ul>
                                <li>Airbnb.org: disaster relief housing</li>
                                <li>Support Afghan refugees</li>
                                <li>Combating discrimination</li>
                            </ul>
                        </div>
                        <Divider style={{ width: '100%' }} />
                        <div className='hosting-section'>
                            <h4 className='section-heading'>Hosting</h4>
                            <ul>
                                <li>Try hosting</li>
                                <li>AirCover for Hosts</li>
                                <li>Explore hosting resources</li>
                                <li>Visit our community forum</li>
                                <li>How to host responsibly</li>
                            </ul>
                        </div>
                        <Divider style={{ width: '100%' }} />
                        <div className='airbnb-section'>
                            <h4 className='section-heading'>Airbnb</h4>
                            <ul>
                                <li>Newsroom</li>
                                <li>Learn about new features</li>
                                <li>Letter from our founders</li>
                                <li>Careers</li>
                                <li>Investers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Footer;