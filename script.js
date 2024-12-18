const decisionTree = {
    Beach: {
      Adventure: {
        Low: "Visit Goa, India! Affordable adventures like beach sports and vibrant nightlife await you.",
        Medium: "We recommend a thrilling trip to Bali, Indonesia! Enjoy exciting water sports and explore the island’s rich culture.",
        High: "Relax in the Maldives! Luxury resorts and turquoise waters await you for a peaceful retreat.",
      },
      Relaxation: {
        Low: "Head to Varkala, India, for calm beaches and affordable accommodations.",
        Medium: "Explore Phuket, Thailand, for a mix of relaxation and local sightseeing.",
        High: "Experience the luxury of Bora Bora in French Polynesia with crystal-clear lagoons.",
      },
    },
    Mountains: {
      Adventure: {
        Low: "Take a budget-friendly trek in the Himalayas. Explore nature trails and experience breathtaking views!",
        Medium: "Head to Rishikesh, India, for thrilling mountain adventures like river rafting and camping.",
        High: "Explore the Swiss Alps for an adventurous skiing trip with breathtaking mountain views.",
      },
      Relaxation: {
        Low: "Visit Himachal Pradesh, India, for a peaceful retreat surrounded by serene mountains.",
        Medium: "Relax in Shimla, India, with charming views and cozy stays.",
        High: "Stay at a luxurious mountain resort in Aspen, Colorado, for ultimate relaxation.",
      },
    },
  };
  function generateRecommendation(preference, activity, budget) {
    if (
      decisionTree[preference] &&
      decisionTree[preference][activity] &&
      decisionTree[preference][activity][budget]
    ) {
      return decisionTree[preference][activity][budget];
    } else {
      return "No specific recommendation found. Try selecting different options!";
    }
  }
  document.getElementById("submit-btn").addEventListener("click", () => {
    const preference = document.getElementById("preference").value;
    const activity = document.getElementById("activity").value;
    const budget = document.getElementById("budget").value;
  
    const outputDiv = document.getElementById("output");
  
    if (!preference || !activity || !budget) {
      outputDiv.textContent = "Please select all options!";
      outputDiv.style.opacity = "1";
      return;
    }
    const recommendation = generateRecommendation(preference, activity, budget);
    outputDiv.textContent = recommendation;
    outputDiv.style.opacity = "1";
  });
  document.getElementById("submit-btn").addEventListener("click", () => {
    const preference = document.getElementById("preference").value;
    const activity = document.getElementById("activity").value;
    const budget = document.getElementById("budget").value;
  
    const outputDiv = document.getElementById("output");
    if (!preference || !activity || !budget) {
      outputDiv.textContent = "⚠️ Please select all options!";
      outputDiv.classList.add("visible");
      return;
    }
    const recommendation = generateRecommendation(preference, activity, budget);
    outputDiv.textContent = recommendation;
    outputDiv.classList.add("visible");
  });
  