import {Outlet} from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
    <nav>
      <span className="txt-4xl text-primary">CStore</span>
    </nav>
    <Outlet/>
    </>
  )
};
export default HomeLayout;
