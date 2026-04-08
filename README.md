# 🔐 PwnWatch — Breach Viewer Dashboard

## 📌 Project Overview

**PwnWatch** is a cybersecurity-focused web application that displays information about known data breaches. It fetches real-time breach data from an external API and presents it in a clean, interactive interface.

The application allows users to explore breached companies, understand when breaches occurred, and read details about each incident.

---

## 🎯 Purpose of the Project

The goal of PwnWatch is to:

* Provide awareness about **major data breaches**
* Help users explore **breached organizations**
* Demonstrate **JavaScript interactivity and API usage**

---

## 🌐 Public API Used

* **Have I Been Pwned API**
  👉 Used to fetch a list of publicly known data breaches

---

## 🚀 Implemented Features

### 📡 Fetch & Display Breach Data

* Retrieves breach data using the **Fetch API**
* Dynamically renders data using `.map()`
* Displays:
  * Company name
  * Breach date
  * Description
  * Logo

---

### 🔍 Search Functionality

* Users can search breaches by keywords
* Searches through:
  * Title
  * Description
* Implemented using:
  * `.filter()`

---

### 🔃 Sorting Options

* Users can sort breach data by:
  * Date (Ascending)
  * Date (Descending)
  * Alphabetical order
* Implemented using:
  * `.sort()`

---

### 🌙 Dark / Light Mode

* Toggle between themes
* Improves user experience and accessibility

---

### ⚡ Dynamic Rendering

* No page reload required
* UI updates instantly on:
  * Search
  * Sort
  * Theme change

---

## 🧩 Application Structure

* **Header**
  * Title and subtitle
* **Controls Panel**
  * Search input
  * Sorting dropdown
  * Theme toggle button
* **Results Section**
  * Displays breach cards dynamically

---

## 🛠️ Technologies Used

* **HTML** — Structure
* **CSS** — Styling and layout
* **JavaScript** — Logic and interactivity
* **Fetch API** — Data retrieval
* **Array Higher-Order Functions**
  * `map()` → rendering
  * `filter()` → searching
  * `sort()` → sorting

---

## ⚙️ How to Run the Project

1. Download or clone the project
2. Open the project folder
3. Run `index.html` in your browser

---

## 📅 Milestone Status

* ✅ Milestone 1: Project Idea & Planning
* ✅ Milestone 2: API Integration
* ✅ Milestone 3: Core Features (Search, Sort, Theme)
* ⏳ Milestone 4: Advanced Features & Deployment

---

## 🚧 Future Improvements

* Risk scoring system
* Email-based breach search
* Filtering by data type
* Analytics dashboard
* Export report feature

---

## 🧠 Conclusion

PwnWatch currently serves as a dynamic breach data viewer, showcasing the use of modern JavaScript concepts like API integration and higher-order functions. It forms a strong foundation for building more advanced cybersecurity features in future milestones.
