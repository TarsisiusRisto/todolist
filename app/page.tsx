import { signInAction } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1>Login</h1>
      <form action={signInAction}>
        <Button>Login</Button>
      </form>
    </div>
  );
}
