import React from "react";
import client from "../../../tina/__generated__/client";
import Navbar from "@/components/layout/navbar";
import { SettingsNavigation } from "@/base/tina/__generated__/types";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="space-y-4">
      <Navbar />
      <main className="min-h-screen container space-y-4">{children}</main>
    </div>
  );
}

export default Layout;
