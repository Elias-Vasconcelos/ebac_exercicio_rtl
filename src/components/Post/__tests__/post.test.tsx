import { render, screen } from "@testing-library/react";

import Post from "..";

describe("Teste de renderizacao do Container post", () => {
  test("renderizacao da img", () => {
    render(
      <Post
        children={"Texto Para teste"}
        imageUrl={"../../../ImagemFicticia.png"}
      />
    );
    expect(screen.getByText("Texto Para teste")).toBeInTheDocument();
  });
});
