
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import { Layout, Menu, Breadcrumb, Card, List } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import data from './App.json';
import gr from './../src/image/gr.png'
import minicart from './../src/image/minicart.jpg'
import { Input} from 'antd'
function App() {
  const { Search } = Input;
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const onSearch = value => console.log(value);
  return (
    <Layout>
        <Header className="header">
          <div className="pic">
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Big_Bazaar_Logo.svg/1280px-Big_Bazaar_Logo.svg.png"} alt="bigbazar logo" className = "bbicon" height = "43px"></img>
          <Search placeholder="input search text" onSearch={onSearch} enterButton className="" align="top" />

          <img  className="minicart"src={minicart} alt={minicart} height="43px"></img>
            <img className="login" src="https://cflare.shop.bigbazaar.com/assets/desktop/images/customer/default-user-image.jpg" alt="login" />
            </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
</Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >

              <SubMenu key="sub1" icon={<ShoppingCartOutlined />} title="Category">
                <Menu.Item key="1">Kurtas &amp; kurtis</Menu.Item>
                <Menu.Item key="2">skirts &amp; shirts</Menu.Item>
                <Menu.Item key="3">Jackets &amp; Shrugs</Menu.Item>
                <Menu.Item key="4">Leggings &amp; salwars</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="snacks &amp; packaged foods">
                <Menu.Item key="5">OREO Cream Biscuits</Menu.Item>
                <Menu.Item key="6">Little Hearts</Menu.Item>
                <Menu.Item key="7">Pringles Potato Chips </Menu.Item>
                <Menu.Item key="8">Lay's Waffer</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3"  title="Beverages">
                <Menu.Item key="9">Minute Maid</Menu.Item>
                <Menu.Item key="10">Tropicana</Menu.Item>
                <Menu.Item key="11">paper boat</Menu.Item>
                <Menu.Item key="12">appy FIZZ</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' ,}}>
            <Breadcrumb style={{ margin: '16px 0',display:'flex' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}

            >
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                  xl: 4,
                  xxl: 3,
                }}
                dataSource={data.Array}
                renderItem={item => (


                  <List.Item>

                    <Card

                      title={item.title}>
                      <img src={item.image} className="image-container" />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                     

                    </Card>
                  </List.Item>

                )}
              />,
  </Content>
          </Layout>
        </Layout>
        </Layout>

   
  );
}

export default App;
