import { Form, Input, Button, message } from "antd";
import AuthLayout from "../components/AuthLayout";
 // corrected from "react-router"
import axios from "axios";

export default function CompanyRegisteration() {
  const onFinish = async (values: any) => {
    try {
      const response = await axios.post("https://d9c7f3fee6e9.ngrok-free.app/auth/create-company", {
       
        email: values.email,
        company: values.company,
       
      });

      message.success("Registration successful!");
      console.log("Server Response:", response.data);

      // Optionally redirect or reset form here

    } catch (error: any) {
      console.error("Registration error:", error);
      message.error(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <AuthLayout
      title="Welcome!"
      subtitle="Register to access Projects workspace and manage your team efficiently."
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Register</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Full Name"
          name="fullname"
          rules={[{ required: true, message: "Please input your Email Id!" }]}
        >
          <Input size="small" />
        </Form.Item>

        <Form.Item
          label="Comapny Name"
          name="company"
          rules={[{ required: true, message: "Please input your Company Name!" }]}
        >
          <Input size="small" />
        </Form.Item>

      
    

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full" size="large">
            Create Account
          </Button>
        </Form.Item>

        
      </Form>
    </AuthLayout>
  );
}
