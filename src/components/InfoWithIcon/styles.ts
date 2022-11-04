import { styled } from "../../styles/theme";

export const InfoWithIconContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
});

export const IconContainer = styled("div", {
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",


  background: '$$backgroundIcon',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
