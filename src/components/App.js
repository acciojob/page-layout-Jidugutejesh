
import React from "react";
import './../styles/App.css';
function PageLayout({ header, footer, children }) {
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}
const App = () => {
  return (
    <div>
     <PageLayout
      header={<h1>My  Website is tejesh</h1>}
      footer={<p>2025 My Website</p>}
    >
      <p>Welcome to the main content!</p>
    </PageLayout>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
