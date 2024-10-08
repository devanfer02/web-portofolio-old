import { Link } from "react-router-dom"
import { Icon } from '@iconify/react'

const socials = [
  {
    icon: 'mdi:instagram',
    path: 'https://www.instagram.com/dvnnfrr/'
  },
  {
    icon: 'mdi:linkedin',
    path: 'https://www.linkedin.com/in/devanferrel/'
  },
  {
    icon: 'mdi:github',
    path: 'https://github.com/devanfer02'
  },
  {
    icon: 'mdi:email-outline',
    path: 'https://mail.google.com/mail/?view=cm&fs=1&to=ubdevanferrel04@student.ub.ac.id'
  }
]

export default function Footer() {
  return (
    <footer className="bg-my-navy z-50">
      <div className="flex flex-wrap w-full mx-auto max-w-screen-xl p-4">
        <span className="text-sm text-my-orange sm:text-center">
          © 2023 Devan Ferrel
        </span>
        <div className="flex flex-wrap ml-auto lg:mr-10">
          { socials.map((social, index) => (
            <Link  
              className=""
              to={social.path} 
              key={index}
            >
              <Icon 
                icon={social.icon}
                width={'26px'}
                height={'26px'}
                className="mx-2 text-my-white hover:text-my-orange"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
