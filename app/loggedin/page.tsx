import Tasks from "@/components/todolist/tasks";
import UserProfile from "@/components/todolist/user-profile";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1>To Do List</h1>
      <UserProfile />
      <Tasks></Tasks>
    </div>
  );
}
