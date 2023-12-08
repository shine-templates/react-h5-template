import { FC } from 'react'
import { Button, NavBar } from 'antd-mobile'
import { Link } from 'react-router-dom'
const Home: FC = () => {
  return (
    <div>
      <NavBar back={null}>首页</NavBar>

      <Link to={'/detail'}>
        <Button block color='primary' size='large'>
          详情
        </Button>
      </Link>
    </div>
  )
}

export default Home
