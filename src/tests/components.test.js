import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import Mission from "../components/Mission";
import Missions from "../components/Missions";
import Header from "../components/Header";
import Rockets from "../components/Rockets";

describe("Test components", () => {
  it("Mission component renders correctly", () => {
    const mission = render(
      <Provider store={store}>
        <Mission />
      </Provider>
    );

    expect(mission).toMatchSnapshot();
  });

  it("Missions component renders correctly", () => {
    const missions = render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );

    expect(missions).toMatchSnapshot();
  });

  it("Rockets component renders correctly", () => {
    const rockets = render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );
    expect(rockets).toMatchSnapshot();
  });

  it("MyProfile component renders correctly", () => {
    const myProfile = renderer.create(<myProfile />).toJSON();
    expect(myProfile).toMatchSnapshot();
  });
});

// Test Navigation links
const MockNavLinks = () => {
  <BrowserRouter>
    <Header />
  </BrowserRouter>;
};
describe("Test links in Header component", () => {
  it("Nav links render correctly", () => {
    const navLinks = renderer.create(<MockNavLinks />).toJSON();
    expect(navLinks).toMatchSnapshot();
  });
});
