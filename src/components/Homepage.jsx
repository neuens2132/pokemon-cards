import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { useSearchCardsQuery } from '../services/pokemonApi';
import { Spin, Alert } from 'antd';
import { Col, Row } from 'antd'

const HomePage = () => {
  const [query, setQuery] = useState('');
  const { data, error, isLoading } = useSearchCardsQuery(query, {
    skip: !query,
  });

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div>
        <SearchBar onSearch={handleSearch} />
        <div className='cards'>
            {isLoading && <Spin />}
            {error && <Alert message="Error fetching cards" type="error" />}
            {data && data.data.length ? (
                <Row className='cards-container' style={{display: 'flex'}}>
                {data.data.map((card) => (
                    <Col className='pokemon-card' key={card.id}>
                    {/* <Link to={'/'}> */}
                        <img src={card.images.small} alt={card.name} />
                    {/* </Link> */}
                    </Col>
                        
                ))}
                </Row>
            ) : (
                <p>No cards found.</p>
            )}
        </div>
    </div>
  );
};

export default HomePage;
