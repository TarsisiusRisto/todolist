import Sidebar from "@/components/nav/side-bar";
import Tasks from "@/components/todolist/tasks";
import UserProfile from "@/components/nav/user-profile";

export default function Home() {
  return (
    <div className="grid min-h-screen wfull md:grid-cols-[220px-1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:px-16">
          <h1>To Do List</h1>
          <UserProfile />
          <Tasks></Tasks>
        </main>
      </div>
    </div>
  );
}
