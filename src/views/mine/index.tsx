import { FC } from 'react'
import { Button, NavBar } from 'antd-mobile'
const Mine: FC = () => {
  return (
    <div>
      <NavBar back={null}>我的</NavBar>
      <Button block color='primary' size='large'>
        Block Button
      </Button>
    </div>
  )
}

export default Mine
