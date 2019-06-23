/*
* DESCRIPTION
*
* this component is responsible for assembling the home page of the application,
* where it contains the user section books in the form of a shelf.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import './Home.css'

import { BookCase } from '../../components'

const Home = ({ books, moveBookCategorie, language, styleHide }) => {
  if (books === '') { return '' }

  const booksCurrentlyReading = []
  const booksWantToRead = []
  const booksRead = []

  books.forEach(element => {
    if (element.shelf === 'wantToRead') booksWantToRead.push(element)
    else if (element.shelf === 'currentlyReading') booksCurrentlyReading.push(element)
    else if (element.shelf === 'read') booksRead.push(element)
  })

  const shelves = [
    {
      title: language.titleCurrently,
      books: booksCurrentlyReading
    },
    {
      title: language.titleWant,
      books: booksWantToRead
    },
    {
      title: language.titleRead,
      books: booksRead
    }
  ]

  return (
    <section className='home' style={(styleHide) || {}}>

      { shelves.map(({ title, books }) => (
        <div>
          <h3 className='bookshelf-title'>{title}</h3>
          <BookCase
            classes='home-book-case'
            books={books}
            moveBookCategorie={moveBookCategorie}
            language={language.book}
            styles={styles.bookCase}
          />
        </div>
      ))
      }
    </section>
  )
}

export default Home

Home.propTypes = {

  moveBookCategorie: PropTypes.func.isRequired,
  books: PropTypes.array

}

const styles = {
  bookCase: {
    section: {
      textAlign: 'center',
      overflowX: 'auto',
      marginTop: '4%',
      margin: '5% 5% 0%',
      position: 'relative'
    }
  },
  bookCaseLast: {
    section: {
      textAlign: 'center',
      overflowX: 'auto',
      marginTop: '4%',
      margin: '5% 5% 0% 5%',
      position: 'relative'
    }
  }
}
