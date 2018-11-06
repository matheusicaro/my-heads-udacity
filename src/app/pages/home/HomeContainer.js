/*
* DESCRIPTION
*
* Component responsible for the logic of the data passed
* in the visualization component 'Home'. Only responsible
* for controlling all the books received by the api in 
* your state.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React, { Component } from 'react'

import Home from './Home';

import { getAll }from '../../api/BooksAPI';
import UpdateMoveAPI from '../../api/utils/UpdateMoveAPI';

import Loading from '../../components/presentation/Loading';

class HomeContainer extends Component {

    constructor() {
        super();
        this.update = new UpdateMoveAPI();
        this.state = {
            books: '',
            loading: true,
            updateBooks: {
                book: '',
                newCategorieBook: '',
                isUpdate: false,
            },
            menuOpen:false,
        }

        getAll().then(result => {
            setTimeout(() => this.setState({ books: result, loading: false }), 1000)
        })
    }

    moveBookCategorie = (book, newCategorieBook) => {

        const { books } = this.state;

        const index = books.indexOf(book);
        books[index].shelf = newCategorieBook;

        this.setState(currentState => ({
            books,
            oldBooks: books,
            updateBooks: {
                book,
                newCategorieBook,
                isUpdate: !currentState.updateBooks.isUpdate
            }
        }))
    }

    verifyReturnUpdate = (status) => {

        window.alert("FAZER POP-UP ERROR NA PAGINA")

        // ERROR IN RETURN API
        if (status !== 200) {
            this.setState(currentState => ({ books: currentState.oldBooks }));
            // TODO POP-UP
        }

        // DO NOT USE SETSTATE NOT TO CALL THE METHODS OF THE REACT LIFE 
        // CYCLE AS THIS REPRODUCTIVE VARIABLE DOES NOT NEED 
        this.state.updateBooks.isUpdate = false;
    }

    componentDidUpdate() {

        const { isUpdate } = this.state.updateBooks;

        if (isUpdate) {
            const { book, newCategorieBook } = this.state.updateBooks;
            this.verifyReturnUpdate(this.update.move(book, newCategorieBook));
        }

    }


    render() {
        const { books, loading } = this.state;
        const { language, styleHide } = this.props;

        console.log(this.props)

        return (
            <React.Fragment>
                {loading && <Loading></Loading>}
                {!loading && <Home 
                                books={books} 
                                moveBookCategorie={this.moveBookCategorie} 
                                language={language} 
                                styleHide={styleHide}>  
                            </Home>}
            </React.Fragment>
        )
    }
}

export default HomeContainer