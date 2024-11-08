"use client";

import { Suspense } from "react";

import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";

export default function IndexPage() {

  //console.log("process.env.SUPABASE_URL->",process.env.SUPABASE_URL)

  return (
    <Suspense>
      <Authenticated key="home-page" v3LegacyAuthProviderCompatible>
        <NavigateToResource />
      </Authenticated>
    </Suspense>
  );
}
