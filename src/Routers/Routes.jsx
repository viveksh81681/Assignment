import React from "react";
import { Destination } from "../Components/Destination";
import { Routes, Route } from "react-router-dom";

import { Error } from "../Components/Error";
import { NotFound } from "../Components/NotFound";
import { Result } from "../Components/Result";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Destination />} />
      <Route path="/error" element={<Error />} />
      <Route path="/notFound" element={<NotFound />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};
