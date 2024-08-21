import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

const SearchBar = ({ onSearch}) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
        onSearch(query);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
        <Input placeholder="Search for a card" value={query} onChange={(e) => setQuery(e.target.value)} style={{ width: 200, borderRadius: '10px 0px 0px 10px' }} />
        <Button type="primary" onClick={handleSearch} style={{borderRadius: '0px 10px 10px 0px'}}>
            <SearchOutlined />
        </Button>
    </div>
  );
};

export default SearchBar;
