/*
* DESCRIPTION
*
* this component is responsible for mounting the application header,
* so it contains all navigation styles and buttons.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import Arrow from 'material-ui/svg-icons/navigation/arrow-forward'
import Replay from 'material-ui/svg-icons/content/reply'
import IconButton from 'material-ui/IconButton'

// Import Components
import Icon from './Icon'
import { ICONS } from '../../media/icons/IconsSvg'
import LanguagesBtn from './LanguagesBtn'
import DrawerMenu from '../../components/presentation/DrawerMenu'
import Menu from 'material-ui/svg-icons/navigation/menu'
import Home from 'material-ui/svg-icons/action/home'
import User from 'material-ui/svg-icons/action/account-box'
import Footer from './Footer'

// Import Styles
import '../../styles/components/Header.css'
import '../../styles/components/Footer.css'

const Header = (props) => {
  const { language } = props
  const { actionOpenMenu, isOpenMenu } = props

  const headerMenuNavegate = (
    <React.Fragment>
      <div className='header-menuBtn-navegate'>

        <div className='header-menuBtn-navegate-search'>
          <div className='header-menuBtn-buttons'>
            <Link to='/'>
              <FlatButton label={language.home} labelPosition='after' primary icon={<Home />} />
            </Link>
          </div>
          <div className='header-menuBtn-buttons'>
            <Link to='/user-profile'>
              <FlatButton label={language.profile} labelPosition='after' primary icon={<User />} />
            </Link>
          </div>
          <div className='header-menuBtn-buttons'>
            <Link to='/search'>
              <FlatButton label={language.addBooks} labelPosition='after' primary icon={<Arrow />} />
            </Link>
          </div>
          <div className='header-menuBtn-buttons'>
            <Link to='/'>
              <FlatButton label={language.logout} onClick={(props.logout)} labelPosition='after' primary icon={<Replay />} />
            </Link>
          </div>
        </div>

        <LanguagesBtn changeLanguage={props.changeLanguage} button={language.buttonLanguage} />
      </div>
    </React.Fragment >

  )

  return (
    <div className='header'>

      <div className='header-menu-btn'>
        <DrawerMenu
          topicsMenuDrawer={headerMenuNavegate}
          openRigth={false}
          actionOpen={actionOpenMenu}
          isOpen={isOpenMenu}
          language={language.drawerMenu}
          icon={<Menu />}
          width={'80%'}
          styleButton={{ root: { background: '#0000008a', borderRadius: '25px' }, hover: '#000000' }}

        />
      </div>

      <Footer tooltipGit={language.tooltipGit} tooltipFacebook={language.tooltipFacebook} tooltipLinkedin={language.tooltipLinkedin} color={styles.color} />

      <div className='header-title'><h2> {language.title} </h2></div>

      <div className='header-navegate'>

        <div className='header-navegate-languages'><LanguagesBtn changeLanguage={props.changeLanguage} button={language.buttonLanguage} /></div>

        <div className='header-navegate-home-login '>
          <span className='b-hover IconButton'> <Link to='/'><IconButton tooltip={language.home}> <Icon icon={ICONS.HOME} color={styles.color} /> </IconButton></Link></span>
          <span className='b-hover IconButton'> <Link to='/user-profile'><IconButton tooltip={language.profile}><Icon icon={ICONS.USER} color={styles.color} /></IconButton></Link></span>
        </div>

        <div className='header-navegate-search'>
          <Link to='/search' className='add-books'>
            <FlatButton label={language.addBooks} labelPosition='before' primary icon={<Arrow />} />
          </Link>
        </div>

        <div className='header-navegate-logout'><FlatButton label={language.logout} onClick={(props.logout)} labelPosition='after' primary icon={<Replay />} /></div>
      </div>

    </div>
  )
}

export default Header

const styles = {
  translate: {
    minWidth: '0'
  },

  color: '#b21412'
}
