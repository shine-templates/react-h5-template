import { FC, useEffect } from 'react'
import { TabBar } from 'antd-mobile'
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom'
import { AppOutline, UnorderedListOutline } from 'antd-mobile-icons'
import Home from '../views/home'
import Mine from '../views/mine'
import styles from './index.module.less'

const Bottom: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    navigate(value)
  }

  useEffect(() => {
    navigate('/home', { replace: true })
  }, [navigate])

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/mine',
      title: '我的',
      icon: <UnorderedListOutline />,
    },
  ]

  return (
    <div className={styles.app}>
      <div className={styles.body}>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='mine' element={<Mine />} />
        </Routes>
      </div>
      <div className={styles.bottom}>
        <TabBar
          activeKey={pathname}
          onChange={(value) => setRouteActive(value)}
        >
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}

export default Bottom
