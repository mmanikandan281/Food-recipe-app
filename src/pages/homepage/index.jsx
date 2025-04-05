import { useEffect, useState } from "react";
import Search from "../../components/search";
import { Dis } from "../../components/display"; 
import { Fav } from "../../components/fav";
import './style.css';

const Homepage = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [activeTab, setActiveTab] = useState('recipes');

  // Bridge function to handle search data from child component
  const C2Pbridge = (data) => {
    setLoadingState(true);

    async function getRecipes() {
      try {
        const apiResponse = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=f8d2adf9338241c0b81ebbc9c41509f4&query=${data}`
        );
        const result = await apiResponse.json();
        const { results } = result;

        if (results && results.length > 0) {
          setRecipes(results);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoadingState(false);
      }
    }

    getRecipes();
  };

  // Add item to favorites
  const addToFav = (selectedItem) => {
    let copyItems = [...favoriteItems];
    const index = copyItems.findIndex((item) => item.id === selectedItem.id);
    
    if (index === -1) {
      copyItems.push(selectedItem);
      setFavoriteItems(copyItems);
      localStorage.setItem("favouriteItem", JSON.stringify(copyItems));
    } else {
      alert("Already selected!!");
    }
  };

  // Remove item from favorites
  const removeFromFav = (itemToRemove) => {
    const updatedList = favoriteItems.filter((item) => item.id !== itemToRemove.id);
    setFavoriteItems(updatedList);
    localStorage.setItem("favouriteItem", JSON.stringify(updatedList));
  };

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const getElementsFromStorage = JSON.parse(localStorage.getItem("favouriteItem"));
    if (getElementsFromStorage) {
      setFavoriteItems(getElementsFromStorage);
    }
  }, []);

  return (
    <div className="homepage-container">
      {/* Header Section */}
      <div className="header">
        <h1 className="title">Recipe Finder</h1>
        <p className="subtitle">Discover delicious recipes for any occasion</p>
      </div>
      
      {/* Search Component */}
      <div className="search-wrapper">
        <Search C2Pbridge={C2Pbridge} />
      </div>
      
      {/* Tab Navigation */}
      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'recipes' ? 'active' : ''}`}
          onClick={() => setActiveTab('recipes')}
        >
          Search Results
        </button>
        <button 
          className={`tab-btn ${activeTab === 'favorites' ? 'active' : ''}`}
          onClick={() => setActiveTab('favorites')}
        >
          My Favorites ({favoriteItems.length})
        </button>
      </div>
      
      {/* Loading Indicator */}
      {loadingState && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading recipes... please wait.</p>
        </div>
      )}
      
      {/* Content Area */}
      <div className="content-area">
        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div className="favorites-container">
            <h2 className="section-title">My Favorite Recipes</h2>
            {favoriteItems && favoriteItems.length > 0 ? (
              <div className="recipe-grid">
                {favoriteItems.map((item) => (
                  <Fav
                    key={item.id}
                    rmFromFav={() => removeFromFav(item)}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-message">
                <p>You haven't added any favorites yet!</p>
              </div>
            )}
          </div>
        )}
        
        {/* Search Results Tab */}
        {activeTab === 'recipes' && (
          <div className="results-container">
            <h2 className="section-title">Search Results</h2>
            {recipes && recipes.length > 0 ? (
              <div className="recipe-grid">
                {recipes.map((item) => (
                  <Dis
                    key={item.id}
                    addToFav={() => addToFav(item)}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-message">
                <p>No recipes found. Try searching for something!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;