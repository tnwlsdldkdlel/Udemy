import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MainHeader onCreatePost={handleModal}></MainHeader>
      <main>
        <PostList isOpen={isOpen} onModal={handleModal} />
      </main>
    </>
  );
}

export default App;
