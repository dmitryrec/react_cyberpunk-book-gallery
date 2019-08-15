import React from 'react';
import SingleBookContainer from '../SingleBookContainer/SingleBookContainer';
import './BooksContainer.css';

export default function BooksContainer({data}) {
        return (
          <div id="gallery">
            {data.map(book => <SingleBookContainer {...book} />
            )}
          </div>
        );
}

