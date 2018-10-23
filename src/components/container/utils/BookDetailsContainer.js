import React, { Component } from 'react';

import BookDetails from '../../presentation/utils/BookDetails'

export default class BookDetailsContainer extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        const { title, subtitle, imageLinks, authors,
            infoLink, categories,
            description, language, publishedDate } = this.props.book;
        const { open } = this.state;

        return (

            <BookDetails
                handleOpen={this.handleOpen}
                open={open}
                onRequestClose={this.handleClose}
                
                title={title}
                subtitle={subtitle}
                imageLinks={imageLinks}
                authors={authors}
                infoLink={infoLink}
                categories= {categories}
                description= {description}
                language= {language}
                publishedDate= {publishedDate}
            >
            </BookDetails>
        );
    }
}