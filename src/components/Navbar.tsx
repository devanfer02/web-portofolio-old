import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from "react-router-dom"

const navItems= [
  {
    name: 'Home',
    icon: 'mdi:home',
    path: '/'
  },
  {
    name: 'About',
    icon: 'mdi:account-box',
    path: '/about'
  },
  {
    name: 'Work',
    icon: 'mdi:work',
    path: '/works'
  },
  {
    name: 'Portfolio',
    icon: 'ph:code-fill',
    path: '/portfolio'
  },
  {
    name: 'Terminal',
    icon: 'ant-design:code-filled',
    path: '/terminal'
  },
]

export default function Navbar(): JSX.Element {
  const isMobileScrolled = () => {
    return window.scrollY > 0 && window.innerWidth < 1200
  }

  const [ isScrolled, setIsScrolled ] = useState(isMobileScrolled())
  const location = useLocation().pathname

  const decider = {
    getBgColor: () => {
      if (location === '/about' || location === '/portfolio') {
        if (isScrolled) return 'bg-my-navy/20'
        return 'bg-my-navy'
      }
      
      if (isScrolled) return 'bg-my-white/20'
      return 'bg-my-white'
    },
    getTextColor: () => {
      if (location === '/about' || location === '/portfolio') {
        if (isScrolled) return 'text-my-navy'
        return 'text-white'
      }

      if (isScrolled) return 'text-my-white'
      return 'text-my-navy'
    },
    getActive: (path: string) => {
      if (location === path) return 'text-my-orange'

      return decider.getTextColor()
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(isMobileScrolled())
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav 
      className='flex flex-col 
        items-center lg:justify-center gap-y-4
        fixed h-max mt-auto lg:right-[1.5%] z-40 top-0
        w-full lg:w-16 lg:max-w-md lg:h-screen
        '
    >
      <div 
        className={`flex w-full lg:flex-col items-center 
        justify-between lg:justify-center gap-y-10 px-10 md:px-40
        lg:px-0 h-[60px] ${decider.getBgColor()} 
        lg:h-max py-8 backdrop-blur-sm text-3xl
        lg:text-xl lg:rounded-full`}
      >
        { navItems.map((nav, index) => (
          <NavLink to={nav.path} key={index} className="group">
            <div className="absolute pr-14 right-0 hidden lg:group-hover:flex ">
              <div className={
                `${decider.getBgColor()} relative flex 
                items-center py-1 px-5 rounded-xl
                font-bold -mr-2`}
              >
                <div className={`text-[14px] ${decider.getTextColor()}`}>
                  {nav.name}
                </div>
              </div>
            </div>
            <div>
              <Icon 
                icon={nav.icon} 
                width={'30px'} 
                
                className={
                  `hover:text-my-orange ${decider.getActive(nav.path)} 
                  transition duration-300 ease-in-out
                  relative flex items-center`
                }
              />
            </div>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}