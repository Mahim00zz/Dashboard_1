# Financial Dashboard App

The Financial Dashboard is a full-stack web application built with Next.js. It provides users with a secure platform to manage their financial data, including the ability to view, add, edit, and delete invoices. With built-in authentication and a responsive design, the app ensures a seamless experience on both desktop and mobile devices.

## Login:

Email: user@nextmail.com
Password: 123456


## Features

- **Public Home Page:** A landing page accessible to all users.
- **Login Page:** Secure authentication using **NextAuth.js** for user login.
- **Dashboard Pages:** Protected routes where users can view, add, edit, and delete invoices.
- **Database Integration:** A database setup to store and manage user data and invoices.
- **Responsive Design:** Fully optimized for both desktop and mobile.
- **Search & Pagination:** Efficient search and pagination to manage large sets of invoices.
- **Error Handling:** Handles general errors and 404 not found errors gracefully.
- **Server-side Form Validation & Accessibility:** Secure and accessible form handling.

## Technologies Used

- **Next.js 13+**
- **React**
- **NextAuth.js** for authentication
- **Vercel** for deployment
- **Tailwind CSS** for styling
- **Prisma** for ORM (optional, if you used Prisma in the course)

## Screenshots

### Desktop Version
![Screenshot 2024-12-09 184238](https://github.com/user-attachments/assets/f64907db-b4c6-4df7-931c-614e89d291db)
![Screenshot 2024-12-09 184312](https://github.com/user-attachments/assets/0210ebec-721e-4fde-9c2a-0593e4eeaa72)
![Screenshot 2024-12-09 184326](https://github.com/user-attachments/assets/eab4b145-d468-46ad-894c-b6fded331c55)
![Screenshot 2024-12-09 184337](https://github.com/user-attachments/assets/257879e2-85ea-4ad7-bee4-da30a5b3966c)


## Setup & Installation

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js 18.18.0 or later](https://nodejs.org/)
- A **GitHub Account** and **Vercel Account** for deployment

### Clone the Repository

Clone this repository to your local machine:

```bash
git clone [https://github.com/yourusername/financial-dashboard.git](https://github.com/Mahim00zz/Dashboard_1.git)
```

Install Dependencies
Navigate to the project folder and install the necessary dependencies:
```bash
cd financial-dashboard
npm install
```
Configure Environment Variables
Create a .env.local file at the root of the project and add your environment variables for NextAuth.js, your database, and other secrets:
```bash
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=your-database-connection-string
NEXTAUTH_SECRET=your-nextauth-secret
```
Running Locally
To run the application locally, use the following command:
```bash
npm run dev
```
Visit http://localhost:3000 in your browser to see the app in action.

Deployment
This project is deployed on Vercel. To deploy your own instance, follow these steps:

Push your code to a GitHub repository.
Link the repository to Vercel via the Vercel Dashboard.
Vercel will automatically handle deployment.

# How to Use
1. Home Page: Visit the public home page.
2. Login: Use the login page to sign in or register as a user.
3. Dashboard: Once logged in, access the dashboard to manage invoices. You can:
- Add new invoices.
- Edit or delete existing invoices.
- Use search and pagination to find specific invoices.

# Roadmap
- Improve error handling and add more robust validations.
- Add more features to the dashboard, such as reporting or data visualization.
- Enhance mobile responsiveness and UI/UX design.



