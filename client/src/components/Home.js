import React from "react";
import styled from "styled-components";
import { Image, } from "semantic-ui-react";
import { StyledHeader, } from "../styles/shared";

const Home = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
    <StyledHeader as="h1" centered title>
      Hugh Peppercorn
    </StyledHeader>
    <br />
    <br />
    <StyledImage
      size='medium'
      circular
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEMqIekyXIictVeZ8JUSW-d5RmsxXHdfA6WVPdh55g474N5y496A"
    />
  </div>
);

const StyledImage = styled(Image)`
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  height: 4px;
  right: 0;
  left: 0;
  top: 0;
  position: absolute;
  padding: 5px;
`;

export default Home;
