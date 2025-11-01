import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/action";

export const LibraryForm = () => {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        isbn: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook(formData));
        setFormData({ title: "", author: "", isbn: "" });
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-sm">
                <h3 className="text-center mb-4">Library Management</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter the title"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter author name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">ISBN</label>
                        <input
                            type="text"
                            name="isbn"
                            value={formData.isbn}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter ISBN"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};
