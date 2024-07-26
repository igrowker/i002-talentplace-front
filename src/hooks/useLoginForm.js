import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchLoginForm } from '../api/fetchLoginForm';
import { useUserContext } from '../context/UserProvider';
import Swal from "sweetalert2";

const useLoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        contrasenia: ''
    });
    const [inputType, setInputType] = useState("password");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { token, setToken, setUser } = useUserContext();
    const [loading, setLoading] = useState(false);
    

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    //funcion para validacion de inputs
    const validate = () => {
        const newErrors = {};

        if (!loginData.email) {
            newErrors.email = "Email is required";
        } else if (!/.+@.+\.[A-Za-z]+$/.test(loginData.email)) {
            newErrors.email = "Email format is invalid";
        }

        if (!loginData.contrasenia) {
            newErrors.contrasenia = "Password is required";
        } else if (loginData.contrasenia.length < 8) {
            newErrors.contrasenia = "Password must be at least 8 characters";
        } else if (!/[A-Z]/.test(loginData.contrasenia)) {
            newErrors.contrasenia = 'Password must contain at least one uppercase letter';
        } else if (!/[0-9]/.test(loginData.contrasenia)) {
            newErrors.contrasenia = 'Password must contain at least one number';
        }

        return newErrors;
    };

    //Funcion para mostrar u ocultar la contraseña
    const togglePasswordVisible = () => {
        setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    const handleSubmit = async (e) => {
        
        // Verifica si el usuario ya esta logueado, lo hace sólo cuando vuelve a apretar en INGRESAR o en el input del login
        // Es decir, cuando se ejecuta handleSumbit
        if (token) {
            Swal.fire({
                icon: 'warning',
                title: 'Ya estás logueado',
                text: 'No es necesario iniciar sesión nuevamente.',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            navigate('/');
            return;
        }

        e.preventDefault();

        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            setIsSubmitting(true);
            setLoading(true)

            try {
                // En caso de éxito
                // Guarda el token y el usuario en el contexto y localStorage y dirige al home
                const data = await fetchLoginForm(loginData);

                setToken(data.refreshToken);
                setUser(JSON.stringify(data.user));
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('token', data.refreshToken);
                // navigate('/dashboard/projects')
                if (data.user.tipo === "junior") {
                    navigate('/dashboard/junior/applications');
                    
                } else {
                    navigate('/dashboard/projects');
                    
                }

                // Notificación de éxito al iniciar sesión
                Toast.fire({
                    icon: "success",
                    title: `Bienvenido ${data.user.nombre}`,
                });
                return data.user;

            } catch (error) {

                // En caso de error da la notificacion correspondiente
                console.log(error);
                if (error.message === "Request failed with status code 401") {
                    Toast.fire({
                        icon: "error",
                        title: `Usuario o contraseña inválida`,
                    });

                } else {
                    Toast.fire({
                        icon: "error",
                        title: `Error al intentar iniciar sesión`,
                    });

                }

            } finally {
                setIsSubmitting(false);
                setLoading(false)
            }
        }
    };

    // Funcion para cerrar la sesion
    const closeSession = () => {
        Swal.fire({
            title: `¿Seguro que quieres cerrar la sesión?`,
            icon: 'question',
            position: "center",
            confirmButtonText: "Seguro",
            confirmButtonColor: "#38b6ff",
            showCancelButton: true,
        })
        .then((result) => {
            if (result.isConfirmed) {
                Toast.fire({
                    icon: "success",
                    title: "Sesión cerrada"
                });
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setToken(null);
                setUser(null);
                navigate('/');
            }
        })
    }

    return {
        loginData,
        inputType,
        errors,
        isSubmitting,
        loading,
        handleChange,
        togglePasswordVisible,
        handleSubmit,
        closeSession,
    };
};

export default useLoginForm;
