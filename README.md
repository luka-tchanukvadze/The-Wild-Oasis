# The Wild Oasis - Full-Stack Hotel Management App

**Live Demo:** [https://the-wild-oasis-two-ivory.vercel.app/](https://the-wild-oasis-two-ivory.vercel.app/)

A complete, full-stack application for managing a hotel. This project was built for **personal learning** and includes two main parts: an **admin dashboard** for internal staff and a **customer-facing website**.

---

## Overview: Two Applications, One Backend

The Wild Oasis is a full-stack booking system divided into two separate frontends that share one simple, robust backend. The backend uses **Supabase** for all services, including the database, user authentication, and real-time updates.

### Website Rendering Strategy (Next.js)

The Customer Website uses Next.js to mix different rendering techniques for the best speed and SEO:

* **Static Pages (Static SSR):** Pages that rarely change (like the main Cabin List) are built into fast HTML files ahead of time.
* **Dynamic Pages (Dynamic SSR):** Pages that hold user-specific or fresh data (like a new booking confirmation) are built on the server for every request to ensure the information is always current.

---

## Tech Stack (Frontend Focused)

The tools used are grouped by the application they power, with a focus on the frontend libraries.

### 1) Internal Tool (Admin Dashboard)

This is a modern Single Page Application (SPA) designed for managing data quickly.

* **Frontend Core:** **React.js**
* **Data Handling:** **TanStack React Query** (Handles data fetching, caching, and updates)
* **Form Management:** **React Hook Form**
* **Routing:** **React Router**
* **Styling:** **Styled Components**
* **Backend & Auth:** **Supabase**

### 2) Customer Website (High Performance)

This application uses a hybrid rendering approach for speed and scalability.

* **Framework & Rendering:** **Next.js** (Uses both Server-Side and Static Rendering)
* **Styling:** **Tailwind CSS** (Utility-first CSS)
* **Authentication:** **NextAuth.js**
* **Backend & Database:** **Supabase**

---

## Key Features

### Admin Dashboard
* Secure login system.
* Manage Cabins (Create, Read, Update, Delete).
* Manage Bookings and Guests.
* Dashboard analytics and statistics.
* Dark/Light theme switch.

### Customer Website
* Extremely fast pages using Static and Dynamic rendering.
* User login and protected pages.
* Browse cabins and view details.
* Make new reservations.

---

## Why Hybrid Rendering? (SSR/SSG)

Using both Static and Server-Side Rendering (Hybrid) offers several key benefits for the public website:

* **Fast Loading:** Static pages load instantly, giving users a great first impression.
* **Good for Search Engines (SEO):** The HTML is ready before the user's browser sees it, which helps search engines easily read the content.
* **Scalability:** Static files are easy to cache on a CDN, meaning the site can handle many visitors without slowing down.
* **Always Fresh Data:** Dynamic rendering ensures personalized data is never outdated.

---

## Admin Dashboard UI Preview

> The admin panel is restricted for internal use only. Screenshots below show the interface.

<a href="https://github.com/user-attachments/assets/2d5b6170-9d2a-4d80-b511-4c783b539dc3">
  <img src="https://github.com/user-attachments/assets/2d5b6170-9d2a-4d80-b511-4c783b539dc3" width="300" />
</a>

<a href="https://github.com/user-attachments/assets/6c02025d-cc78-47c3-90f8-1f01a29e2679">
  <img src="https://github.com/user-attachments/assets/6c02025d-cc78-47c3-90f8-1f01a29e2679" width="300" />
</a>

<a href="https://github.com/user-attachments/assets/08907b15-e6e1-41b3-9fbb-035e2060ae72">
  <img src="https://github.com/user-attachments/assets/08907b15-e6e1-41b3-9fbb-035e2060ae72" width="300" />
</a>

<a href="https://github.com/user-attachments/assets/12249eef-e20a-4545-a453-b6a57d5754ef">
  <img src="https://github.com/user-attachments/assets/12249eef-e20a-4545-a453-b6a57d5754ef" width="300" />
</a>

<a href="https://github.com/user-attachments/assets/0655855a-b48e-4832-9a91-5ee7e20ef02d">
  <img src="https://github.com/user-attachments/assets/0655855a-b48e-4832-9a91-5ee7e20ef02d" width="300" />
</a>

<a href="https://github.com/user-attachments/assets/064d8b3f-3776-4956-ad68-15f278a17cbc">
  <img src="https://github.com/user-attachments/assets/064d8b3f-3776-4956-ad68-15f278a17cbc" width="300" />
</a>

<a href="https://github.com/user-attachments/assets/62595416-2519-4671-b351-1f05409a45c2">
  <img src="https://github.com/user-attachments/assets/62595416-2519-4671-b351-1f05409a45c2" width="300" />
</a>

<a href="https://github.com/user-attachments/assets/e0cee429-ac97-4ef6-a399-e1c9ed7e1bc3">
  <img src="https://github.com/user-attachments/assets/e0cee429-ac97-4ef6-a399-e1c9ed7e1bc3" width="300" />
</a>

<a href="https://github.com/user-attachments/assets/49b593fe-f3c8-4c22-b263-ad6a71279bf2">
  <img src="https://github.com/user-attachments/assets/49b593fe-f3c8-4c22-b263-ad6a71279bf2" width="300" />
</a>

<a href="https://github.com/user-attachments/assets/3543fde1-1d05-437d-86cd-19f19f43c019">
  <img src="https://github.com/user-attachments/assets/3543fde1-1d05-437d-86cd-19f19f43c019" width="300" />
</a>

---

## Backend & Infrastructure

* **Database:** Powered by **PostgreSQL** via **Supabase**.
* **Services:** Supabase handles user login, the database, and real-time updates.
* **Deployment:** Hosted on **Vercel** for optimal Next.js performance.

---

## Installation & Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/the-wild-oasis.git](https://github.com/your-username/the-wild-oasis.git)
    cd the-wild-oasis
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up Environment Variables:** Create a `.env.local` file in the root directory and add your Supabase and NextAuth credentials.
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
