import Card from "./components/Card";

function App() {
  return (
    <div className="flex min-h-screen flex-wrap justify-center gap-8 bg-gray-100 p-10">
      <Card
        name="Sarah Johnson"
        role="UI Developer"
        description="Creates beautiful and accessible user interfaces with React and Tailwind CSS."
        imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=60"
      />

      <Card
        name="Tony Stark"
        role="Full Stack Developer"
        description="Passionate about scalable systems, cloud computing, and AI."
        imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=60"
      />

      <Card
        name="Peter Parker"
        role="React Developer"
        description="Building responsive user interfaces with React and Tailwind CSS."
        imageUrl="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=500&q=60"
      />

      <Card
        name="Bruce Wayne"
        role="Backend Developer"
        description="Focused on Node.js, databases, APIs, and system design."
        imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}

export default App;