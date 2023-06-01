import asset from './assets';

const projects = [
    {
        title: 'Electronics Store (eCommerce)',
        description: 'A Next.js-13 based eCommerce project that allows users to add items to a cart and complete transactions using Stripe. The content is easily manageable thanks to the Sanity content management system.',
        frontend: 'React, Next, CSS, Sanity, Stripe, react-icons, react-hot-toast, canvas-confetti...',
        cms: 'Sanity',
        hosting: 'Vercel',
        liveLink: 'https://electronics-store-alpha.vercel.app/',
        repositoryLink: 'https://github.com/AbdulKadri/eCommerce',
        imageURL: asset.ElectronicsStore,
        gifURL: asset.ElectronicsStoreGif,
    },
    {
        title: 'Sports Nexus (Social Media App)',
        description: 'A full-stack MERN project featuring user registration, post creation/deletion, and friend addition. Includes user-friendly features like dark mode, success toasts for registration/login, and JWT Authentication. (Please note, the search feature is currently under development).',
        frontend: 'React, Material UI, Redux Toolkit, React Router Dom, Formik, Yup, Dropzone...',
        backend: 'Node/Express, MongoDB/Mongoose, JWT, Postman, Bcrypt, Multer, Helmet, Morgan...',
        hosting: 'Render',
        liveLink: 'https://sportsnexus.onrender.com/',
        repositoryLink: 'https://github.com/AbdulKadri/social-media',
        imageURL: asset.SportsNexus,
        gifURL: asset.SportsNexusGif,
    },
    {
        title: 'Apex Weather (Weather App)',
        description: 'A Next.js-based application providing comprehensive weather information, including forecasts and air quality index for any city. Additional features include a heat weather map, city images, unit conversion for weather data, and a 3D animated globe model. Integrated with the OpenWeatherMap and Unsplash APIs.',
        frontend: 'React, Next, Three.js, GSAP, TailwindCSS, react-toastify, async-paginate, axios...',
        hosting: 'Vercel',
        liveLink: 'https://next-weather-app-lac.vercel.app/',
        repositoryLink: 'https://github.com/AbdulKadri/next-weather-app',
        imageURL: asset.ApexWeather,
        gifURL: asset.ApexWeatherGif,
    },
    {
        title: 'Yeg Dealership (Car Dealership)',
        description: 'A WordPress project emulating a real-world car dealership website. Features include a car inventory page with detailed car specifications, customer testimonials and reviews, about section, and a contact section.',
        frontend: 'Wordpress, Elementor and CSS.',
        hosting: 'Hostinger',
        liveLink: 'https://yegdealership.shop/',
        imageURL: asset.YegDealership,
        gifURL: asset.YegDealershipGif,
    },
    {
        title: 'Wild Rydes (Ride Sharing App)',
        description: 'An AWS project enabling customers to sign up, validate their emails, and request a ride from a location on the map. (Please note, while the codebase isn\'t original, the AWS implementation is my work).',
        frontend: 'AWS Amplify, Cognito, DynamoDB, Lambda, API Gateway, S3, CloudWatch, SES, IAM.',
        hosting: 'AWS',
        liveLink: 'https://main.d2tkktllao8g56.amplifyapp.com/',
        repositoryLink: 'https://github.com/AbdulKadri/wildrydes-site',
        imageURL: asset.WildRydes,
        gifURL: asset.WildRydesGif,
    }
]

export default projects;