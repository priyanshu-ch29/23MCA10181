import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://20.244.56.144/test/companies/AMZ/categories/Phone/products?top=10&minPrice=1&maxPrice=10000", {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNzk3NzQwLCJpYXQiOjE3MTE3OTc0NDAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjRhMWZjYTk3LTkwNmQtNGE3Yi1iZThhLWFiMWJiOWRjMDNmNyIsInN1YiI6InByaXlhbnNodS4yM21jYTEwMTgxQHZpdGJob3BhbC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiNGExZmNhOTctOTA2ZC00YTdiLWJlOGEtYWIxYmI5ZGMwM2Y3IiwiY2xpZW50U2VjcmV0IjoibVljRm16SFhJVkxES25udyIsIm93bmVyTmFtZSI6IlByaXlhbnNodSBDaG91ZGhhcnkiLCJvd25lckVtYWlsIjoicHJpeWFuc2h1LjIzbWNhMTAxODFAdml0YmhvcGFsLmFjLmluIiwicm9sbE5vIjoiMjNNQ0ExMDE4MSJ9.BQfBRT2CELaMbmspVdZaUMzlPKx8mTW4ukT17UwFLe4' 
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div>{item.productName}</div>
          <div>{item.price}</div>
          <div>{item.rating}</div>
          <div>{item.discount}</div>
          <div>{item.availability}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
