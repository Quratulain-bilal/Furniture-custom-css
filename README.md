
Furniture Website - Next.js
This is a modern and responsive furniture website built with Next.js. The website consists of multiple pages to display different furniture categories, detailed product pages, a cart page, and a contact page. The design is clean, minimal, and user-friendly.

Features
Responsive Design: The website adjusts seamlessly across devices with the help of Tailwind CSS.
Multiple Pages:
Home: Overview of the website with featured products.
Product Listing: Displays categories and products.
Product Detail: Detailed page for each furniture item.
Cart: Manage selected products before checkout.
Contact: Page for customer inquiries.
Next.js: Utilizes server-side rendering for improved performance.
Tailwind CSS: For styling the website with utility-first CSS.
SEO Optimized: Custom meta tags for better search engine ranking.
Installation
Follow these steps to run the project locally.

Prerequisites
Ensure you have the following installed:

Node.js (v14 or later)
npm or yarn
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/furniture-website.git
cd furniture-website
Install dependencies:

Using npm:

bash
Copy code
npm install
Or using yarn:

bash
Copy code
yarn install
Run the development server:

Start the Next.js development server:

bash
Copy code
npm run dev
Or using yarn:

bash
Copy code
yarn dev
The website should now be live at http://localhost:3000.

Folder Structure
bash
Copy code
furniture-website/
├── components/          # Reusable components like Navbar, Footer, etc.
├── pages/               # Pages for each route (Home, Product, Cart, etc.)
│   ├── index.js         # Home page
│   ├── product.js       # Product listing page
│   ├── product/[id].js  # Dynamic Product Detail page
│   ├── cart.js          # Cart page
│   └── contact.js       # Contact page
├── public/              # Static assets like images, fonts, etc.
├── styles/              # Global styles using Tailwind CSS
│   └── globals.css      # Global styles and Tailwind configuration
├── .gitignore           # Git ignore file
└── next.config.js       # Next.js configuration
Technologies Used
Next.js: React framework for building SSR (Server Side Rendered) applications.
Tailwind CSS: Utility-first CSS framework for responsive, customizable designs.
React: JavaScript library for building user interfaces.
Node.js: JavaScript runtime for server-side execution.
Deployment
To deploy the website to Vercel (or any platform that supports Next.js):

Push your code to GitHub.
Connect your GitHub repository to Vercel.
Follow the prompts to deploy the website.
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add feature').
Push to your branch (git push origin feature-branch).
Open a pull request.
