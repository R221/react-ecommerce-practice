import CarouselCard1 from "../carousel-cards/CarouselCard1";
import Carousel from "../carousel/Carousel";
import Navbar from "../navbar/Navbar";
import { Box, Container } from "@mui/material";
import { Fragment } from "react";

const Section1 = ({ carouselData }) => {
  return (
    <Fragment>
      <Navbar />
      <Box bgcolor="white" mb={7.5}>
        <Container
          sx={{
            py: "2rem",
          }}
        >
          <Carousel
            totalSlides={2}
            visibleSlides={1}
            infinite={true}
            autoPlay={false}
            showDots={true}
            showArrow={false}
            spacing="0px"
          >
            {carouselData &&
              carouselData.map((data, ind) => (
                <CarouselCard1 carousel={data} key={ind} />
              ))}
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Section1;
