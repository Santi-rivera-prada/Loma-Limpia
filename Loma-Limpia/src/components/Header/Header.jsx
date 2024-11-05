import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import './header.scss'

const Header = () => {
  const { isAuth, logout } = useAuthContext()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }

  return (
    <nav className='navbar navbar-expand-lg navbar' style={{ backgroundColor: '#27812f' }}>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          <img
            src='https://i.pinimg.com/736x/bf/fe/42/bffe420797a4bc51b799ebc6970d7093.jpg'
            alt='LOGO'
            style={{ width: '100%', height: '200px', borderRadius: '100px', display: 'grid', justifyContent: 'start' }}
          />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded={isMenuOpen}
          aria-label='Toggle navigation'
          onClick={toggleMenu}
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarNav' style={{ justifyContent: 'end' }}>
          <ul className='navbar-nav ml-auto' style={{ display: 'flex', justifyContent: 'start', textAlign: 'center', gap: '25px', backgroundColor: 'aliceblue', borderRadius: '45px' }}>
            <li className='nav-item'>
              <NavLink
                className={`nav-link ${linkIsActive(isMenuOpen ? false : undefined)}`}
                to='/'
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={`nav-link ${linkIsActive(isMenuOpen ? false : undefined)}`}
                to='/dashboard'
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </NavLink>
            </li>
            {isAuth
              ? (
                <>
                  <li className='nav-item'>
                    <NavLink
                      className={`nav-link ${linkIsActive(isMenuOpen ? false : undefined)}`}
                      to='/secret'
                      onClick={() => setMenuOpen(false)}
                    >
                      Secret
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/' onClick={logout}>
                      Logout
                    </NavLink>
                  </li>
                </>
                )
              : (
                <>
                  <li className='nav-item'>
                    <NavLink
                      className={`nav-link ${linkIsActive(isMenuOpen ? false : undefined)}`}
                      to='/login'
                      onClick={() => setMenuOpen(false)}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      className={`nav-link ${linkIsActive(isMenuOpen ? false : undefined)}`}
                      to='/signup'
                      onClick={() => setMenuOpen(false)}
                    >
                      Signup
                    </NavLink>
                  </li>
                </>
                )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
