import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaRegEye, FaShare, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummmaryCard = ({ news }) => {
    // console.log(news)
    const { _id, title, details, image_url, rating, author, total_view } = news
    return (
        <div>
            <Card className='mb-2'>
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center' >
                        <div className='d-flex align-items-center gap-3'>
                            <Image src={author.img} roundedCircle style={{ width: '50px' }} alt="" />
                            <div>
                                <p className='m-0'><small>{author.name ? author.name : 'Maruf Hossain'}</small></p>
                                <p className='m-0'><small>{author.published_date ? author.published_date : '22-02-22'}</small></p>
                            </div>
                        </div>
                        <div >
                            <FaShareAlt className='mx-2'></FaShareAlt>
                            <FaRegBookmark></FaRegBookmark>
                        </div>
                    </div>
                </Card.Header>
                <Card.Img variant="top" src={image_url
                } />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 250 ? <>{
                                details.slice(0, 250) + ' ...'}
                                <Link to={`/news/${_id}`}>Read More</Link> </> : details
                        }

                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center gap-2'>
                            <FaStar className='text-warning'></FaStar>
                            <p className='m-0'>{rating.number}</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <FaRegEye></FaRegEye>
                            <p className='m-0'>{total_view}</p>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummmaryCard;