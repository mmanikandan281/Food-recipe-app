
# 🍽️ Recipe Finder App

A simple and responsive **Recipe Finder** built with **React**, using the **Spoonacular API**. Users can search for recipes, view search results, and add their favorite recipes to a persistent favorites list using `localStorage`.

## 🚀 Features

- 🔍 **Search Recipes** by keyword using Spoonacular's API.
- ❤️ **Add to Favorites** and manage your favorite recipes.
- 🧾 **Persistent Storage** using localStorage.
- ⚡ **Responsive UI** with tabs for Search Results and My Favorites.
- 🔁 Smooth state management with React Hooks.

## 📸 Demo

![Screenshot (91)](https://github.com/user-attachments/assets/c0ffc2c3-2660-4493-8397-9c619b98e294)



## 🛠️ Tech Stack

- **Frontend**: React (Hooks, Functional Components)
- **Styling**: CSS
- **API**: [Spoonacular Recipe API](https://spoonacular.com/food-api)


## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   https://github.com/mmanikandan281/Food-recipe-app.git
   cd Food-recipe-app
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
