import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Color } from "../../assets/theme";
import { Button, Card, Stack, Text } from "../../components";
import { Container } from "../../components/grid-layout";
import { products } from "../../data";

const TrendingProducts = () => {
  return (
    <Container>
      <Stack
        padding={"8rem 0"}
        direction={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Stack width={"32%"} className={"animate"}>
          <Text size={"4rem"} color={Color.purple100}>
            Trending on{" "}
            <Text as={"small"} color={Color.orange}>
              {" "}
              Esentials
            </Text>
          </Text>
          <Text as={"p"} padding={"2rem 0"} size={"1.1rem"} color={Color.gray}>
            Make with nature ingredients — our products' transparent ingredient.
            Fear of God Essentials.
          </Text>
          <Button
            width={"250px"}
            weight={"600"}
            variant={"transparent"}
            color={Color.orange}
            onClick={() => {}}
          >
            Browse All Products <HiArrowNarrowRight size={18} />
          </Button>
        </Stack>

        {products.map((item, i) => (
          <Card key={i}>
            <Card.Body>
              <img src={item.image} alt={"product"} />
            </Card.Body>
            <Card.Footer>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
            </Card.Footer>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default TrendingProducts;
