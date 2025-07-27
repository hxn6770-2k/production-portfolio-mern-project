
# Personal Portfolio & Projects - MERN Stack

This is my full personal portfolio website built with the **MERN stack** (MongoDB, Express, React, Node.js) showcasing my skills, projects, and contact form with email functionality. It also includes example implementations of EEG signal processing and a medical chatbot.


## Features

- **Responsive portfolio site** with About, Projects, Contact sections
- **Contact form** integrated with backend email sending (SendGrid or SMTP)
- **EEG Signal Processing project** showcasing simulated EEG data classification using 1D CNN (PyTorch)
- **Medical Chatbot project** with rule-based and GPT-2 powered symptom checking
- Modern React frontend using functional components and hooks
- Express/Node backend API with secure environment variables for email API keys
- MongoDB integration for storing contact messages or user data (optional)
- Clean, professional UI with consistent styling

---

## Tech Stack

- **Frontend:** React, React Icons, CSS Modules
- **Backend:** Node.js, Express.js, SendGrid API (or alternative SMTP)
- **Database:** MongoDB (optional for contact message storage)
- **Machine Learning:** PyTorch for EEG model simulation
- **NLP:** Hugging Face Transformers (GPT-2) for chatbot
- **Deployment:** Designed for deployment on platforms like Heroku, Vercel, or AWS

---

## Installation & Setup

### Backend

1. Clone the repo and navigate to the backend directory (if separated):
```

git clone [https://github.com/yourusername/portfolio-mern.git](https://github.com/yourusername/portfolio-mern.git)
cd portfolio-mern/backend

```

2. Install dependencies:
```

npm install

```

3. Create a `.env` file with your environment variables:
```

PORT=8080
SENDGRID\_API\_KEY=your\_sendgrid\_api\_key\_here
MONGO\_URI=your\_mongodb\_connection\_string (optional)

```

4. Run the backend server:
```

npm start

```

### Frontend

1. Navigate to the frontend directory:
```

cd ../frontend

```

2. Install dependencies:
```

npm install

```

3. Run the React app:
```

npm start

```

---

## Usage

- Visit the site locally at `http://localhost:3000`.
- Navigate through sections to view About, Projects, and Contact.
- Use the contact form to send an email (configured via backend API).
- Explore EEG project code and Medical Chatbot demos included in the Projects section.

---

## Projects Included

### 1. EEG Signal Processing

- Simulates multichannel EEG data.
- Implements a 1D CNN using PyTorch to classify normal vs epileptic signals.
- Can be extended to real EEG datasets for clinical applications.

### 2. Medical Chatbot

- Rule-based symptom checker with fallback to GPT-2 conversational model.
- Basic triage logic for common symptoms.
- Can be expanded with advanced clinical NLP models and data.

---

## Deployment

- Configure environment variables securely on your hosting platform.
- Use services like Heroku, Vercel, or AWS Amplify for easy deployment.
- Ensure your API keys and MongoDB credentials are never exposed publicly.

---

## Contributing

Feel free to open issues or pull requests for improvements, bug fixes, or new features!

---

## License

MIT License © [Your Name]

---

Thanks for checking out my portfolio and projects!

