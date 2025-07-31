import { Form, Input, Button, Checkbox } from "antd";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router";

const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <AuthLayout
      title="Welcome back!"
      subtitle="Sign in to access  Projects workspace and manage your team efficiently."
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Sign In</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email address"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <div className="flex justify-between items-center mb-4">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="text-sm text-blue-600 hover:underline" href="#">
            Forgot password?
          </a>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full" size="large">
            Sign In
          </Button>
        </Form.Item>

        <div className="text-center text-sm mt-4">
          Don't have an account?{" "}
         
          <Link to="/register" className="text-blue-600 hover:underline" > Sign Up</Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default LoginPage;
