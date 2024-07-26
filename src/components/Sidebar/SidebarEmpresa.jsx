import React, { useState, useEffect } from "react";
import useLoginForm from "../../hooks/useLoginForm";
import { useUserContext } from "../../context/UserProvider";
import { NavLink, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Sidebar.css';


/*  IMAGES & LOGOS  */
import TalentplaceLogo from '../../assets/assets-png/2.png';
import { LuTable2 } from "react-icons/lu";
import { AiOutlineProject } from "react-icons/ai";
import { PiMoneyWavy } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { MdOutlineUpload } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";

const SidebarEmpresa = () => {
    

    const { user } = useUserContext();
    const recoverUser = JSON.parse(user);
    const location = useLocation(); // Obtiene la ubicación actual
    const { closeSession } = useLoginForm();

    const [show, setShow] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    return (

        <Container fluid className="dashboard-container d-flex">

            <div className="sidebar-container w-100 d-flex justify-content-center align-items-around">

                <div className="sidebar-button">
                    {isMobile && (
                        <CiMenuBurger size={30} variant="primary" onClick={handleShow} className="d-lg-none my-3" />
                    )}
                </div>

                <Offcanvas show={show} onHide={handleClose} responsive="lg" className="offcanvas-large offcanvas-small d-flex flex-column p-3 justify-content-around align-items-center">

                    <div className="sidebar-top d-flex flex-column align-items-center">
                        <NavLink
                        to="/"
                        end
                        >
                            <img className="sidebar-top-logo" src={TalentplaceLogo} alt="Logo"></img>
                        </NavLink>
                        <h5 className="sidebar-top-username">{recoverUser.nombre}</h5>
                        <p className="sidebar-top-usermail color">{recoverUser.email}</p>
                    </div>


                    <div className="sidebar-menu d-flex flex-column justify-content-around">

                        {/* <div className="sidebar-menu-row d-flex justify-content-start">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link d-flex w-100 ${isActive ? "active" : ""}`
                                }
                                to="/dashboard/empresa"
                                end
                            >
                                <div className="sidebar-menu-icon">
                                    <LuTable2 size={30} />
                                </div>
                                <h4>Dashboard</h4>
                            </NavLink>
                        </div> */}

                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link d-flex w-100 ${isActive ? "active" : ""}`
                                }
                                to="/home"
                                end
                            >
                                <div className="sidebar-menu-icon">
                                    <IoHomeOutline size={30} />
                                </div>
                                <h4>Home</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link d-flex w-100 ${isActive ? "active" : ""}`
                                }
                                to="/dashboard/projects"
                                end
                            >
                                <div className="sidebar-menu-icon">
                                    <AiOutlineProject size={30} />
                                </div>
                                <h4>Proyectos</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link d-flex w-100 ${isActive ? "active" : ""}`
                                }
                                to="/dashboard/talents"
                                end
                            >
                                <div className="sidebar-menu-icon">
                                    <GoPeople size={30} />
                                </div>
                                <h4>Personas</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link d-flex w-100 ${isActive ? "active" : ""}`
                                }
                                to="/dashboard/projects/new"
                                end
                            >
                                <div className="sidebar-menu-icon">
                                    <MdOutlineUpload size={30} />
                                </div>
                                <h4>Publicar proyectos</h4>
                            </NavLink>
                        </div>

                    </div>


                    <div className="sidebar-options d-flex flex-column justify-content-around">
                        <div className="sidebar-options-row d-flex justify-content-start">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link d-flex w-100 ${isActive ? "active" : ""}`
                                }
                                to="/dashboard/chat"
                                end
                            >
                                <div className="sidebar-options-icon">
                                    <BsChatDots size={30} />
                                </div>
                                <h4>Chat</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-options-row d-flex justify-content-start">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link d-flex w-100 ${isActive ? "active" : ""}`
                                }

                                to="/dashboard/editprofile"
                                end
                             >
                                <div className="sidebar-options-icon">
                                    <GoPerson size={30} />
                                </div>
                                <h4>Perfil</h4>
                            </NavLink>

                        </div>

                        <div className="sidebar-options-row d-flex justify-content-start">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link d-flex w-100 ${isActive ? "hover-logout" : ""}`
                                }
                                onClick={() => closeSession() }                            
                            >
                                <div className="sidebar-options-icon">
                                    <RiLogoutCircleRLine size={30} />
                                </div>
                                <h4>Salir</h4>
                            </NavLink>
                        </div>

                    </div>

                </Offcanvas>

            </div>

        </Container>

    );
};

export default SidebarEmpresa;