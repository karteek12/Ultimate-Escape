# 🌍 **Interactive Decision Tree - Ultimate Escape !**

Welcome to **Ultimate Escape**, an interactive web application that helps users plan their perfect trip based on their preferences for location, activities, and budget. Built with **HTML, CSS, and JavaScript**, this project dynamically generates travel recommendations using a decision tree.


## 🚀 **Project Overview**

**Ultimate Escape** allows users to answer three simple questions:
1. Do you prefer the **mountains** or the **beach**? 🌄🏖️  
2. Are you looking for **adventure** or **relaxation**? ⚡🧘‍♂️  
3. What is your **budget**? 💰  

The app then provides a recommendation based on a pre-defined **decision tree** logic.


## 🧩 **Features**

- 🌟 **Interactive Interface**: A clean and responsive user-friendly design.  
- ⚡ **Decision Tree Logic**: Provides travel suggestions based on user input.  
- ✨ **Animations**: Smooth animations and transitions enhance user experience.  
- 🖥️ **Responsive Design**: Works on all devices including desktops and mobile phones.


## 🛠️ **Technologies Used**

- **HTML5**: For the webpage structure.  
- **CSS3**: Custom styling, animations, and responsiveness.  
- **JavaScript**: Implements the decision tree logic.


## ⚙️ Setup Instructions
- Follow these steps to run the project locally:

1) Clone the Repository
- Run the following command in your terminal:
```
git clone https://github.com/your-username/interactive-decision-tree.git
cd interactive-decision-tree
```
2) Open the Project
3) Open the index.html file in any modern web browser (e.g., Chrome, Firefox).
- Select your preferences and click the "🌟 Get Recommendation" button to see personalized travel suggestions.

## 🎥 **How It Works**

### 🚀 **User Input**  
The user selects the following options:  
- **Preference**: Mountains or Beach 🌄🏖️  
- **Activity**: Adventure or Relaxation ⚡🧘‍♂️  
- **Budget**: Low, Medium, or High 💰  

### 🧠 **Decision Tree Logic**  
The app uses a nested JavaScript object to navigate user preferences and return travel recommendations.  

**Example:**  
```const decisionTree = {
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
```

## 🔍 Research and Insights
While building this project:

1) I explored object-based decision trees to simulate decision-making processes.
2) I focused on improving user experience through intuitive UI design and smooth animations.
3) Learned to implement CSS keyframe animations and transitions for interactivity.

## 🚀 Future Improvements
Here are ideas to improve this project:

1) Add More Destinations: Expand the decision tree with more locations.
2) Integrate APIs: Use travel APIs like Google Maps for real-time data.
3) User Preferences: Allow additional inputs like climate, duration, and group size.
4) Save Preferences: Store user choices using local storage or a backend database.

## 👤 About Me
I’m passionate about building interactive and intuitive applications. This project combines my knowledge of web development and problem-solving to deliver a simple yet effective decision-making tool.
Feel free to explore the code, provide feedback or contribute to improve this project! 🚀

