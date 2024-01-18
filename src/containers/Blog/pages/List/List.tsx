import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Spin } from 'antd';
import { useEffect } from 'react';
import { blogListSelectors } from '.';
import { blogListActions } from './slice';

const List = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(blogListSelectors.isLoading);

  useEffect(() => {
    dispatch(blogListActions.getBlogsRequest());
  }, [dispatch]);

  return (
    <Spin spinning={isLoading}>
      <div>
        <p>list</p>
      </div>
    </Spin>
  );
};

export { List };
