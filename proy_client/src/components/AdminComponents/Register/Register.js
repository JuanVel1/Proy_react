import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

const Register = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">S</Radio.Button>
          <Radio.Button value="default">M</Radio.Button>
          <Radio.Button value="large">L</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Nombres">
        <Input />
      </Form.Item>
      <Form.Item label="Apellidos">
        <Input />
      </Form.Item>
      <Form.Item label="email">
        <Input type={'email'}/>
      </Form.Item>
      <Form.Item label="Genero">
        <Select>
          <Select.Option value="demo">Hombre</Select.Option>
          <Select.Option value="demo">Mujer</Select.Option>
          <Select.Option value="demo">Otro</Select.Option>
        </Select>
      </Form.Item>
      {/* <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [
                {
                  title: 'Bamboo',
                  value: 'bamboo',
                },
              ],
            },
          ]}
        />
      </Form.Item> */}
      {/* <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                },
              ],
            },
          ]}
        />
      </Form.Item> */}
      <Form.Item label="Fecha de nacimiento">
        <DatePicker />
      </Form.Item>
      {/* <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item> */}
      <Form.Item label="Tratamiento de datos" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Registrarse">
        <Button>Enviar</Button>
      </Form.Item>
    </Form>
  );
};

export default () => <Register/>;