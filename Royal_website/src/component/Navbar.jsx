import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    // Check active link - products page or any product subpage
    const isActive = (path) => {
        if (path === '/products') {
            // For products, check if current path starts with /products
            return location.pathname.startsWith('/products') || location.pathname.startsWith('/product/');
        }
        return location.pathname === path;
    };

    return (
        <>
            <style>{`
                .navbar {
                    background: #f5f5f5;
                    padding: 15px 0;
                    position: sticky;
                    top: 36px;  /* Header ke neeche sticky */
                    z-index: 999;
                    width: 100%;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
                }

                .logo h2 {
                    color: #0d5c3d;
                    font-weight: 700;
                    transition: color 0.3s;
                }

                .logo:hover h2 {
                    color: #d4a531;
                }

                .logo p {
                    font-size: 12px;
                    color: #d4a531;
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
                    font-weight: 500;
                    cursor: pointer;
                    font-size: 16px;
                    padding: 8px 0;
                    transition: 0.3s;
                    text-decoration: none;
                    color: #333;
                    position: relative;
                }

                .menu li a::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #d4a531;
                    transition: width 0.3s;
                }

                .menu li a:hover {
                    color: #d4a531;
                }

                .menu li a:hover::after {
                    width: 100%;
                }

                /* Active link style */
                .menu li a.active {
                    color: #d4a531;
                    font-weight: 600;
                }

                .menu li a.active::after {
                    width: 100%;
                }

                .inquiry-btn {
                    background: #d4a531;
                    border: none;
                    padding: 10px 24px;
                    border-radius: 8px;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                    font-size: 14px;
                }

                .inquiry-btn:hover {
                    background: #b88c2a;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(212, 165, 49, 0.3);
                }

                @media (max-width: 768px) {
                    .navbar {
                        top: 50px;  /* Mobile mein header chhota */
                    }

                    .nav-content {
                        flex-direction: column;
                        gap: 15px;
                    }

                    .right-menu {
                        flex-direction: column;
                        gap: 15px;
                        width: 100%;
                    }

                    .menu {
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 15px;
                    }

                    .menu li a {
                        padding: 5px 10px;
                    }

                    .inquiry-btn {
                        width: 100%;
                        max-width: 200px;
                    }
                }

                @media (max-width: 480px) {
                    .menu {
                        gap: 10px;
                    }

                    .menu li a {
                        font-size: 14px;
                    }
                }
            `}</style>

            <nav className="navbar">
                <div className="container nav-content">
                    <div className="logo" onClick={() => navigate('/')}>
                        <h2>Royal</h2>
                        <p>EXPORT QUALITY</p>
                    </div>

                    <div className="right-menu">
                        <ul className="menu">
                            <li>
                                <Link 
                                    to="/" 
                                    className={isActive('/') ? 'active' : ''}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/product/:category" 
                                    className={isActive('/products') ? 'active' : ''}
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/about" 
                                    className={isActive('/about') ? 'active' : ''}
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>

                        <button 
                            className="inquiry-btn"
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