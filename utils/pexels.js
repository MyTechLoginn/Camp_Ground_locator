async function getRandomCampImage() {
  try {
    const response = await fetch(
      "https://api.pexels.com/v1/search?query=camping&per_page=30",
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY,
        },
      },
    );
    const data = await response.json();
    if (data.photos && data.photos.length > 0) {
      const randomPhoto =
        data.photos[Math.floor(Math.random() * data.photos.length)];
      return randomPhoto.src.medium; // Returns a medium-sized image URL
    }
    // Fallback image if API returns no photos
    return "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4";
  } catch (err) {
    console.error("Error fetching Pexels image:", err);
    return "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4";
  }
}

module.exports = { getRandomCampImage };
