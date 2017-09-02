import React from 'react';
import {Link} from 'react-router';

export default function NotFound(props) {
    return (
        <div className="notfound">
            <h1>
                <strong>
                    404 NOT FOUND
                </strong>
            </h1>
            <Link to="/">
                <button>go back to home</button>
            </Link>
        </div>
    )
}