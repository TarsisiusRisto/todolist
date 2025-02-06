import Tasks from "../components/todolist/tasks";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1>TodoList</h1>
      <Button>Hello</Button>
      <Tasks />
    </div>
  );
}
