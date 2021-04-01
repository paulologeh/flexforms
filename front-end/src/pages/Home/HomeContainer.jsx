import React, { useState } from "react";
import { HomeView } from "./HomeView";

export const HomeContainer = () => {
  const [open, setOpen] = useState(false);
  const closeGrid = () => setOpen(false);
  const openGrid = () => setOpen(true);

  return <HomeView closeGrid={closeGrid} openGrid={openGrid} open={open} />;
};
