import React from "react";

const Images = (props: { twitter?: string }) => {
  const images = [
    "https://picsum.photos/500/200?a",
    "https://picsum.photos/500/200?b",
    "https://picsum.photos/500/200?c",
    "https://picsum.photos/500/200?d",
    "https://picsum.photos/500/200?e",
  ];

  return (
    <section className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-2 sm:gap-2 gap-1 2xl:gap-x-4 xl:gap-x-4 lg:gap-x-4 md:gap-x-0 sm:gap-x-0 gap-x-2 place-content-center">
      {images.map((url, i) => {
        return (
          <img
            alt="example image"
            src={url}
            key={i}
            className="rounded-md shadow-sm 2xl:w-auto xl:w-auto lg:w-auto md:w-1/2 sm:w-1/2 w-1/3 place-self-center"
          />
        );
      })}
      <img
        alt="example image"
        src={props?.twitter}
        className="rounded-md shadow-sm 2xl:w-auto xl:w-auto lg:w-auto md:w-1/2 sm:w-1/2 w-1/3 place-self-center"
      />
    </section>
  );
};

export default Images;
