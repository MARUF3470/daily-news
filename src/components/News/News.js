import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {

    const news = useLoaderData()
    const { author, image_url, title, details, rating, category_id } = news
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className='d-flex justify-content-around'>
                        <p>Author: {author.name}</p>
                        <p>{author.published_date}</p>
                        <p>Rating: {rating.number}</p>
                    </div>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="primary">Go Back</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;