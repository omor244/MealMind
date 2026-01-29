import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaInstagram, FaUtensils, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                   
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter text-white mb-6">
                            <div className="bg-primary p-2 rounded-lg">
                                <FaUtensils />
                            </div>
                            <span>MEAL<span className="text-primary">MIND</span></span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Our mission is to simplify your daily cooking and make it enjoyable through smart meal planning and personalized recipe recommendations.
                        </p>
                    </div>

                   
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/recipes" className="hover:text-primary transition-colors">Browse Recipes</Link></li>
                            <li><Link to="/meal-planner" className="hover:text-primary transition-colors">Meal Planner</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link  className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                  

               
                    <div>
                        <h4 className="text-white font-bold mb-6">Follow Us</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="https://www.facebook.com/sk.omer.1257" target='_blank' className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <FaFacebook size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/omor-dev" target='_blank' className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="https://github.com/omor244" target='_blank' className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <FaGithub size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
                    <p>© {new Date().getFullYear()} MealMind. All rights reserved. Submission Date: 29 Jan 2026.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;