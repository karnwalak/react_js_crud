import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row justify-content-end">
          <Link to="/" className="btn btn-success col-1">Back</Link>
          </div>
                <div className='py-4'>
                   <h1>About Page</h1>
                   <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id possimus voluptas odio necessitatibus odit! 
                     Ullam excepturi a minus doloremque iure deleniti temporibus quod dicta repudiandae ut dolorem itaque voluptates,
                     fuga commodi cumque nesciunt molestias dolore maiores doloribus impedit quidem eaque? Pariatur dolorum libero
                    numquam in, omnis repellendus esse enim incidunt cupiditate sequi odio ipsa molestias officiis quisquam veniam
                     optio debitis ipsum facilis amet explicabo deserunt porro sunt. Quia placeat maxime, explicabo, perferendis 
                     fuga fugit minima nesciunt cupiditate eius in mollitia quaerat quisquam ratione nemo pariatur excepturi. 
                     Minima illo dignissimos nobis excepturi. Facilis fugit id consequatur, facere voluptatibus non aut in.
                   </p>
                </div>
            </div>
        )
    }
}

export default About
