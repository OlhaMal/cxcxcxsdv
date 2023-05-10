import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { SharedLayoutContainer } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <SharedLayoutContainer>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </SharedLayoutContainer>
  );
};

export default SharedLayout;
