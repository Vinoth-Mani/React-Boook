import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {

    const [books, setBooks] = useState([]);

    const editBookByID = (id, title) => {
        const updEditBk = books.map((book) => {

            if (book.id === id) {
                return { ...book, title: title };
            }
            return book;

        });
        setBooks(updEditBk);
    }

    const delBookByID = (id) => {
        const updDelBk = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updDelBk);
    };
    const handleCreateBook = (title) => {

        const updCreateBk = [...books, { id: Math.round(Math.random() * 999), title: title }];
        setBooks(updCreateBk);

        // console.log('Need to add book :', title)

    };




    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookCreate onCreate={handleCreateBook} />
            <BookList onEdit={editBookByID} onDelete={delBookByID} books={books} />
        </div>
    );
}

export default App;