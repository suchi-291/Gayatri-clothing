import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>This is shop page.</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />}></Route>
        <Route path="/shop" element={<Shop />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
export default App;
