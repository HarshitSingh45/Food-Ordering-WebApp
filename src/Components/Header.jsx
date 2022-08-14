import React, {useState} from 'react'
import {MdShoppingCart, MdAdd, MdLogout} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import {motion} from 'framer-motion'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebase.config';
import { useStateValue } from '../Context/StateProvider'
import { actionType } from '../Context/reducer'

function Header() {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{user, cartShow, cartItems}, dispatch] = useStateValue()

    const [isMenu, setIsMenu] = useState(false)
const login = async() => {
    
    if(!user){
        const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
        })
        localStorage.setItem('user', JSON.stringify(providerData[0]));
    }else{
        setIsMenu(!isMenu)
    }
    
}

const logOut = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
        type: actionType.SET_USER,
        user: null
    })
}

const showCart = () => {
    dispatch({
        type: actionType.SET_CART_SHOW,
        cartShow: !cartShow
    })
}

  return (
    <div className='w-screen fixed z-50 p-3 px-4 md:p-6 md:px-16 bg-gray-100'>
        {/* desktop and tablet */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={'/'} className='flex items-center gap-2'>
                <img src={Logo} className="object-cover w-8" alt="logo" />
                <p className='text-headingColor text-xl font-bold'>El-Piso</p>
            </Link>
            <div className='flex items-center gap-8'>
                <motion.ul initial={{opacity:0, x:200}} 
                  animate={{opacity:1, x:0}}
                  exit={{opacity:0, x:200}} 
                  className='flex items-center wl-auto gap-8'
                  >
                    <li  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                    <li  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                </motion.ul>
                <div className='flex items-center justify-center relative' onClick={showCart}>
                    <MdShoppingCart className='text-textColor text-2xl cursor-pointer' />
                    {cartItems && cartItems.length > 0 && (
                        <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">
                            {cartItems.length}
                            </p>
                        </div>
                    )}
                </div>
                <div className='relative'>
                <motion.img 
                   whileTap={{scale:0.6}} 
                   src={ user ? user.photoURL : Avatar} 
                   alt="profilePic" 
                   className='rounded-full w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl cursor-pointer' 
                   onClick={login}
                />
                {
                    isMenu && (
                        <motion.div 
                          initial={{opacity:0, scale: 0.6}}
                          animate={{opacity:1, scale: 1}}
                          exit={{opacity:0, scale: 0.6}}
                          className='flex flex-col w-40 bg-gray-100 shadow-xl rounded-lg absolute top-10 right-0 '>
                            {
                                user && user.email === 'harshitsingh45@gmail.com' && (
                                    <Link to={'/createitem'}>
                                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base' onClick={() => setIsMenu(false)}>New Item <MdAdd /></p>
                                    </Link> 
                                )
                            }
                            <p onClick={logOut} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Logout <MdLogout/></p>
                        </motion.div>
                    )
                }
                </div>
            </div>
            
        </div>
        {/* mobile */}
        <div className='flex items-center justify-between md:hidden w-full h-full' onClick={showCart}>

            <div className=' relative flex items-center justify-center '>
                <MdShoppingCart className='text-textColor text-2xl cursor-pointer' />
                {cartItems && cartItems.length > 0 && (
                    <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className="text-xs text-white font-semibold">
                        {cartItems.length}
                        </p>
                    </div>
                )}
            </div>
            
            <Link to={'/'} className='flex items-center gap-2'>
                <img src={Logo} className="object-cover w-8" alt="logo" />
                <p className='text-headingColor text-xl font-bold'>El-Piso</p>
            </Link>

            
            <div className='relative'>
                <motion.img 
                   whileTap={{scale:0.6}} 
                   src={ user ? user.photoURL : Avatar} 
                   alt="profilePic" 
                   className='rounded-full w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl cursor-pointer' 
                   onClick={login}
                />
                {
                    isMenu && (
                        <motion.div 
                          initial={{opacity:0, scale: 0.6}}
                          animate={{opacity:1, scale: 1}}
                          exit={{opacity:0, scale: 0.6}}
                          className='flex flex-col w-40 bg-gray-100 shadow-xl rounded-lg absolute top-10 right-0 '>
                            {
                                user && user.email === 'harshitsingh45@gmail.com' && (
                                    <Link to={'/createitem'}>
                                        <p className='px-4 py-2 flex items-center cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base' onClick={() => setIsMenu(false)}>New Item <MdAdd /></p>
                                    </Link> 
                                )
                            }
                            <ul className='flex flex-col wl-auto '>
                                <li  className='text-base hover:bg-slate-200 px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer' onClick={() => setIsMenu(false)}>Home</li>
                                <li  className='text-base hover:bg-slate-200 px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer' onClick={() => setIsMenu(false)}>Menu</li>
                                <li  className='text-base hover:bg-slate-200 px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer' onClick={() => setIsMenu(false)}>About Us</li>
                                <li  className='text-base hover:bg-slate-200 px-4 py-2 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer' onClick={() => setIsMenu(false)}>Service</li>
                            </ul>
                            <p className='m-2 p-2 shadow-md rounded-md flex items-center justify-center bg-gray-100 cursor-pointer hover:bg-slate-300 transition-all ease-in-out duration-100 text-textColor text-base' onClick={logOut}>Logout &nbsp; <MdLogout/></p>
                        </motion.div>
                    )
                }
                </div>
        </div>
    </div>
  )
}

export default Header