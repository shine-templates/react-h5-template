import { FC } from 'react'
import { NavBar } from 'antd-mobile'
const Detail: FC = () => {
  const back = () => {
    history.back()
  }
  return (
    <div>
      <NavBar onBack={back}>详情</NavBar>
    </div>
  )
}
export default Detail
