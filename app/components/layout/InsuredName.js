// 'use client';

import { Input, Form } from "antd";
import { storeContext } from "../../../context/storeContext";

const InsuredName = () => {
	// const { insured } = storeContext();
  // const insured = {
  //   firstName: 'bob',
  //   lastName: 'bober'
  // }
  console.log('InsuredName = (property): insured ', insured);
    return (
      <span>
							{insured.firstName} {insured.lastName}
						</span>
    );
  };
export default InsuredName;
