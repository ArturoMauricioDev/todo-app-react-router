import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { EditTodoPage } from "./EditTodoPage";
import { HomePage } from "./HomePage";
import { NewTodoPage } from "./NewTodoPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  );
}
export { App };
