import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Select, Button, Row, Col } from 'antd';
import CustomButton from "./CustomButton";

const DynamicForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <Row>
      <Col span={8}></Col>
      <Col span={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <div className="grid grid-cols-3">
            <div>
              <Controller
                name="select"
                control={control}
                render={({ field }) => <Select
                  {...field}
                  options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" }
                  ]}
                />}
              />
            </div>
          </div>
          <br />
          <div className="grid grid-cols-3">
            <div></div>
            <div className="col-span-1">
              <CustomButton type="submit" text="Submit" />
            </div>
            <div></div>
          </div>
        </form>
      </Col>
      <Col span={8}></Col>
    </Row>
  );
};
export default DynamicForm;