
# 🍽️ Recipe Finder App

A simple and responsive **Recipe Finder** built with **React**, using the **Spoonacular API**. Users can search for recipes, view search results, and add their favorite recipes to a persistent favorites list using `localStorage`.

## 🚀 Features

- 🔍 **Search Recipes** by keyword using Spoonacular's API.
- ❤️ **Add to Favorites** and manage your favorite recipes.
- 🧾 **Persistent Storage** using localStorage.
- ⚡ **Responsive UI** with tabs for Search Results and My Favorites.
- 🔁 Smooth state management with React Hooks.

## 📸 Demo

![Demo Screenshot](demo.png)  
*(Add a real screenshot of your app here)*

## 🛠️ Tech Stack

- **Frontend**: React (Hooks, Functional Components)
- **Styling**: CSS
- **API**: [Spoonacular Recipe API](https://spoonacular.com/food-api)

## 🧱 Project Structure

```
src/
├── components/
│   ├── search.jsx        # Search input component
│   ├── display.jsx       # Displays recipe result cards
│   └── fav.jsx           # Displays favorite items
├── pages/
│   └── Homepage.jsx      # Main homepage component
├── App.js
├── index.js
└── style.css             # Styling for homepage
```

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/recipe-finder.git
   cd recipe-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔑 API Key Setup

This project uses the Spoonacular API. Replace the API key in `Homepage.jsx` with your own:

```js
const apiResponse = await fetch(
  `https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY&query=${data}`
);
```

You can get a free API key from [Spoonacular](https://spoonacular.com/food-api).

## 📦 Dependencies

- `react`
- `react-dom`
- `react-scripts`

## 📌 TODOs

- Add pagination for search results
- Add modal or recipe detail page
- Improve styling with a UI library like Tailwind or Material UI
- Add dark mode toggle

## 📄 License

MIT License. Feel free to fork and customize!

---

Made with ❤️ by Manikandan M

Let me know if you'd like it tailored for deployment (like adding `gh-pages` or Vercel info), or if you want a `package.json` sample too.
