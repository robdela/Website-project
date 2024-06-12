import { createRoot } from 'react-dom/client';

import Home from "./app/home";
import User from "./app/user";

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route index element={<Home />} />*/}
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);