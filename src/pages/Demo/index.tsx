import React from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';

const obj = {
  name: undefined,
  age: null,
  func: () => {},
  date: new Date(),
};

const Demo = () => {
  console.log('obj', JSON.stringify(obj), JSON.parse(JSON.stringify(obj)));
  console.log(typeof JSON.parse(JSON.stringify(obj)).date);
  return <PageContainer>Demo</PageContainer>;
};

export default Demo;
