import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Menu, Dropdown, Spin, Alert } from 'antd';
import { Header } from 'antd/es/layout/layout';
import pokeball from '../images/Pokemon-Pokeball.png';
import { useGetSetsQuery } from '../services/pokemonApi';

const Navbar = () => {
  const [ selectedSet, setSelectedSet ] = useState(null);
  const [query, setQuery] = useState('');
  const { data, error, isLoading } = useGetSetsQuery();

  if (isLoading) return <Spin />;
  if (error) return <Alert message="Error fetching sets" type="error" />;

  const handleSetClick = (setId) => {
    setSelectedSet(setId);
  };

  // Categorize sets by series
  const categorizedSets = data.data.reduce((acc, set) => {
    if (!acc[set.series]) {
      acc[set.series] = [];
    }
    acc[set.series].push(set);
    return acc;
  }, {});

  // Create dropdown menu items
  const menu = (
    <Menu>
      {Object.keys(categorizedSets).map((series) => (
        <Menu.SubMenu key={series} title={series}>
          {categorizedSets[series].map((set) => (
            <Menu.Item key={set.id}>
              <Link to={`/set/${set.id}`}>{set.name}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );

  return (
    <div className='navbar-container' style={{ width: '100%' }}>
      <Header style={{ display: 'flex', justifyContent: 'space-between', background: 'white' }}>
        <center>
            <Link to="/"> 
                <Avatar src={pokeball} size={'large'} shape='square' />
            </Link>
        </center>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Pokémon Sets
          </a>
        </Dropdown>
      </Header>
    </div>
  );
};

export default Navbar;
