# Overview

This project is a React application that displays a `ProductCard` component. The component showcases product details such as the brand name, product title, price (both new and used), and an image. The application is fully responsive, ensuring it works seamlessly on various screen sizes, from mobile to desktop. Below is an explanation of the approach taken for the code and the responsive design.

## Table of Contents

0. [Answers to Questions](#answers-to-questions)  
1. [How to Launch and Set Up the Project](#how-to-launch-and-set-up-the-project)  
2. [Approach to the Code](#approach-to-the-code)  
3. [Responsive Design Approach](#responsive-design-approach)  
4. [Conclusion](#conclusion)

## Answers to Questions

The answers to the assessment questions can be found in the file `rakuten_questions.pdf` located in the repository. Please refer to this document for detailed responses.

## How to Launch and Set Up the Project

### Prerequisites

- Node.js and npm installed on your machine.

### Steps to Run the Project

1. **Clone the Repository**  
    Clone the repository to your local machine.

    ```bash
    git clone https://github.com/zikous/rakuten-assessment
    cd rakuten-assessment
    ```

2. **Install Dependencies**  
    Install the required dependencies using npm.

    ```bash
    npm install
    ```

3. **Run the Project**  
    Start the development server.

    ```bash
    npm start
    ```

4. **View the Application**  
    Open your browser and navigate to `http://localhost:3000` to see the `ProductCard` in action.

---

## Approach to the Code

### App Component

The `App` component serves as the entry point of the application. It defines a `productDetails` object containing the product data, such as the brand name, product title, price, and image URL. This data is passed as a prop to the `ProductCard` component, which handles the rendering of the product details.

### ProductCard Component

The `ProductCard` component is designed to display the product details in a structured and visually appealing way. It takes a `product` prop and checks if all required fields (e.g., `brandName`, `productTitle`, `newPrice`, `imageUrl`) are present. If any required field is missing, the component returns `null` and renders nothing. This ensures robustness and prevents errors when incomplete data is provided.

The component is divided into two main sections:

1. **Product Image**: Displays the product image with a link to the product page.  
2. **Product Details**: Shows the brand name, product title, new price, and used price (if available). The used price is conditionally rendered, ensuring it only appears when provided.

### CSS Styling

The styling is done using a CSS file (`ProductCard.css`). The design uses the Poppins font from Google Fonts for a modern look. The card has a clean layout with a hover effect that slightly lifts the card and adds a shadow, enhancing user interaction. The styling ensures the card is visually consistent and professional.

---

## Responsive Design Approach

The application is designed to be fully responsive, adapting to different screen sizes. Here’s how the responsive design was implemented:

1. **Mobile-First Approach**  
    The default layout is optimized for mobile devices. The card uses a column layout on smaller screens, with the image and details stacked vertically. This ensures readability and usability on small screens.

2. **Media Queries**  
    Two breakpoints are used to adjust the layout and font sizes for different screen sizes:
    - **Tablet (max-width: 768px)**: The card switches to a column layout, and the image is centered with a maximum width.
    - **Mobile (max-width: 480px)**: Font sizes are reduced slightly to fit smaller screens, and padding/gaps are adjusted for better spacing.

3. **Flexible Image Sizing**  
    The product image is set to be responsive, scaling proportionally based on the screen width. On smaller screens, the image takes up the full width of the container, while on larger screens, it maintains a fixed size.

4. **Hover Effects**  
    On larger screens, the card includes a hover effect that lifts the card and adds a shadow, providing a subtle interactive element. This effect is disabled on smaller screens to ensure a smooth user experience.

---

## Conclusion

This project demonstrates a clean and responsive implementation of a `ProductCard` component using React. The code is structured to ensure robustness, and the design is optimized for various screen sizes, providing a seamless user experience.
