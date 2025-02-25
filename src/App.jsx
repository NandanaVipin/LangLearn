import React, { Component } from "react";
import PropTypes from 'prop-types';  // Add PropTypes for validation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import "./App.css";

// Add error boundary wrapper
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Something went wrong.</h1>
          <button onClick={() => window.location.reload()}>Refresh Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Add PropTypes validation
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
