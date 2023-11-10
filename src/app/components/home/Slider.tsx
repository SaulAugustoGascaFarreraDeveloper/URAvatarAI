"use client"
import { Flex } from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { prompts } from "@/lib/prompts";

const SliderComponent = () => {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 5,
      },
      breakpoints: {
        "(min-width: 500px)": {
          slides: { perView: 4, spacing: 5 },
        },
        "(min-width: 800px)": {
          slides: { perView: 6, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 10, spacing: 5 },
        },
      },
      loop: true,
      renderMode: "performance",
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });

          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Crear un array de nombres de archivos de imágenes
  const imageFiles = Array(14)
    .fill(0)
    .map((_, index) => `Maquinaria/${index + 1}.jpeg`);

  return (
    <Flex overflowX="hidden" my={5} ref={sliderRef}>
      {imageFiles.map((image, index) => (
        <Box
          transition="200ms all"
          _hover={{ filter: "contrast(140%)" }}
          key={index}
          className="keen-slider__slide"
        >
          <Link href="">
            <Image
              style={{ borderRadius: 10 }}
              src={image}
              alt={`maq${index + 1}`}
              width={400}
              height={400}
              unoptimized
            />
          </Link>
        </Box>
      ))}
    </Flex>
  );
};

export default SliderComponent;