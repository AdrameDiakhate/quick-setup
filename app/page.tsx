import { ThemeSwitcher } from "@/components/theme-switcher/theme-switcher";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <ThemeSwitcher />
      </div>
     <p> HomePage </p>
    </div>
  );
}
