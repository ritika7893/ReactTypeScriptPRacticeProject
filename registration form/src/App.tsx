import { useState } from 'react'

import './App.css'
import {Form,List,Input,Button} from 'antd'
interface User {
  name: string;
  email: string;
  password: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([])
  const onFinish=(value:User)=>{
    setUsers([...users,value])
    console.log('Success:', value)
  }

  return (
    <>
     <div className='container'>
      <h1>Registration Form</h1>
      <Form
       layout='vertical' onFinish={onFinish}>
        <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>
        <Button type='primary' htmlType='submit'>Submit</Button>
        <List
          header={<div>Registered Users</div>}
          bordered
          dataSource={users}
          renderItem={item => (
            <List.Item>
              {item.name} - {item.email}
            </List.Item>
          )}
        />
       </Form>
      
        
      </div>
    </>
  )
}

export default App
