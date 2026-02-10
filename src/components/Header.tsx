import React from "react";
import NavBar from "@/components/NavBar";
import { createClient } from "@/prismicio";

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
      <NavBar settings={settings} />
    </header>
  );
}

export default Header;
