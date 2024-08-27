Numida Loan Application App
This is a mobile application built using React Native and Expo. The app allows users to view loan products and apply for loans by filling out a form. It features a clean user interface with validation, state management, and the ability to learn more about each loan product through a modal popup.

Features
-Loan Products Display: View a list of available loan products with details like maximum amount and interest rate.
-Loan Application Form: Submit a loan application by filling out a form with your name, email, loan amount, and loan purpose.
-Modal Popup: View detailed information about a loan product by clicking on the "Learn More" button.
-Form Validation: Real-time form validation using Formik and Yup.
-State Management: Manage application state using Redux Toolkit.
-Custom Hooks: Reusable custom hooks for handling API calls and business logic.
-Loading Indicator: Visual feedback during form submission with a loading spinner.
-Internet Check: Checks if the device is connected to the internet and gives the user feedback

Tech Stack
-React Native: Mobile app framework for building native apps using React.
-Expo: A set of tools and services for building and deploying React Native applications.
-Formik: A library for easily building forms in React and React Native.
-Yup: A schema builder for value parsing and validation.
-Redux Toolkit: A powerful toolset for efficient Redux development.
-React Native Toast Message: A customizable toast message component for React Native.
-React Native Modal: Built-in modal component for displaying overlays.

Setup and Installation

Prerequisites
-Node.js (version >= 12.x)
-Yarn or npm
-Expo CLI (version >= 5.x)

Installation

1.Clone the repository:
git clone https://github.com/wambui-njage/numida.git
cd numida

2.Install dependencies:
yarn install

3.Start the Expo server
yarn start

4.Install Expo Go to run on a physical device or simulator:

Expo Go Links For Play Store and App Store

Play Store: https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=web_share
App Store: https://apps.apple.com/us/app/expo-go/id982107779

Use the Expo Go app on your mobile device to scan the QR code provided by the Expo server.
Or press i to run the app in an iOS simulator or a to run it in an Android emulator.

File Structure
numida/
├── backend/ # Backend code (APIs)
├── src/
│ ├── components/ # Reusable UI components
│ ├── constants/ # Manage error and success strings centrally
│ ├── graphql/
│ │ └── queries/ # GraphQL queries
│ ├── hooks/ # Custom React hooks
│ ├── navigation/ # Navigation configurations
│ ├── providers/ # Context providers (e.g., for network connectivity)
│ ├── screens/ # Application screens (e.g., ApplyForm, Dashboard)
│ ├── store/ # Redux store configuration and slices
│ ├── styles/ # Global styles and theme settings
│ ├── types/ # TypeScript types and interfaces
│ └── utils/ # Utility functions (e.g., validation schemas)
├── assets/ # Image, font, and other static assets
├── App.tsx # Entry point of the application
├── app.json # Expo configuration
└── README.md # App documentation (this file)
