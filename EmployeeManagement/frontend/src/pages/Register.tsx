import { Form, Input, Button, message } from "antd";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router"; // corrected from "react-router"
import axios from "axios";

export default function Register() {
  const onFinish = async (values: any) => {
    try {
      const response = await axios.post("https://d9c7f3fee6e9.ngrok-free.app/auth/register-user", {
        fullname: values.fullname,
        email: values.email,
        number: values.number,
        password: values.password,
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
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input size="small" />
        </Form.Item>

        <Form.Item
          label="Email address"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input size="small" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="number"
          rules={[{ required: true, message: "Please input your mobile number" }]}
        >
          <Input size="small" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password size="small" />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Passwords do not match!");
              },
            }),
          ]}
        >
          <Input.Password size="small" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full" size="large">
            Create Account
          </Button>
        </Form.Item>

        <div className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </div>
      </Form>
    </AuthLayout>
  );
}
