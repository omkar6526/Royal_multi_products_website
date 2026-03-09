// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check active link - products page or any product subpage
    const isActive = (path) => {
        if (path === '/products') {
            // For products, check if current path starts with /products or /product/
            return location.pathname.startsWith('/products') || location.pathname.startsWith('/product/');
        }
        return location.pathname === path;
    };

    return (
        <>
            <style>{`
                .navbar {
                    background: ${isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'white'};
                    padding: 2px 0;
                    position: sticky;
                    top: 30px;
                    z-index: 999;
                    width: 100%;
                    box-shadow: ${isScrolled ? '0 4px 30px rgba(42, 26, 74, 0.1)' : '0 2px 20px rgba(0,0,0,0.05)'};
                    transition: all 0.3s ease;
                    backdrop-filter: ${isScrolled ? 'blur(10px)' : 'none'};
                    border-bottom: 2px solid transparent;
                    border-image: linear-gradient(90deg, var(--royal-gold), transparent) 1;
                }

                .container {
                    width: 90%;
                    margin: auto;
                    max-width: 1200px;
                }

                .nav-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                }

                .logo h2 {
                    color: var(--royal-deep-purple);
                    font-weight: 800;
                    transition: color 0.3s;
                    font-size: 28px;
                    letter-spacing: 1px;
                    position: relative;
                }

                .logo h2::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
                    transition: left 0.5s;
                }

                .logo:hover h2::before {
                    left: 100%;
                }


                .logo p {
                    font-size: 12px;
                    color: bold;
                    letter-spacing: 2px;
                    font-weight: 500;
                }

                .right-menu {
                    display: flex;
                    align-items: center;
                    gap: 30px;
                }

                .menu {
                    list-style: none;
                    display: flex;
                    gap: 25px;
                }

                .menu li a {
                    background: transparent;
                    border: none;
                    font-weight: 600;
                    cursor: pointer;
                    font-size: 16px;
                    padding: 8px 0;
                    transition: 0.3s;
                    text-decoration: none;
                    color: var(--royal-charcoal);
                    position: relative;
                    font-family: var(--font-body);
                }

                .menu li a::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 3px;
                    background: linear-gradient(90deg, var(--royal-gold), var(--royal-burgundy));
                    transition: width 0.3s;
                    border-radius: 2px;
                }

                .menu li a:hover {
                    color: var(--royal-deep-purple);
                }

                .menu li a:hover::after {
                    width: 100%;
                }

                .menu li a.active {
                    color: var(--royal-deep-purple);
                    font-weight: 700;
                }

                .menu li a.active::after {
                    width: 100%;
                }

                .inquiry-btn {
                    background: linear-gradient(135deg, var(--royal-gold), var(--royal-burgundy));
                    border: none;
                    padding: 12px 28px;
                    border-radius: 50px;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
                }

                .inquiry-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s;
                }

                .inquiry-btn:hover::before {
                    left: 100%;
                }

                .inquiry-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.5);
                }

                .mobile-menu-icon {
                    display: none;
                    font-size: 24px;
                    color: var(--royal-deep-purple);
                    cursor: pointer;
                    transition: color 0.3s;
                }

                .mobile-menu-icon:hover {
                    color: var(--royal-gold);
                }

                @media (max-width: 768px) {
                    .navbar {
                        top: 50px;
                    }

                    .mobile-menu-icon {
                        display: block;
                    }

                    .right-menu {
                        position: fixed;
                        top: 110px;
                        left: ${isMobileMenuOpen ? '0' : '-100%'};
                        width: 100%;
                        height: calc(100vh - 110px);
                        background: white;
                        flex-direction: column;
                        padding: 40px 20px;
                        transition: left 0.3s ease;
                        z-index: 998;
                        overflow-y: auto;
                    }

                    .menu {
                        flex-direction: column;
                        align-items: center;
                        gap: 20px;
                    }

                    .menu li a {
                        font-size: 18px;
                    }

                    .inquiry-btn {
                        width: 200px;
                        margin: 20px auto;
                    }
                }
            `}</style>

            <nav className="navbar">
                <div className="container nav-content">
                    <div className="logo animate-fade-in-left" onClick={() => navigate('/')}>
                        <h2>Royal</h2>
                        <p>EXPORT QUALITY</p>
                    </div>

                    <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    <div className="right-menu">
                        <ul className="menu">
                            <li className="animate-fade-in-down delay-1">
                                <Link 
                                    to="/" 
                                    className={isActive('/') ? 'active' : ''}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="animate-fade-in-down delay-2">
                                <Link 
                                    to="/product/:category"  // Fixed: Changed from "/product/:category" to "/products"
                                    className={isActive('/products') ? 'active' : ''}
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="animate-fade-in-down delay-3">
                                <Link 
                                    to="/about" 
                                    className={isActive('/about') ? 'active' : ''}
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>

                        <button 
                            className="inquiry-btn animate-fade-in-down delay-4"
                            onClick={() => navigate('/contact')}
                        >
                            Get Inquiry
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;