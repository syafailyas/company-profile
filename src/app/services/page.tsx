import Main from "@/views/services/Main";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata =
{
  title: "Services | Supernova",
};

const ServicesPage: React.FC = () =>
{
  return (
    <>
      <Main/>
    </>
  );
};

export default ServicesPage;