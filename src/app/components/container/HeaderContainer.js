/*
* DESCRIPTION
*
* Component responsible for the logic of the data passed
* in the visualization component 'Search'. The data is updated 
* before the call in the api for a performasse in the front end,
* soon after the update, in the last life cycle of the 
* React update, the call is made in the api, and in case of an
* error is informed to the user if no, the user did not notice
* a communication delay.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React, { Component } from 'react'

// Import languages
import * as translations from '../../translations'

import Header from '../presentation/Header'

class HeaderContainer extends Component {

    constructor() {
        super();
        this.state = {
            isOpenMenu: false,
        }
    }

    isOpenMenu = (isOpen) => {
        this.props.background(isOpen);
        this.setState({ isOpenMenu: isOpen })
    }

    render() {
        const { changeLanguage } = this.props;
        const { isOpenMenu } = this.state
        const { header } = translations[this.props.language];

        return (

            <Header
                isOpenMenu={isOpenMenu}
                actionOpenMenu={this.isOpenMenu}
                changeLanguage={changeLanguage}
                language={header}
            >   
            </Header>
        )
    }
}

export default HeaderContainer

const topicsMenuDrawer = [
    ['Android, Art, Artificial Intelligence, Astronomy, Austen'],
    ['Baseball, Basketball, Bhagat, Biography, Brief, Business'],
    ['Camus, Cervantes, Christie, Classics, Comics, Cook, Cricket, Cycling'],
    ['Desai, Design, Development, Digital Marketing, Drama, Drawing, Dumas'],
    ['Education, Everything, Fantasy, Film, Finance, First, Fitness, Football, Future'],
    ['Games, Gandhi, Homer, Horror, Hugo, Ibsen, iOS, Journey, Kafka, King'],
    ['Lahiri, Larsson, Learn, Literary Fiction, Make, Manage, Marquez, Money, Mystery'],
    ['Negotiate, Painting, Philosophy, Photography, Poetry, Production, Programming'],
    ['React, Redux, River, Robotics, Rowling, Satire, Science Fiction, Shakespeare, Singh, Swimming'],
    ['Tale, Thrun, Time, Tolstoy, Travel, Ultimate, Virtual Reality, Web Development'],
]
