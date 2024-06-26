import Container from "@/components/Container";
import CultureCard from "@/components/CultureCard";
import { ourCulture } from "@/utils/helper";
import React from "react";

const Culture: React.FC = () =>
{
  return (
    <section className = "pt-[100px]">
      <Container>
        <div className = "px-4 md:px-0 text-center">
          <h1 className = "text-3xl md:text-4xl font-medium uppercase">
            Our Culture
          </h1>

          <p className = "md:w-10/12 lg:w-8/12 mx-auto">
            Customer-centric excellence, innovation driven by collaboration, and
            fostering an inclusive and supportive environment.
          </p>
        </div>

        <div className = "mt-6 space-y-6 text-justify">
          {
            ourCulture.map(
              (culture, idx) =>
              (
                <CultureCard
                  key = {idx}
                  id = {idx}
                  description = {culture.description}
                  imgUrl = {culture.imgUrl}
                  title = {culture.title}
                />
              )
            )
          }
        </div>
      </Container>
    </section>
  );
};

export default Culture;