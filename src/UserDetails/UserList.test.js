import React from "react";
import { configure, shallow } from "enzyme";
import { UserList } from "./UserList";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("UserList", () => {
  test("UserList", () => {
    const wrapper = shallow(<UserList />);
    expect(wrapper.find("card").text()).nottoEqual("");
  });
});
