import React from 'react';
import { useGetCardsQuery, useGetSetsQuery } from '../services/pokemonApi';
import { Row, Col, Spin, Alert } from 'antd';
import { Link, useParams } from 'react-router-dom';
import '../styles/PokemonPictures.css'

const PokemonPictures = () => {
  const { setId } = useParams();
  const { data: setsData, error: setsError, isLoading: setsLoading } = useGetSetsQuery();
  const { data: cardsData, error: cardsError, isLoading: cardsLoading } = useGetCardsQuery(setId);

  if (setsLoading || cardsLoading) return <Spin />;
  if (setsError) return <Alert message="Error fetching sets" type="error" />;
  if (cardsError) return <Alert message="Error fetching cards" type="error" />;

  //current issues:
  //when loading a new set from the thingy, it sucks
  //essentially there is no indication that it is loading when it is clicked
  //probably best to show the spin when it is clicked
  //currently it does as it is supposed to, but it is missing that very small detail

  const set = setsData.data.find((set) => set.id === setId);

  return (
    <div>
      <center><h1>{set ? set.name : setId}</h1></center>
      <div className='cards'>
        <Row className='cards-container' style={{display: 'flex'}}>
          {cardsData.data.map((card) => (
              <Col className='pokemon-card' key={card.id}>
                {/* <Link to={'/'}> */}
                  <img src={card.images.small} alt={card.name} />
                {/* </Link> */}
              </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PokemonPictures;
