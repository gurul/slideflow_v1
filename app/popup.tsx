import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'; // Importing GoogleOAuthProvider and GoogleLogin from @react-oauth/google for Google authentication
import React from "react"; // Importing React for building the component

// Defining the interface for the props that the Popup component will receive
interface PopupProps {
  isVisible: boolean; // Boolean to control the visibility of the popup
  onClose: () => void; // Function to handle closing the popup
}

// Functional component Popup which takes PopupProps as props
const Popup: React.FC<PopupProps> = ({ isVisible, onClose }) => {
  // Return null if the popup is not visible
  if (!isVisible) return null;

  // Function to handle successful Google login
  const handleGoogleSuccess = (credentialResponse: any) => {
    console.log("Google login successful!", credentialResponse);
  };

  // Function to handle failed Google login
  const handleGoogleFailure = () => {
    console.error("Google login failed!");
  };

  return (
    // GoogleOAuthProvider wraps the component to provide the clientId for Google OAuth
    <GoogleOAuthProvider clientId="268708163857-uvro9q45p6cuq80p1c1kcdcou67bgj75.apps.googleusercontent.com">
      {/* Popup container with fixed positioning to cover the entire viewport */}
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
        {/* Popup content box with styling */}
        <div className="bg-white p-6 rounded shadow-lg">
          {/* Popup heading */}
          <h2 className="text-xl font-bold mb-4 text-black">Login with Google</h2>
          {/* Popup description */}
          <p className="mb-4 text-black">Sign in to access your account.</p>
          {/* Google login button centered within the popup */}
          <div className="flex justify-center mb-4">
            <GoogleLogin
              onSuccess={handleGoogleSuccess} // Callback for successful login
              onError={handleGoogleFailure} // Callback for failed login
            />
          </div>
          {/* Button to close the popup */}
          <button
            className="px-4 py-2 bg-[#156095] text-white rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Popup; // Exporting the Popup component for use in other parts of the application