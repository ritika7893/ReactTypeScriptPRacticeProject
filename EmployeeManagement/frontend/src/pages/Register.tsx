import { Form, Input, Button } from "antd";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router";

export default function Register() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
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
