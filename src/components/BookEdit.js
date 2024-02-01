import { useState } from 'react';


function BookEdit({ book, onEdit, onSubmit }) {

    const [title, setTitle] = useState(book.title);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Need to save book:', title);
        onEdit(book.id, title);
        onSubmit();
    }
    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleTitleChange} />
            <button className="button is-primary">Save</button>

        </form>
    )
}
export default BookEdit;