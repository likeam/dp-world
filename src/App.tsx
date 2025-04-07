import Content from "./Components/Content";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import SplitScreen from "./Components/SplitScreen";

const App = () => {
  return (
    <div className=" flex flex-col h-screen">
      <Header />
      <SplitScreen leftWeight={3} rightWeight={60}>
        <Sidebar />
        <Content />
      </SplitScreen>

      <Footer />
    </div>
  );
};

export default App;
